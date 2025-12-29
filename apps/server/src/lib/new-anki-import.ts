import fs from "fs";
import path from "path";
import { tmpdir } from "os";
import AdmZip from "adm-zip";
import initSqlJs from "sql.js";
import prisma from "../../prisma";
import { uploadFile, processAnkiMedia } from "./upload";

export interface AnkiNote {
  id: string;
  front: string;
  back: string;
  media: string[];
  flds: string;
  sfld: string;
  tags?: string[];
}

export interface AnkiImportResult {
  notes: AnkiNote[];
  mediaFiles: Record<string, string>; // fileName -> absolutePath
  tempDir: string;
}

export interface ImportResult {
  deckId: number;
  deckTitle: string;
  flashcardsCreated: number;
  mediaProcessed: number;
  originalDeckName: string;
}

/* ---------------- Utils ---------------- */

function ensureDir(dir: string) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function makeTempDir(base?: string) {
  const tempId = `anki_import_${Date.now()}_${Math.random()
    .toString(36)
    .slice(2, 10)}`;
  const dir = base || path.join(tmpdir(), tempId);
  ensureDir(dir);
  return dir;
}

function pickDbFile(dir: string): string {
  const candidates = [
    "collection.anki21",
    "collection.anki21b",
    "collection.anki2",
  ];

  console.log("🔍 Analisando arquivos de banco disponíveis...");

  for (const c of candidates) {
    const full = path.join(dir, c);
    if (fs.existsSync(full) && fs.statSync(full).isFile()) {
      const stats = fs.statSync(full);
      const buffer = fs.readFileSync(full);
      const first16Bytes = buffer.subarray(0, 16);

      console.log(`📄 Arquivo: ${c}`);
      console.log(`   - Tamanho: ${stats.size} bytes`);
      console.log(
        `   - Primeiros 16 bytes (hex): ${first16Bytes.toString("hex")}`
      );
      console.log(
        `   - Cabeçalho SQLite válido: ${first16Bytes
          .toString("ascii")
          .startsWith("SQLite format 3")}`
      );

      // Verifica se é um arquivo SQLite válido
      if (first16Bytes.toString("ascii").startsWith("SQLite format 3")) {
        console.log(`✅ Usando arquivo de banco válido: ${c}`);
        return full;
      } else {
        console.log(
          `❌ Arquivo ${c} não é SQLite válido (possivelmente comprimido ou criptografado)`
        );
      }
    }
  }

  throw new Error(
    "Nenhum arquivo de banco SQLite válido encontrado (collection.anki2 / collection.anki21 / collection.anki21b)."
  );
}

function unique<T>(arr: T[]): T[] {
  const seen = new Set<T>();
  const out: T[] = [];
  for (const v of arr) {
    if (!seen.has(v)) {
      seen.add(v);
      out.push(v);
    }
  }
  return out;
}

function normalizeTags(raw?: string): string[] {
  if (!raw) return [];
  const t = raw.trim();
  if (!t) return [];
  const out: string[] = [];
  const re = /"([^"]+)"|'([^']+)'|(\S+)/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(t))) {
    const v = (m[1] || m[2] || m[3] || "").trim();
    if (v) out.push(v);
  }
  return unique(out);
}

function htmlToText(html: string): string {
  if (!html) return "";
  // Decodificar entidades comuns
  const decoded = html
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"');

  const withBreaks = decoded
    .replace(/<div>/gi, "\n")
    .replace(/<br\s*\/?>/gi, "\n");
  const noTags = withBreaks.replace(/<(?:.|\n)*?>/gm, "");
  return noTags.replace(/\n{3,}/g, "\n\n").trim();
}

function extractSquareBracketMedia(text: string): string[] {
  if (!text) return [];
  const out: string[] = [];
  const re = /\[([a-zA-Z]+):([^\]\r\n]+)\]/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text))) {
    const filename = m[2]?.trim();
    if (filename) out.push(filename);
  }
  return out;
}

