// Teste específico para verificar se a implementação melhorada está retornando todos os dados
import fs from "fs";
import path from "path";
import { ankiToJson } from "../lib/anki-import";

async function testAnkiImport() {
  try {
    console.log("🚀 Iniciando teste específico do anki-import melhorado...");

    const apkgPath = path.join(__dirname, "b.apkg");
    console.log(`📂 Carregando arquivo: ${apkgPath}`);

    if (!fs.existsSync(apkgPath)) {
      throw new Error(`Arquivo não encontrado: ${apkgPath}`);
    }

    const buffer = fs.readFileSync(apkgPath);
    console.log(`✅ Arquivo carregado com sucesso (${buffer.length} bytes)`);

    const result = await ankiToJson(buffer);

    console.log("\n🎯 RESULTADO DETALHADO:");
    console.log(`📁 Diretório temporário: ${result.tempDir}`);
    console.log(`📝 Total de notes processadas: ${result.notes?.length || 0}`);
    console.log(`📋 Total de note types: ${result.noteTypes?.length || 0}`);
    console.log(`🃏 Total de cards: ${result.cards?.length || 0}`);
    console.log(`📚 Total de decks: ${result.decks?.length || 0}`);
    console.log(
      `🖼️ Total de arquivos de mídia: ${
        Object.keys(result.mediaFiles || {}).length
      }`
    );

    // Verificar estrutura da coleção
    if (result.collection) {
      console.log("\n⚙️ DADOS DA COLEÇÃO:");
      console.log(`  ID: ${result.collection.id}`);
      console.log(
        `  Criado: ${new Date(result.collection.created * 1000).toISOString()}`
      );
      console.log(
        `  Modificado: ${new Date(result.collection.modified).toISOString()}`
      );
      console.log(`  Versão: ${result.collection.version}`);
      console.log(
        `  Modelos/Note Types: ${
          Object.keys(result.collection.models || {}).length
        }`
      );
      console.log(
        `  Decks: ${Object.keys(result.collection.decks || {}).length}`
      );
    }

    // Verificar primeiro note type
    if (result.noteTypes && result.noteTypes.length > 0) {
      const firstNoteType = result.noteTypes[0];
      console.log("\n📋 PRIMEIRO NOTE TYPE:");
      console.log(`  ID: ${firstNoteType.id}`);
      console.log(`  Nome: ${firstNoteType.name}`);
      console.log(`  Campos: ${firstNoteType.flds?.length || 0}`);
      console.log(`  Templates: ${firstNoteType.tmpls?.length || 0}`);
      console.log(`  Tipo: ${firstNoteType.type} (0=básico, 1=cloze)`);
    }

    // Verificar primeiro card
    if (result.cards && result.cards.length > 0) {
      const firstCard = result.cards[0];
      console.log("\n🃏 PRIMEIRO CARD:");
      console.log(`  ID: ${firstCard.id}`);
      console.log(`  Note ID: ${firstCard.nid}`);
      console.log(`  Deck ID: ${firstCard.did}`);
      console.log(`  Ordinal: ${firstCard.ord}`);
      console.log(
        `  Tipo: ${firstCard.type} (0=novo, 1=aprendendo, 2=revisão, 3=reaprendendo)`
      );
      console.log(`  Fila: ${firstCard.queue}`);
      console.log(`  Vencimento: ${firstCard.due}`);
      console.log(`  Intervalo: ${firstCard.ivl}`);
      console.log(`  Repetições: ${firstCard.reps}`);
      console.log(`  Lapsos: ${firstCard.lapses}`);
    }

    // Verificar primeiro deck
    if (result.decks && result.decks.length > 0) {
      const firstDeck = result.decks[0];
      console.log("\n📚 PRIMEIRO DECK:");
      console.log(`  ID: ${firstDeck.id}`);
      console.log(`  Nome: ${firstDeck.name}`);
      console.log(
        `  Modificado: ${new Date(firstDeck.mod * 1000).toISOString()}`
      );
      console.log(`  Dinâmico: ${firstDeck.dyn === 1 ? "Sim" : "Não"}`);
    }

    // Verificar primeira note processada
    if (result.notes && result.notes.length > 0) {
      const firstNote = result.notes[0];
      console.log("\n📝 PRIMEIRA NOTE PROCESSADA:");
      console.log(`  ID: ${firstNote.id}`);
      console.log(
        `  Front: ${firstNote.front.substring(0, 100)}${
          firstNote.front.length > 100 ? "..." : ""
        }`
      );
      console.log(
        `  Back: ${firstNote.back.substring(0, 100)}${
          firstNote.back.length > 100 ? "..." : ""
        }`
      );
      console.log(`  Mídia: ${firstNote.media.length} arquivo(s)`);
      console.log(`  Tags: ${firstNote.tags?.length || 0} tag(s)`);
    }

    console.log("\n✅ Teste específico concluído com sucesso!");

    // Não fazer cleanup para poder inspecionar os arquivos
    console.log(`\n📁 Arquivos mantidos em: ${result.tempDir}`);
    console.log(
      "   (para debug - remover manualmente quando não precisar mais)"
    );
  } catch (error) {
    console.error("❌ Erro durante o teste específico:", error);
    process.exit(1);
  }
}

// Executar se chamado diretamente
if (require.main === module) {
  testAnkiImport();
}
