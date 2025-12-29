"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Função para decodificar entidades HTML
const decodeHtmlEntities = (text: string): string => {
  if (typeof document === "undefined") return text; // Server-side safety
  const textarea = document.createElement("textarea");
  textarea.innerHTML = text;
  return textarea.value;
};

// Função para processar texto do Anki com separadores especiais e HTML
const processAnkiText = (text: string): string => {
  if (!text) return "";

  // Decodificar entidades HTML primeiro
  let processed = decodeHtmlEntities(text);

  // Substituir separadores \u001f (Unit Separator) por quebra de linha para manter organização
  processed = processed.replace(/\u001f/g, "\n");

  // Substituir &nbsp; por espaço normal
  processed = processed.replace(/&nbsp;/g, " ");

  // Remover múltiplas quebras de linha consecutivas (máximo 2)
  processed = processed.replace(/\n{3,}/g, "\n\n");

  // Remover espaços extras no final de cada linha
  processed = processed.replace(/[ \t]+$/gm, "");

  // Trim geral
  processed = processed.trim();

  return processed;
};

// Função para renderizar HTML de forma segura
const renderSafeHTML = (html: string) => {
  // Lista de tags permitidas para flashcards
  const allowedTags = [
    "p",
    "br",
    "strong",
    "b",
    "em",
    "i",
    "u",
    "s",
    "mark",
    "span",
    "div",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "ul",
    "ol",
    "li",
    "blockquote",
    "code",
    "pre",
    "a",
    "img",
  ];

  // Se contém tags HTML, renderiza como HTML
  if (/<[^>]+>/.test(html)) {
    return (
      <div
        dangerouslySetInnerHTML={{ __html: html }}
        className="wysiwyg-content prose prose-sm max-w-none [&>p]:mb-2 [&>ul]:mb-2 [&>ol]:mb-2 [&>blockquote]:mb-2 [&>h1]:mb-2 [&>h2]:mb-2 [&>h3]:mb-2 [&>h4]:mb-2 [&>h5]:mb-2 [&>h6]:mb-2 [&_img]:max-w-full [&_img]:h-auto [&_img]:rounded-lg [&_img]:mx-auto [&_img]:block"
      />
    );
  }

  // Caso contrário, renderiza como texto simples com quebras de linha
  return <div className="whitespace-pre-line">{html}</div>;
};

interface FlashcardDisplayProps {
  flashcard: {
    id: number;
    frontText: string;
    backText: string;
  };
  showBack?: boolean;
  onFlip?: () => void;
}

export function FlashcardDisplay({
  flashcard,
  showBack = false,
  onFlip,
}: FlashcardDisplayProps) {
  const currentSide = showBack ? "back" : "front";
  const currentText = showBack ? flashcard.backText : flashcard.frontText;
  const processedText = processAnkiText(currentText);

  return (
    <div className="w-full max-w-md mx-auto">
      <Card
        className={`min-h-48 cursor-pointer transition-all duration-300 hover:shadow-lg ${
          showBack ? "bg-blue-50 dark:bg-blue-950" : "bg-white dark:bg-gray-900"
        }`}
        onClick={onFlip}
      >
        <CardContent className="p-6 h-full flex flex-col justify-center">
          {/* Texto do card processado para Anki com suporte a cloze deletion e HTML */}
          <div className="text-center mb-4 flex-grow flex items-center justify-center max-w-full break-words overflow-hidden">
            {processedText.includes("{{c")
              ? // Renderiza cloze deletion do Anki
                processedText
                  .split(/(\{\{c\d+::[^}]+\}\})/)
                  .map((part, index) => {
                    const match = part.match(/\{\{c\d+::([^}]+)\}\}/);
                    if (match) {
                      return (
                        <span
                          key={index}
                          className="inline-block bg-primary/20 text-primary border border-primary/30 px-2 py-1 rounded font-semibold mx-1"
                        >
                          {showBack ? processAnkiText(match[1]) : "[...]"}
                        </span>
                      );
                    }
                    return <span key={index}>{renderSafeHTML(part)}</span>;
                  })
              : // Renderiza HTML normal ou texto
                renderSafeHTML(processedText)}
          </div>

          {/* Indicador do lado */}
          <div className="text-xs text-center text-gray-500 mt-4">
            {showBack ? "Verso" : "Frente"}
            {onFlip && <span className="block mt-1">Clique para virar</span>}
          </div>
        </CardContent>
      </Card>

      {/* Botão de flip separado (opcional) */}
      {onFlip && (
        <div className="flex justify-center mt-4">
          <Button onClick={onFlip} variant="outline">
            {showBack ? "Ver Frente" : "Ver Verso"}
          </Button>
        </div>
      )}
    </div>
  );
}

interface FlashcardStudyProps {
  flashcard: {
    id: number;
    frontText: string;
    backText: string;
  };
  onNext?: () => void;
  onPrevious?: () => void;
  onRate?: (rating: "easy" | "medium" | "hard") => void;
}

export function FlashcardStudy({
  flashcard,
  onNext,
  onPrevious,
  onRate,
}: FlashcardStudyProps) {
  const [showBack, setShowBack] = useState(false);

  const handleFlip = () => {
    setShowBack(!showBack);
  };

  const handleRate = (rating: "easy" | "medium" | "hard") => {
    onRate?.(rating);
    setShowBack(false); // Reset para próximo card
  };

  return (
    <div className="space-y-6">
      <FlashcardDisplay
        flashcard={flashcard}
        showBack={showBack}
        onFlip={handleFlip}
      />

      {/* Controles de estudo */}
      {showBack && onRate && (
        <div className="flex justify-center gap-2">
          <Button
            onClick={() => handleRate("hard")}
            variant="destructive"
            size="sm"
          >
            Difícil
          </Button>
          <Button
            onClick={() => handleRate("medium")}
            variant="outline"
            size="sm"
          >
            Médio
          </Button>
          <Button
            onClick={() => handleRate("easy")}
            variant="default"
            size="sm"
          >
            Fácil
          </Button>
        </div>
      )}

      {/* Navegação */}
      <div className="flex justify-between">
        <Button onClick={onPrevious} variant="outline" disabled={!onPrevious}>
          Anterior
        </Button>
        <Button onClick={onNext} variant="outline" disabled={!onNext}>
          Próximo
        </Button>
      </div>
    </div>
  );
}