function extractImgSrc(html: string): string[] {
  if (!html) return [];
  const out: string[] = [];
  const re = /<img[^>]+src=(?:"([^"]+)"|'([^']+)'|([^"'\s>]+))[^>]*>/gi;
  let m: RegExpExecArray | null;
  while ((m = re.exec(html))) {
    const src = (m[1] || m[2] || m[3] || "").trim();
    if (src) out.push(src);
  }
  return out;
}

export async function ankiToJson(
  inputBuffer: Buffer,
  outputDir?: string
): Promise<AnkiImportResult> {
  if (!inputBuffer?.length) {
    throw new Error("inputBuffer é obrigatório");
  }

  console.log("📦 Iniciando processamento do arquivo Anki...");
  console.log(`📏 Tamanho do buffer: ${inputBuffer.length} bytes`);

  const dir = makeTempDir(outputDir);
  const mediaDir = path.join(dir, "media");
  ensureDir(mediaDir);

  console.log(`📁 Diretório temporário criado: ${dir}`);
  console.log(`📁 Diretório de mídia: ${mediaDir}`);

  // 1) Extrair ZIP
  console.log("📦 Extraindo arquivo ZIP...");
  const zip = new AdmZip(inputBuffer);
  const entries = zip.getEntries();
  console.log(`📦 Arquivos encontrados no ZIP: ${entries.length}`);

  entries.forEach((entry, index) => {
    console.log(
      `  ${index + 1}. ${entry.entryName} (${entry.header.size} bytes)`
    );
  });

  zip.extractAllTo(dir, true);
  console.log("✅ Extração concluída");

  // Listar arquivos extraídos
  const extractedFiles = fs.readdirSync(dir);
  console.log(
    `📄 Arquivos extraídos (${extractedFiles.length}):`,
    extractedFiles
  );

  const dbPath = pickDbFile(dir);
  console.log(`🗄️ Arquivo de banco encontrado: ${dbPath}`);

  const dbBuf = fs.readFileSync(dbPath);
  console.log(`🗄️ Tamanho do banco: ${dbBuf.length} bytes`);

  // Verificar os primeiros bytes para entender o formato
  console.log(
    `🔍 Primeiros 16 bytes (hex): ${dbBuf.slice(0, 16).toString("hex")}`
  );
  console.log(
    `🔍 Primeiros 16 bytes (string): ${dbBuf.slice(0, 16).toString("ascii")}`
  );

  // Tentar diferentes tipos de arquivo de banco
  let db: any;
  let SQL: any;
  try {
    SQL = await initSqlJs({
      // Caminho correto para o arquivo WASM
      locateFile: (file) => {
        const wasmPath = path.join(
          process.cwd(),
          "../../node_modules/sql.js/dist",
          file
        );
        console.log(`🔍 Procurando WASM: ${wasmPath}`);
        return wasmPath;
      },
    });
    console.log("✅ SQL.js inicializado");

    db = new SQL.Database(new Uint8Array(dbBuf));
    console.log("✅ Banco de dados SQLite carregado");
  } catch (error) {
    console.log(`❌ Erro ao carregar banco principal: ${error}`);

    // Tentar com o arquivo collection.anki2 como fallback
    const fallbackPath = path.join(dir, "collection.anki2");
    if (fs.existsSync(fallbackPath)) {
      console.log("🔄 Tentando arquivo collection.anki2 como fallback...");
      const fallbackBuf = fs.readFileSync(fallbackPath);
      console.log(`🗄️ Tamanho do banco fallback: ${fallbackBuf.length} bytes`);
      console.log(
        `🔍 Primeiros 16 bytes fallback (hex): ${fallbackBuf
          .slice(0, 16)
          .toString("hex")}`
      );
      console.log(
        `🔍 Primeiros 16 bytes fallback (string): ${fallbackBuf
          .slice(0, 16)
          .toString("ascii")}`
      );

      try {
        db = new SQL.Database(new Uint8Array(fallbackBuf));
        console.log("✅ Banco de dados SQLite fallback carregado");
      } catch (fallbackError) {
        console.log(`❌ Erro ao carregar banco fallback: ${fallbackError}`);
        throw fallbackError;
      }
    } else {
      throw error;
    }
  }

  // Verificar tabelas disponíveis
  console.log("🔍 Analisando estrutura do banco...");
  const tablesStmt = db.prepare(
    "SELECT name FROM sqlite_master WHERE type='table'"
  );
  const tables: string[] = [];
  while (tablesStmt.step()) {
    const row = tablesStmt.getAsObject() as any;
    tables.push(row.name);
  }
  tablesStmt.free();
  console.log(`📊 Tabelas encontradas (${tables.length}):`, tables);

  // Analisar estrutura da tabela notes
  if (tables.includes("notes")) {
    console.log("🔍 Analisando estrutura da tabela 'notes'...");
    const columnsStmt = db.prepare("PRAGMA table_info(notes)");
    const columns: any[] = [];
    while (columnsStmt.step()) {
      const row = columnsStmt.getAsObject();
      columns.push(row);
    }
    columnsStmt.free();
    console.log("📋 Colunas da tabela 'notes':");
    columns.forEach((col) => {
      console.log(`  - ${col.name}: ${col.type} (pk: ${col.pk})`);
    });

    // Contar registros
    const countStmt = db.prepare("SELECT COUNT(*) as count FROM notes");
    countStmt.step();
    const countResult = countStmt.getAsObject() as any;
    countStmt.free();
    console.log(`📊 Total de notes: ${countResult.count}`);
  }

  // 5) Ler notes com análise detalhada
  console.log("📖 Lendo notes da base de dados...");
  const stmt = db.prepare(
    "SELECT id, guid, mid, mod, usn, tags, flds, sfld, csum, flags, data FROM notes"
  );
  const rows: any[] = [];
  let noteCount = 0;

  while (stmt.step()) {
    const row = stmt.getAsObject() as any;
    noteCount++;

    const noteData = {
      id: row.id,
      guid: row.guid,
      mid: row.mid, // model id
      mod: row.mod, // modification timestamp
      usn: row.usn, // update sequence number
      tags: row.tags ?? "",
      flds: row.flds ?? "",
      sfld: row.sfld ?? "",
      csum: row.csum, // checksum
      flags: row.flags,
      data: row.data,
    };

    rows.push(noteData);

    // Log dos primeiros 3 notes para análise detalhada
    if (noteCount <= 3) {
      console.log(`\n📝 Note ${noteCount}:`);
      console.log(`  ID: ${noteData.id}`);
      console.log(`  GUID: ${noteData.guid}`);
      console.log(`  Model ID: ${noteData.mid}`);
      console.log(`  Modified: ${new Date(noteData.mod * 1000).toISOString()}`);
      console.log(`  USN: ${noteData.usn}`);
      console.log(`  TAGS: "${noteData.tags}"`);
      console.log(
        `  FLDS: ${noteData.flds.substring(0, 100)}${
          noteData.flds.length > 100 ? "..." : ""
        }`
      );
      console.log(`  SFLD: ${noteData.sfld}`);
      console.log(`  CSUM: ${noteData.csum}`);

      // Analisar campos (flds são separados por \x1f)
      const fields = noteData.flds.split("\x1f");
      console.log(`  📋 Campos (${fields.length}):`);

      // Analisar tags
      if (noteData.tags.trim()) {
        const tags = normalizeTags(noteData.tags);
        console.log(`  🏷️ Tags (${tags.length}): ${tags.join(", ")}`);
      } else {
        console.log(`  🏷️ Tags: Nenhuma`);
      }
    }
  }
  stmt.free();

  console.log(`✅ Processamento de notes concluído: ${noteCount} notes lidas`);

  // Analisar tabela cards se existir
  if (tables.includes("cards")) {
    console.log("\n🃏 Analisando tabela 'cards'...");
    const cardsStmt = db.prepare("SELECT COUNT(*) as count FROM cards");
    cardsStmt.step();
    const cardsCount = cardsStmt.getAsObject() as any;
    cardsStmt.free();
    console.log(`🃏 Total de cards: ${cardsCount.count}`);

    if (cardsCount.count > 0) {
      const cardsSampleStmt = db.prepare("SELECT * FROM cards LIMIT 3");
      let cardIndex = 0;
      while (cardsSampleStmt.step()) {
        cardIndex++;
        const card = cardsSampleStmt.getAsObject() as any;
        console.log(`🃏 Card ${cardIndex}:`, card);
      }
      cardsSampleStmt.free();
    }
  }

  // Processar notas para o formato final
  const processedNotes: AnkiNote[] = rows.map((r) => {
    const splitFields = r.flds.split("\x1f");
    const frontRaw = splitFields[0] || "";
    const backRaw = splitFields.slice(1).join("\n") || "";

    const front = htmlToText(frontRaw);
    const back = htmlToText(backRaw);

    // Extrair mídia
    const frontMedia = [
      ...extractSquareBracketMedia(frontRaw),
      ...extractImgSrc(frontRaw),
    ];
    const backMedia = [
      ...extractSquareBracketMedia(backRaw),
      ...extractImgSrc(backRaw),
    ];
    const allMedia = unique([...frontMedia, ...backMedia]);

    return {
      id: String(r.id),
      front,
      back,
      media: allMedia,
      flds: r.flds,
      sfld: r.sfld,
      tags: normalizeTags(r.tags),
    };
  });

  // Verificar arquivo media extraído
  const mediaFiles: Record<string, string> = {};
  const mediaFilePath = path.join(dir, "media");
  if (fs.existsSync(mediaFilePath)) {
    const mediaStats = fs.statSync(mediaFilePath);

    if (mediaStats.isFile()) {
      console.log("\n🖼️ Processando arquivo 'media' (JSON)...");
      try {
        const mediaContent = fs.readFileSync(mediaFilePath, "utf-8");
        const mediaJson = JSON.parse(mediaContent);
        console.log(`🖼️ Mapeamento de mídia:`, mediaJson);

        // Copiar arquivos de mídia baseado no mapeamento
        for (const [key, filename] of Object.entries(mediaJson)) {
          const sourcePath = path.join(dir, key);
          if (fs.existsSync(sourcePath)) {
            const targetPath = path.join(mediaDir, filename as string);
            fs.copyFileSync(sourcePath, targetPath);
            mediaFiles[filename as string] = targetPath;
            console.log(`🖼️ Copiado: ${key} -> ${filename}`);
          }
        }
      } catch (error) {
        console.warn(`⚠️ Erro ao processar arquivo media: ${error}`);
      }
    } else if (mediaStats.isDirectory()) {
      console.log("\n🖼️ Processando diretório 'media'...");
      const mediaFilesList = fs.readdirSync(mediaFilePath);
      console.log(`🖼️ Arquivos de mídia encontrados: ${mediaFilesList.length}`);

      for (const filename of mediaFilesList) {
        const sourcePath = path.join(mediaFilePath, filename);
        const targetPath = path.join(mediaDir, filename);
        if (fs.statSync(sourcePath).isFile()) {
          fs.copyFileSync(sourcePath, targetPath);
          mediaFiles[filename] = targetPath;
        }
      }
    }
  } else {
    console.log("\n❌ Arquivo/diretório 'media' não encontrado");
  }

  // 7) Fechar DB
  db.close();
  console.log("🗄️ Banco de dados fechado");

  return { tempDir: dir, notes: processedNotes, mediaFiles };
}

