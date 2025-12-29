/**
 * Estrutura JSON completa para um baralho de flashcards baseado na estrutura do Anki
 * Referência: https://github.com/ankidroid/Anki-Android/wiki/Database-Structure
 */

export interface AnkiDeckStructure {
  /** Metadados da coleção */
  collection: {
    /** ID único da coleção */
    id: number;
    /** Timestamp de criação (epoch seconds) */
    created: number;
    /** Timestamp da última modificação (epoch milliseconds) */
    modified: number;
    /** Versão do schema */
    version: number;
    /** Update sequence number para sync */
    usn: number;
    /** Configurações gerais da coleção */
    config: CollectionConfig;
  };

  /** Informações do baralho principal */
  deck: DeckInfo;

  /** Tipos de nota (modelos/templates) */
  noteTypes: NoteType[];

  /** Notas do baralho */
  notes: Note[];

  /** Cards gerados a partir das notas */
  cards: Card[];

  /** Arquivos de mídia */
  media: MediaFile[];

  /** Configurações de deck específicas */
  deckConfig: DeckConfig;

  /** Histórico de revisões (opcional) */
  reviewHistory?: ReviewLogEntry[];

  /** Tags utilizadas no baralho */
  tags: string[];
}

/** Configurações gerais da coleção */
export interface CollectionConfig {
  /** ID do deck atual selecionado */
  curDeck: number;
  /** Lista de decks ativos (IDs) */
  activeDecks: number[];
  /** Ordem de exibição de cards novos (0=misturar, 1=após revisões, 2=antes de revisões) */
  newSpread: 0 | 1 | 2;
  /** Tempo limite para aprender antecipadamente (segundos) */
  collapseTime: number;
  /** Limite de tempo para timebox (segundos) */
  timeLim: number;
  /** Mostrar tempo estimado nas respostas */
  estTimes: boolean;
  /** Mostrar contagem de cards restantes */
  dueCounts: boolean;
  /** ID do modelo de nota atual */
  curModel: string;
  /** Próxima posição para novos cards */
  nextPos: number;
  /** Tipo de ordenação no navegador */
  sortType: string;
  /** Ordenação reversa */
  sortBackwards: boolean;
  /** Adicionar ao deck atual por padrão */
  addToCur: boolean;
  /** Mostrar cards de aprendizado com steps maiores antes das revisões */
  dayLearnFirst: boolean;
  /** Configuração de enterrar novos cards */
  newBury: boolean;
  /** Última data de desenterra */
  lastUnburied?: string;
  /** Colunas ativas no navegador */
  activeCols: string[];
}

/** Informações do deck */
export interface DeckInfo {
  /** ID único do deck (timestamp de criação em milliseconds) */
  id: number;
  /** Nome do deck */
  name: string;
  /** Deck colapsado na interface */
  collapsed: boolean;
  /** Deck colapsado no navegador */
  browserCollapsed: boolean;
  /** Estatísticas de cards novos hoje [dias_passados, cards_vistos] */
  newToday: [number, number];
  /** Estatísticas de revisões hoje [dias_passados, cards_revisados] */
  revToday: [number, number];
  /** Estatísticas de aprendizado hoje [dias_passados, cards_aprendidos] */
  lrnToday: [number, number];
  /** Tempo gasto hoje [dias_passados, tempo_milissegundos] */
  timeToday: [number, number];
  /** Deck dinâmico/filtrado (1 = sim, 0 = não) */
  dyn: 0 | 1;
  /** Limite estendido de novos cards (para estudo customizado) */
  extendNew?: number;
  /** Limite estendido de revisões (para estudo customizado) */
  extendRev?: number;
  /** ID do grupo de configuração */
  conf?: number;
  /** Timestamp da última modificação */
  mod: number;
  /** Descrição do deck */
  desc: string;
  /** Usar markdown na descrição */
  md?: boolean;
}

/** Tipo de nota (modelo/template) */
export interface NoteType {
  /** ID único do modelo (timestamp de criação em milliseconds) */
  id: number;
  /** Nome do modelo */
  name: string;
  /** CSS compartilhado para todos os templates */
  css: string;
  /** ID do deck padrão para novos cards */
  did: number;
  /** Campos do modelo */
  flds: Field[];
  /** Preâmbulo LaTeX */
  latexPre: string;
  /** Pós-âmbulo LaTeX */
  latexPost: string;
  /** Timestamp da última modificação */
  mod: number;
  /** Requisitos para geração de cards (array de [template_ord, tipo, campos]) */
  req: [number, string, number[]][];
  /** Campo usado para ordenação */
  sortf: number;
  /** Tags do último card adicionado */
  tags: string[];
  /** Templates de card */
  tmpls: CardTemplate[];
  /** Tipo do modelo (0=padrão, 1=cloze) */
  type: 0 | 1;
  /** Update sequence number */
  usn: number;
  /** Versão legada (não usado) */
  vers: never[];
}

