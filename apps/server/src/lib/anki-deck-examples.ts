/**
 * Exemplo de uso da estrutura AnkiDeckStructure
 * Demonstra como converter dados do Anki para o formato JSON estruturado
 */

import {
  AnkiDeckStructure,
  Note,
  Card,
  MediaFile,
  NoteType,
  createEmptyDeckStructure,
  createBasicNoteType,
  createMediaNoteType,
  parseNoteFields,
  parseNoteTags,
  extractAllMediaFromNote,
} from "./anki-deck-structure";

/** Exemplo de conversão de dados do Anki para a estrutura JSON */
export function convertAnkiDataToStructure(ankiData: {
  collection: any;
  models: any;
  decks: any;
  notes: any[];
  cards: any[];
  mediaMapping: Record<string, string>;
  mediaFiles: Array<{ filename: string; path: string; size: number }>;
}): AnkiDeckStructure {
  // Criar estrutura base
  const deckStructure = createEmptyDeckStructure("Imported Deck");

  // Processar coleção
  if (ankiData.collection) {
    deckStructure.collection = {
      id: ankiData.collection.id || 1,
      created: ankiData.collection.crt || Math.floor(Date.now() / 1000),
      modified: ankiData.collection.mod || Date.now(),
      version: ankiData.collection.ver || 11,
      usn: ankiData.collection.usn || 0,
      config: deckStructure.collection.config, // Usar config padrão por simplicidade
    };
  }

  // Processar modelos (note types)
  if (ankiData.models) {
    const models =
      typeof ankiData.models === "string"
        ? JSON.parse(ankiData.models)
        : ankiData.models;

    deckStructure.noteTypes = Object.values(models).map((model: any) => ({
      id: parseInt(model.id) || model.id,
      name: model.name || "Unknown Model",
      css: model.css || "",
      did: model.did || 1,
      flds: model.flds || [],
      latexPre: model.latexPre || "",
      latexPost: model.latexPost || "",
      mod: model.mod || Math.floor(Date.now() / 1000),
      req: model.req || [],
      sortf: model.sortf || 0,
      tags: model.tags || [],
      tmpls: model.tmpls || [],
      type: model.type || 0,
      usn: model.usn || 0,
      vers: [],
    }));
  }

  // Se não há modelos, usar um básico
  if (deckStructure.noteTypes.length === 0) {
    deckStructure.noteTypes.push(createBasicNoteType());
  }

  // Processar decks
  if (ankiData.decks) {
    const decks =
      typeof ankiData.decks === "string"
        ? JSON.parse(ankiData.decks)
        : ankiData.decks;

    const deckEntries = Object.values(decks);
    if (deckEntries.length > 0) {
      const firstDeck = deckEntries[0] as any;
      deckStructure.deck = {
        id: parseInt(firstDeck.id) || firstDeck.id || 1,
        name: firstDeck.name || "Imported Deck",
        collapsed: firstDeck.collapsed || false,
        browserCollapsed: firstDeck.browserCollapsed || false,
        newToday: firstDeck.newToday || [0, 0],
        revToday: firstDeck.revToday || [0, 0],
        lrnToday: firstDeck.lrnToday || [0, 0],
        timeToday: firstDeck.timeToday || [0, 0],
        dyn: firstDeck.dyn || 0,
        mod: firstDeck.mod || Math.floor(Date.now() / 1000),
        desc: firstDeck.desc || "",
        md: firstDeck.md || false,
      };
    }
  }

  // Processar notas
  deckStructure.notes = ankiData.notes.map((note: any) => {
    const fields = parseNoteFields(note.flds || "");
    const tagList = parseNoteTags(note.tags || "");

    const processedNote: Note = {
      id: note.id,
      guid: note.guid,
      mid: note.mid,
      mod: note.mod,
      usn: note.usn || 0,
      tags: note.tags || "",
      flds: note.flds || "",
      sfld: note.sfld || "",
      csum: note.csum || 0,
      flags: note.flags || 0,
      data: note.data || "",
      fields,
      tagList,
    };

    // Adicionar tags únicas à lista geral
    tagList.forEach((tag) => {
      if (!deckStructure.tags.includes(tag)) {
        deckStructure.tags.push(tag);
      }
    });

    return processedNote;
  });

  // Processar cards
  deckStructure.cards = ankiData.cards.map((card: any) => ({
    id: card.id,
    nid: card.nid,
    did: card.did,
    ord: card.ord || 0,
    mod: card.mod,
    usn: card.usn || 0,
    type: card.type || 0,
    queue: card.queue || 0,
    due: card.due || 0,
    ivl: card.ivl || 0,
    factor: card.factor || 2500,
    reps: card.reps || 0,
    lapses: card.lapses || 0,
    left: card.left || 0,
    odue: card.odue || 0,
    odid: card.odid || 0,
    flags: card.flags || 0,
    data: card.data || "",
  }));

  // Processar arquivos de mídia
  deckStructure.media = ankiData.mediaFiles.map((file, index) => {
    const mappedName =
      Object.keys(ankiData.mediaMapping).find(
        (key) => ankiData.mediaMapping[key] === file.filename
      ) || index.toString();

    return {
      filename: file.filename,
      mappedName,
      mimeType: getMimeType(file.filename),
      size: file.size,
      absolutePath: file.path,
      hash: undefined, // Calcular se necessário
    };
  });

  return deckStructure;
}

