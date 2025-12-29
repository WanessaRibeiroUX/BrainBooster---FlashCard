// anki-to-json-sqljs.ts
import fs from "fs";
import path from "path";
import { tmpdir } from "os";
import AdmZip from "adm-zip";
import initSqlJs, { Database as SqlJsDb } from "sql.js";

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
  const candidates = ["collection.anki21", "collection.anki21b"];

  console.log("🔍 Analisando arquivos de banco disponíveis...");

  for (const c of candidates) {
    const full = path.join(dir, c);
    if (fs.existsSync(full) && fs.statSync(full).isFile()) {
      const stats = fs.statSync(full);
      const buffer = fs.readFileSync(full);
      const first16Bytes = buffer.subarray(0, 16);

      console.log(`� Arquivo: ${c}`);
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
export async function ankiToJson(inputBuffer: Buffer, outputDir?: string) {
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
  let db: SqlJsDb;
  let SQL: any;
  try {
    SQL = await initSqlJs({
      // Caminho correto para o arquivo WASM
      locateFile: (file) => {
        const wasmPath = path.join(
          __dirname,
          "../../../../node_modules/sql.js/dist",
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
      console.log(
        `  - ${col.name}: ${col.type} (pk: ${col.pk}, notnull: ${col.notnull})`
      );
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
      fields.forEach((field: string, index: number) => {
        const cleanField = field
          .replace(/\n/g, " ")
          .replace(/\s+/g, " ")
          .trim();
        console.log(
          `    ${index + 1}. ${cleanField.substring(0, 80)}${
            cleanField.length > 80 ? "..." : ""
          }`
        );
      });

      // Analisar tags
      if (noteData.tags.trim()) {
        const tagList = noteData.tags
          .trim()
          .split(/\s+/)
          .filter((tag: string) => tag.length > 0);
        console.log(`  🏷️ Tags (${tagList.length}): ${tagList.join(", ")}`);
      } else {
        console.log(`  🏷️ Tags: nenhuma`);
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
      const cardsSampleStmt = db.prepare(
        "SELECT id, nid, did, ord, mod, usn, type, queue, due, ivl, factor, reps, lapses FROM cards LIMIT 3"
      );
      console.log("🃏 Amostras de cards:");
      let cardIndex = 0;
      while (cardsSampleStmt.step()) {
        const cardRow = cardsSampleStmt.getAsObject() as any;
        cardIndex++;
        console.log(
          `  ${cardIndex}. ID: ${cardRow.id}, Note ID: ${cardRow.nid}, Deck ID: ${cardRow.did}`
        );
        console.log(
          `     Ord: ${cardRow.ord}, Type: ${cardRow.type}, Queue: ${cardRow.queue}`
        );
        console.log(
          `     Due: ${cardRow.due}, Interval: ${cardRow.ivl}, Reps: ${cardRow.reps}`
        );
      }
      cardsSampleStmt.free();
    }
  }

  // Analisar tabela col (configuração da coleção)
  if (tables.includes("col")) {
    console.log("\n⚙️ Analisando tabela 'col' (configuração)...");
    const colStmt = db.prepare(
      "SELECT id, crt, mod, scm, ver, dty, usn, ls, conf, models, decks, dconf, tags FROM col"
    );
    if (colStmt.step()) {
      const colRow = colStmt.getAsObject() as any;
      console.log(`⚙️ Configuração da coleção:`);
      console.log(`  ID: ${colRow.id}`);
      console.log(`  Criado: ${new Date(colRow.crt * 1000).toISOString()}`);
      console.log(`  Modificado: ${new Date(colRow.mod).toISOString()}`);
      console.log(`  Versão: ${colRow.ver}`);
      console.log(`  USN: ${colRow.usn}`);

      // Analisar models (note types)
      try {
        const models = JSON.parse(colRow.models);
        const modelIds = Object.keys(models);
        console.log(`  📋 Modelos/Note Types (${modelIds.length}):`);
        modelIds.forEach((modelId: string, index: number) => {
          const model = models[modelId];
          console.log(
            `    ${index + 1}. ID: ${modelId}, Nome: "${model.name}", Campos: ${
              model.flds?.length || 0
            }`
          );
        });
      } catch (error) {
        console.log(`  ❌ Erro ao analisar models: ${error}`);
      }

      // Analisar decks
      try {
        const decks = JSON.parse(colRow.decks);
        const deckIds = Object.keys(decks);
        console.log(`  📚 Decks (${deckIds.length}):`);
        deckIds.forEach((deckId: string, index: number) => {
          const deck = decks[deckId];
          console.log(`    ${index + 1}. ID: ${deckId}, Nome: "${deck.name}"`);
        });
      } catch (error) {
        console.log(`  ❌ Erro ao analisar decks: ${error}`);
      }
    }
    colStmt.free();
  }

  // Verificar tabela media se existir
  if (tables.includes("media")) {
    console.log("🖼️ Analisando tabela 'media'...");
    const mediaStmt = db.prepare("SELECT COUNT(*) as count FROM media");
    mediaStmt.step();
    const mediaCount = mediaStmt.getAsObject() as any;
    mediaStmt.free();
    console.log(`🖼️ Total de arquivos de mídia: ${mediaCount.count}`);

    if (mediaCount.count > 0) {
      const mediaSampleStmt = db.prepare("SELECT * FROM media LIMIT 5");
      console.log("🖼️ Amostras de mídia:");
      let mediaIndex = 0;
      while (mediaSampleStmt.step()) {
        const mediaRow = mediaSampleStmt.getAsObject() as any;
        mediaIndex++;
        console.log(
          `  ${mediaIndex}. Chave: ${mediaRow.fname}, Valor: ${
            typeof mediaRow.data === "string"
              ? mediaRow.data.substring(0, 50)
              : "[BLOB]"
          }`
        );
      }
      mediaSampleStmt.free();
    }
  }

  // Verificar arquivo media extraído
  const mediaFilePath = path.join(dir, "media");
  if (fs.existsSync(mediaFilePath)) {
    const mediaStats = fs.statSync(mediaFilePath);

    if (mediaStats.isFile()) {
      console.log("\n📁 Analisando arquivo 'media' extraído...");
      const mediaContent = fs.readFileSync(mediaFilePath, "utf-8");
      console.log(
        `📄 Conteúdo do arquivo media: ${mediaContent.substring(0, 200)}${
          mediaContent.length > 200 ? "..." : ""
        }`
      );

      try {
        const mediaMap = JSON.parse(mediaContent);
        console.log(
          `🗂️ Mapeamento de mídia (${Object.keys(mediaMap).length} arquivos):`
        );

        const entries = Object.entries(mediaMap).slice(0, 10);
        entries.forEach(([key, value], index) => {
          console.log(`  ${index + 1}. ${key} -> ${value}`);
        });

        if (Object.keys(mediaMap).length > 10) {
          console.log(
            `  ... e mais ${Object.keys(mediaMap).length - 10} arquivos`
          );
        }
      } catch (error) {
        console.log("❌ Erro ao interpretar arquivo media como JSON:", error);
      }
    } else if (mediaStats.isDirectory()) {
      console.log("\n📁 Diretório 'media' encontrado...");
      const mediaFiles = fs.readdirSync(mediaFilePath);
      console.log(`📋 Arquivos no diretório media: ${mediaFiles.length}`);

      // Mostrar primeiros 20 arquivos como exemplo
      const sampleFiles = mediaFiles.slice(0, 20);
      sampleFiles.forEach((file, index) => {
        const filePath = path.join(mediaFilePath, file);
        const fileStats = fs.statSync(filePath);
        console.log(`   ${index + 1}. ${file} (${fileStats.size} bytes)`);
      });

      if (mediaFiles.length > 20) {
        console.log(`   ... e mais ${mediaFiles.length - 20} arquivos`);
      }
    }
  } else {
    console.log("\n❌ Arquivo/diretório 'media' não encontrado");
  }

  // 7) Fechar DB
  db.close();
  console.log("🗄️ Banco de dados fechado");

  return { tempDir: dir, notes: rows };
}

export function cleanupTempDir(tempDir: string) {
  try {
    if (fs.existsSync(tempDir)) {
      setTimeout(() => {
        try {
          fs.rmSync(tempDir, { recursive: true, force: true });
        } catch (err) {
          console.warn(
            `⚠️ Erro ao remover diretório temporário ${tempDir}:`,
            err
          );
        }
      }, 250);
    }
  } catch (err) {
    console.warn(`⚠️ Erro ao verificar diretório temporário ${tempDir}:`, err);
  }
}

/* ------------ helpers ------------ */
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

// Função principal para testar
async function main() {
  try {
    console.log("🚀 Iniciando teste com ofc.apkg...");

    const apkgPath = path.join(__dirname, "b.apkg");
    console.log(`📂 Carregando arquivo: ${apkgPath}`);

    if (!fs.existsSync(apkgPath)) {
      throw new Error(`Arquivo não encontrado: ${apkgPath}`);
    }

    const buffer = fs.readFileSync(apkgPath);
    console.log(`✅ Arquivo carregado com sucesso`);

    const result = await ankiToJson(buffer);

    console.log("\n🎯 RESULTADO FINAL:");
    console.log(`📁 Diretório temporário: ${result.tempDir}`);
    console.log(`📝 Total de notes processadas: ${result.notes?.length || 0}`);

    // Cleanup
    console.log("\n🧹 Limpando arquivos temporários...");
    /* cleanupTempDir(result.tempDir); */
    const makeJsonFile = path.join(__dirname, "anki_import_result.json");
    fs.writeFileSync(makeJsonFile, JSON.stringify(result, null, 2), "utf-8");
    console.log(`📄 Resultado salvo em: ${makeJsonFile}`);
    console.log("✅ Teste concluído com sucesso!");
  } catch (error) {
    console.error("❌ Erro durante o teste:", error);
    process.exit(1);
  }
}

// Executar se chamado diretamente
if (require.main === module) {
  main();
}