/** Campo de um modelo */
export interface Field {
  /** Nome do campo */
  name: string;
  /** Fonte da exibição */
  font: string;
  /** Array de mídia (não usado) */
  media: never[];
  /** Ordem do campo (0 a n-1) */
  ord: number;
  /** Texto right-to-left */
  rtl: boolean;
  /** Tamanho da fonte */
  size: number;
  /** Campo pegajoso (mantém valor anterior) */
  sticky: boolean;
}

/** Template de card */
export interface CardTemplate {
  /** Nome do template */
  name: string;
  /** Template da pergunta */
  qfmt: string;
  /** Template da resposta */
  afmt: string;
  /** Formato da pergunta no navegador */
  bqfmt: string;
  /** Formato da resposta no navegador */
  bafmt: string;
  /** Override de deck (null por padrão) */
  did: number | null;
  /** Ordem do template */
  ord: number;
}

/** Nota (conteúdo) */
export interface Note {
  /** ID único da nota (timestamp em milliseconds) */
  id: number;
  /** GUID globalmente único para sync */
  guid: string;
  /** ID do modelo */
  mid: number;
  /** Timestamp da modificação (epoch seconds) */
  mod: number;
  /** Update sequence number */
  usn: number;
  /** Tags separadas por espaço */
  tags: string;
  /** Valores dos campos separados por \x1f */
  flds: string;
  /** Campo de ordenação */
  sfld: string;
  /** Checksum para detecção de duplicatas */
  csum: number;
  /** Flags (não usado) */
  flags: number;
  /** Dados extras (não usado) */
  data: string;
  /** Campos processados para exibição */
  fields: string[];
  /** Lista de tags processadas */
  tagList: string[];
}

/** Card (instância de revisão) */
export interface Card {
  /** ID único do card */
  id: number;
  /** ID da nota */
  nid: number;
  /** ID do deck */
  did: number;
  /** Ordinal do template (qual template/cloze) */
  ord: number;
  /** Timestamp da modificação (epoch seconds) */
  mod: number;
  /** Update sequence number */
  usn: number;
  /** Tipo: 0=novo, 1=aprendendo, 2=revisão, 3=reaprendendo */
  type: 0 | 1 | 2 | 3;
  /** Fila: -3=enterrado usuário, -2=enterrado sistema, -1=suspenso, 0=novo, 1=aprendendo, 2=revisão, 3=aprendendo dia+, 4=preview */
  queue: -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4;
  /**
   * Due (vencimento):
   * - novos: ordem de estudo
   * - aprendendo: timestamp epoch
   * - revisão: dias desde criação da coleção
   */
  due: number;
  /** Intervalo em dias (0 para cards de aprendizado) */
  ivl: number;
  /** Fator de facilidade (permille - partes por mil) */
  factor: number;
  /** Número de revisões */
  reps: number;
  /** Número de lapsos */
  lapses: number;
  /**
   * Left: a*1000+b onde:
   * a = repetições restantes hoje
   * b = repetições até graduação
   */
  left: number;
  /** Due original (para decks filtrados) */
  odue: number;
  /** Deck ID original (para decks filtrados) */
  odid: number;
  /** Flags: mod 8 = flag visual (0=sem flag, 1=vermelho, 2=laranja, 3=verde, 4=azul) */
  flags: number;
  /** Dados extras (não usado) */
  data: string;
}

/** Arquivo de mídia */
export interface MediaFile {
  /** Nome do arquivo na mídia */
  filename: string;
  /** Nome do arquivo no mapeamento (geralmente numérico) */
  mappedName: string;
  /** Tipo MIME do arquivo */
  mimeType: string;
  /** Tamanho do arquivo em bytes */
  size: number;
  /** Hash do arquivo para verificação de integridade */
  hash?: string;
  /** Caminho absoluto do arquivo extraído */
  absolutePath: string;
  /** Dados do arquivo em base64 (opcional, para arquivos pequenos) */
  data?: string;
}