/** Exemplo de criação de um deck simples */
export function createSampleDeck(): AnkiDeckStructure {
  const deck = createEmptyDeckStructure("Sample English Deck");

  // Adicionar note type com mídia
  const mediaType = createMediaNoteType();
  deck.noteTypes.push(mediaType);
  deck.collection.config.curModel = mediaType.id.toString();

  // Criar algumas notas de exemplo
  const notes: Note[] = [
    {
      id: Date.now(),
      guid: generateGuid(),
      mid: mediaType.id,
      mod: Math.floor(Date.now() / 1000),
      usn: 0,
      tags: " english vocabulary ",
      flds: 'Hello\x1fOlá\x1f[sound:hello.mp3]\x1f<img src="hello.jpg">',
      sfld: "Hello",
      csum: calculateChecksum("Hello"),
      flags: 0,
      data: "",
      fields: ["Hello", "Olá", "[sound:hello.mp3]", '<img src="hello.jpg">'],
      tagList: ["english", "vocabulary"],
    },
    {
      id: Date.now() + 1,
      guid: generateGuid(),
      mid: mediaType.id,
      mod: Math.floor(Date.now() / 1000),
      usn: 0,
      tags: " english vocabulary colors ",
      flds: 'Red\x1fVermelho\x1f\x1f<img src="red.png">',
      sfld: "Red",
      csum: calculateChecksum("Red"),
      flags: 0,
      data: "",
      fields: ["Red", "Vermelho", "", '<img src="red.png">'],
      tagList: ["english", "vocabulary", "colors"],
    },
  ];

  deck.notes = notes;
  deck.tags = ["english", "vocabulary", "colors"];

  // Criar cards para cada nota
  deck.cards = notes.map((note, index) => ({
    id: note.id + 1000,
    nid: note.id,
    did: deck.deck.id,
    ord: 0,
    mod: Math.floor(Date.now() / 1000),
    usn: 0,
    type: 0, // novo
    queue: 0, // novo
    due: index + 1, // ordem
    ivl: 0,
    factor: 2500,
    reps: 0,
    lapses: 0,
    left: 1001, // 1 rep hoje, 1 até graduação
    odue: 0,
    odid: 0,
    flags: 0,
    data: "",
  }));

  // Adicionar arquivos de mídia de exemplo
  deck.media = [
    {
      filename: "hello.mp3",
      mappedName: "0",
      mimeType: "audio/mpeg",
      size: 15420,
      absolutePath: "/path/to/hello.mp3",
    },
    {
      filename: "hello.jpg",
      mappedName: "1",
      mimeType: "image/jpeg",
      size: 8945,
      absolutePath: "/path/to/hello.jpg",
    },
    {
      filename: "red.png",
      mappedName: "2",
      mimeType: "image/png",
      size: 3247,
      absolutePath: "/path/to/red.png",
    },
  ];

  return deck;
}