export function cleanupTempDir(tempDir: string) {
  try {
    if (fs.existsSync(tempDir)) {
      fs.rmSync(tempDir, { recursive: true, force: true });
      console.log(`🧹 Diretório temporário removido: ${tempDir}`);
    }
  } catch (err) {
    console.warn(`⚠️ Erro ao limpar diretório temporário ${tempDir}:`, err);
  }
}

/* ------------ Função principal de importação para PostgreSQL ------------ */

export async function importApkgToPostgres(
  buffer: Buffer,
  userId: string,
  title?: string,
  description?: string,
  isPublic: boolean = true,
  priceCents: number = 0
): Promise<ImportResult> {
  console.log("🚀 Iniciando importação APKG para PostgreSQL...");

  try {
    // 1. Processar arquivo Anki
    const ankiResult = await ankiToJson(buffer);
    console.log(`📝 Notas processadas: ${ankiResult.notes.length}`);
    console.log(
      `🖼️ Arquivos de mídia: ${Object.keys(ankiResult.mediaFiles).length}`
    );

    // 2. Processar mídia e fazer upload
    const mediaUploads: Record<string, string> = {};
    for (const [filename, localPath] of Object.entries(ankiResult.mediaFiles)) {
      try {
        const fileBuffer = fs.readFileSync(localPath);
        const ext = path.extname(filename).toLowerCase();

        // Determinar tipo MIME baseado na extensão
        let mimeType = "application/octet-stream";
        if ([".jpg", ".jpeg"].includes(ext)) mimeType = "image/jpeg";
        else if (ext === ".png") mimeType = "image/png";
        else if (ext === ".gif") mimeType = "image/gif";
        else if (ext === ".webp") mimeType = "image/webp";
        else if (ext === ".mp3") mimeType = "audio/mpeg";
        else if (ext === ".wav") mimeType = "audio/wav";
        else if (ext === ".ogg") mimeType = "audio/ogg";
        else if (ext === ".m4a") mimeType = "audio/m4a";

        const uploadResult = await processAnkiMedia(
          fileBuffer,
          filename,
          mimeType
        );
        if (uploadResult) {
          mediaUploads[filename] = uploadResult.url;
          console.log(`✅ Upload de mídia: ${filename} -> ${uploadResult.url}`);
        }
      } catch (error) {
        console.warn(`⚠️ Erro no upload de ${filename}:`, error);
      }
    }

    // 3. Criar deck no banco
    const deckTitle =
      title || `Deck Anki Importado - ${new Date().toLocaleDateString()}`;
    const deck = await prisma.deck.create({
      data: {
        userId,
        title: deckTitle,
        description:
          description ||
          `Deck importado do Anki com ${ankiResult.notes.length} cards`,
        isPublic,
        priceCents,
      },
    });

    console.log(`📚 Deck criado: ${deck.title} (ID: ${deck.id})`);

    // 4. Criar flashcards
    let flashcardsCreated = 0;
    for (let i = 0; i < ankiResult.notes.length; i++) {
      const note = ankiResult.notes[i];

      if (!note.front.trim() || !note.back.trim()) {
        console.warn(`⚠️ Pulando note ${note.id} com campos vazios`);
        continue;
      }

      try {
        // Processar texto para substituir referências de mídia por URLs reais
        let frontText = note.front;
        let backText = note.back;

        // Substituir referências de mídia no texto
        for (const [filename, url] of Object.entries(mediaUploads)) {
          const patterns = [
            new RegExp(
              `\\[sound:${filename.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\]`,
              "gi"
            ),
            new RegExp(
              `<img[^>]+src=["']${filename.replace(
                /[.*+?^${}()|[\]\\]/g,
                "\\$&"
              )}["'][^>]*>`,
              "gi"
            ),
            filename,
          ];

          for (const pattern of patterns) {
            if (typeof pattern === "string") {
              frontText = frontText.replace(pattern, url);
              backText = backText.replace(pattern, url);
            } else {
              frontText = frontText.replace(
                pattern,
                `<img src="${url}" alt="${filename}" style="max-width: 100%; height: auto;">`
              );
              backText = backText.replace(
                pattern,
                `<img src="${url}" alt="${filename}" style="max-width: 100%; height: auto;">`
              );
            }
          }
        }

        await prisma.flashcard.create({
          data: {
            deckId: deck.id,
            frontText,
            backText,
            orderIndex: i,
          },
        });

        flashcardsCreated++;
      } catch (error) {
        console.error(`❌ Erro ao criar flashcard ${i}:`, error);
      }
    }

    console.log(`✅ Flashcards criados: ${flashcardsCreated}`);

    // 5. Limpar arquivos temporários
    //cleanupTempDir(ankiResult.tempDir);

    return {
      deckId: deck.id,
      deckTitle: deck.title,
      flashcardsCreated,
      mediaProcessed: Object.keys(mediaUploads).length,
      originalDeckName: "Anki Deck", // Pode ser extraído do nome do arquivo ou metadados
    };
  } catch (error) {
    console.error("❌ Erro na importação:", error);
    throw error;
  }
}