/** Configuração específica do deck */
export interface DeckConfig {
  /** ID da configuração */
  id: number;
  /** Nome da configuração */
  name: string;
  /** Reproduzir áudio automaticamente na pergunta */
  autoplay: boolean;
  /** Configuração para novos cards */
  new: {
    /** Enterrar cards relacionados */
    bury: boolean;
    /** Delays entre steps de aprendizado (minutos) */
    delays: number[];
    /** Fator de facilidade inicial */
    initialFactor: number;
    /** Intervalos [graduação, fácil] */
    ints: [number, number];
    /** Ordem dos novos cards (0=aleatório, 1=por ordem de criação) */
    order: 0 | 1;
    /** Máximo de novos cards por dia */
    perDay: number;
    /** Separar novos cards (não usado) */
    separate: boolean;
  };
  /** Configuração para cards de revisão */
  rev: {
    /** Enterrar cards relacionados */
    bury: boolean;
    /** Facilidade adicional para botão "fácil" */
    ease4: number;
    /** Fator de aleatoriedade do intervalo */
    fuzz: number;
    /** Fator de multiplicação do intervalo */
    ivlFct: number;
    /** Intervalo máximo em dias */
    maxIvl: number;
    /** Espaço mínimo (não usado) */
    minSpace: number;
    /** Máximo de revisões por dia */
    perDay: number;
  };
  /** Configuração para lapsos */
  lapse: {
    /** Delays para reaprendizado */
    delays: number[];
    /** Ação para leeches (0=suspender, 1=marcar) */
    leechAction: 0 | 1;
    /** Número de lapsos antes da ação de leech */
    leechFails: number;
    /** Intervalo mínimo após leech */
    minInt: number;
    /** Multiplicador do intervalo após lapso */
    mult: number;
  };
  /** Reproduzir áudio na resposta */
  replayq: boolean;
  /** Tempo máximo para parar timer (segundos) */
  maxTaken: number;
  /** Mostrar timer */
  timer: boolean;
  /** Configuração dinâmica (para decks filtrados) */
  dyn?: boolean;
  /** Timestamp da modificação */
  mod: number;
  /** Update sequence number */
  usn: number;
}

/** Entrada do histórico de revisões */
export interface ReviewLogEntry {
  /** ID único (timestamp em milliseconds) */
  id: number;
  /** ID do card */
  cid: number;
  /** Update sequence number */
  usn: number;
  /**
   * Botão pressionado:
   * - revisão: 1=errado, 2=difícil, 3=ok, 4=fácil
   * - aprendizado: 1=errado, 2=ok, 3=fácil
   */
  ease: 1 | 2 | 3 | 4;
  /** Intervalo usado no algoritmo SRS (negativo=segundos, positivo=dias) */
  ivl: number;
  /** Intervalo anterior */
  lastIvl: number;
  /** Fator de facilidade (permille ou dificuldade FSRS) */
  factor: number;
  /** Tempo gasto na revisão (ms, máximo 60000) */
  time: number;
  /**
   * Tipo de revisão:
   * 0=aprender, 1=revisão, 2=reaprender, 3=filtrado, 4=manual, 5=reagendado
   */
  type: 0 | 1 | 2 | 3 | 4 | 5;
}

/** Função para criar uma estrutura de deck vazia */
export function createEmptyDeckStructure(deckName: string): AnkiDeckStructure {
  const now = Date.now();
  const nowSeconds = Math.floor(now / 1000);

  return {
    collection: {
      id: 1,
      created: nowSeconds,
      modified: now,
      version: 11,
      usn: 0,
      config: {
        curDeck: 1,
        activeDecks: [1],
        newSpread: 0,
        collapseTime: 1200,
        timeLim: 0,
        estTimes: true,
        dueCounts: true,
        curModel: "",
        nextPos: 1,
        sortType: "noteFld",
        sortBackwards: false,
        addToCur: true,
        dayLearnFirst: false,
        newBury: true,
        activeCols: ["noteFld", "template", "cardDue", "deck"],
      },
    },
    deck: {
      id: 1,
      name: deckName,
      collapsed: false,
      browserCollapsed: false,
      newToday: [0, 0],
      revToday: [0, 0],
      lrnToday: [0, 0],
      timeToday: [0, 0],
      dyn: 0,
      mod: nowSeconds,
      desc: "",
      md: false,
    },
    noteTypes: [],
    notes: [],
    cards: [],
    media: [],
    deckConfig: {
      id: 1,
      name: "Default",
      autoplay: true,
      new: {
        bury: false,
        delays: [1, 10],
        initialFactor: 2500,
        ints: [1, 4],
        order: 1,
        perDay: 20,
        separate: true,
      },
      rev: {
        bury: false,
        ease4: 1.3,
        fuzz: 0.05,
        ivlFct: 1,
        maxIvl: 36500,
        minSpace: 1,
        perDay: 200,
      },
      lapse: {
        delays: [10],
        leechAction: 0,
        leechFails: 8,
        minInt: 1,
        mult: 0,
      },
      replayq: true,
      maxTaken: 60,
      timer: false,
      mod: nowSeconds,
      usn: 0,
    },
    tags: [],
  };
}