/** Função para extrair estatísticas do deck */
export function getDeckStatistics(deck: AnkiDeckStructure) {
  const stats = {
    totalNotes: deck.notes.length,
    totalCards: deck.cards.length,
    totalMedia: deck.media.length,
    noteTypes: deck.noteTypes.length,
    tags: deck.tags.length,

    cardsByType: {
      new: deck.cards.filter((c) => c.type === 0).length,
      learning: deck.cards.filter((c) => c.type === 1).length,
      review: deck.cards.filter((c) => c.type === 2).length,
      relearning: deck.cards.filter((c) => c.type === 3).length,
    },

    cardsByQueue: {
      new: deck.cards.filter((c) => c.queue === 0).length,
      learning: deck.cards.filter((c) => c.queue === 1).length,
      review: deck.cards.filter((c) => c.queue === 2).length,
      suspended: deck.cards.filter((c) => c.queue === -1).length,
      buried: deck.cards.filter((c) => c.queue <= -2).length,
    },

    mediaByType: {
      images: deck.media.filter((m) => m.mimeType.startsWith("image/")).length,
      audio: deck.media.filter((m) => m.mimeType.startsWith("audio/")).length,
      video: deck.media.filter((m) => m.mimeType.startsWith("video/")).length,
      other: deck.media.filter(
        (m) => !m.mimeType.match(/^(image|audio|video)\//)
      ).length,
    },

    totalMediaSize: deck.media.reduce((sum, m) => sum + m.size, 0),
  };

  return stats;
}

/** Função para validar a estrutura do deck */
export function validateDeckStructure(deck: AnkiDeckStructure): string[] {
  const errors: string[] = [];

  // Validar se há note types
  if (deck.noteTypes.length === 0) {
    errors.push("Deck deve ter pelo menos um note type");
  }

  // Validar se todas as notas têm um modelo válido
  const noteTypeIds = new Set(deck.noteTypes.map((nt) => nt.id));
  for (const note of deck.notes) {
    if (!noteTypeIds.has(note.mid)) {
      errors.push(`Nota ${note.id} referencia modelo inexistente ${note.mid}`);
    }
  }

  // Validar se todos os cards têm uma nota válida
  const noteIds = new Set(deck.notes.map((n) => n.id));
  for (const card of deck.cards) {
    if (!noteIds.has(card.nid)) {
      errors.push(`Card ${card.id} referencia nota inexistente ${card.nid}`);
    }
  }

  // Validar se arquivos de mídia referenciados existem
  const mediaFilenames = new Set(deck.media.map((m) => m.filename));
  for (const note of deck.notes) {
    const mediaRefs = extractAllMediaFromNote(note);
    for (const ref of mediaRefs) {
      if (!mediaFilenames.has(ref)) {
        errors.push(`Nota ${note.id} referencia mídia inexistente: ${ref}`);
      }
    }
  }

  return errors;
}

// Funções helper

function getMimeType(filename: string): string {
  const ext = filename.toLowerCase().split(".").pop();
  const mimeMap: Record<string, string> = {
    jpg: "image/jpeg",
    jpeg: "image/jpeg",
    png: "image/png",
    gif: "image/gif",
    webp: "image/webp",
    svg: "image/svg+xml",
    mp3: "audio/mpeg",
    wav: "audio/wav",
    ogg: "audio/ogg",
    m4a: "audio/mp4",
    mp4: "video/mp4",
    webm: "video/webm",
    txt: "text/plain",
    pdf: "application/pdf",
  };

  return mimeMap[ext || ""] || "application/octet-stream";
}

function generateGuid(): string {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
}

function calculateChecksum(text: string): number {
  // Implementação simples de checksum (o Anki usa SHA1 dos primeiros 8 dígitos)
  let hash = 0;
  for (let i = 0; i < text.length; i++) {
    const char = text.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  return Math.abs(hash);
}