/** Função para criar um note type básico (front/back) */
export function createBasicNoteType(): NoteType {
  const now = Date.now();

  return {
    id: now,
    name: "Basic",
    css: `.card {
  font-family: arial;
  font-size: 20px;
  text-align: center;
  color: black;
  background-color: white;
}
.cloze {
  font-weight: bold;
  color: blue;
}`,
    did: 1,
    flds: [
      {
        name: "Front",
        font: "Arial",
        media: [],
        ord: 0,
        rtl: false,
        size: 20,
        sticky: false,
      },
      {
        name: "Back",
        font: "Arial",
        media: [],
        ord: 1,
        rtl: false,
        size: 20,
        sticky: false,
      },
    ],
    latexPre:
      "\\documentclass[12pt]{article}\n\\special{papersize=3in,5in}\n\\usepackage[utf8]{inputenc}\n\\usepackage{amssymb,amsmath}\n\\pagestyle{empty}\n\\setlength{\\parindent}{0in}\n\\begin{document}\n",
    latexPost: "\\end{document}",
    mod: Math.floor(now / 1000),
    req: [[0, "all", [0]]],
    sortf: 0,
    tags: [],
    tmpls: [
      {
        name: "Card 1",
        qfmt: "{{Front}}",
        afmt: "{{FrontSide}}\n\n<hr id=answer>\n\n{{Back}}",
        bqfmt: "",
        bafmt: "",
        did: null,
        ord: 0,
      },
    ],
    type: 0,
    usn: 0,
    vers: [],
  };
}

/** Função para criar um note type com suporte a mídia */
export function createMediaNoteType(): NoteType {
  const now = Date.now();

  return {
    id: now,
    name: "Basic with Media",
    css: `.card {
  font-family: arial;
  font-size: 20px;
  text-align: center;
  color: black;
  background-color: white;
}
img {
  max-width: 100%;
  max-height: 400px;
}
audio {
  width: 100%;
}`,
    did: 1,
    flds: [
      {
        name: "Front",
        font: "Arial",
        media: [],
        ord: 0,
        rtl: false,
        size: 20,
        sticky: false,
      },
      {
        name: "Back",
        font: "Arial",
        media: [],
        ord: 1,
        rtl: false,
        size: 20,
        sticky: false,
      },
      {
        name: "Audio",
        font: "Arial",
        media: [],
        ord: 2,
        rtl: false,
        size: 20,
        sticky: false,
      },
      {
        name: "Image",
        font: "Arial",
        media: [],
        ord: 3,
        rtl: false,
        size: 20,
        sticky: false,
      },
    ],
    latexPre:
      "\\documentclass[12pt]{article}\n\\special{papersize=3in,5in}\n\\usepackage[utf8]{inputenc}\n\\usepackage{amssymb,amsmath}\n\\pagestyle{empty}\n\\setlength{\\parindent}{0in}\n\\begin{document}\n",
    latexPost: "\\end{document}",
    mod: Math.floor(now / 1000),
    req: [[0, "all", [0]]],
    sortf: 0,
    tags: [],
    tmpls: [
      {
        name: "Card 1",
        qfmt: "{{Front}}\n{{#Image}}<br>{{Image}}{{/Image}}\n{{#Audio}}{{Audio}}{{/Audio}}",
        afmt: "{{FrontSide}}\n\n<hr id=answer>\n\n{{Back}}",
        bqfmt: "",
        bafmt: "",
        did: null,
        ord: 0,
      },
    ],
    type: 0,
    usn: 0,
    vers: [],
  };
}

/** Função helper para processar campos de uma nota */
export function parseNoteFields(flds: string): string[] {
  return flds.split("\x1f");
}

/** Função helper para processar tags */
export function parseNoteTags(tags: string): string[] {
  return tags
    .trim()
    .split(/\s+/)
    .filter((tag) => tag.length > 0);
}

/** Função helper para extrair referências de mídia de um campo */
export function extractMediaReferences(fieldContent: string): string[] {
  const mediaRefs: string[] = [];

  // Regex para imagens: <img src="filename">
  const imgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
  let match;
  while ((match = imgRegex.exec(fieldContent)) !== null) {
    mediaRefs.push(match[1]);
  }

  // Regex para áudio: [sound:filename]
  const soundRegex = /\[sound:([^\]]+)\]/gi;
  while ((match = soundRegex.exec(fieldContent)) !== null) {
    mediaRefs.push(match[1]);
  }

  return mediaRefs;
}

/** Função para extrair todas as referências de mídia de uma nota */
export function extractAllMediaFromNote(note: Note): string[] {
  const fields = parseNoteFields(note.flds);
  const allMedia: string[] = [];

  fields.forEach((field) => {
    const mediaRefs = extractMediaReferences(field);
    allMedia.push(...mediaRefs);
  });

  return [...new Set(allMedia)]; // Remove duplicatas
}
