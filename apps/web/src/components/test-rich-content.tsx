"use client";

// Componente de teste para conteúdo HTML rico
export function TestRichContent() {
  const testData = {
    id: 7168,
    deckId: 36,
    frontText:
      '<p><strong>11211212</strong></p><p><strong><em>aasasasa</em></strong></p><p><em>asasas</em></p><p></p><p><s>asasasas</s></p><p><code>asasasasas</code></p><p></p><ul><li><p>asasasa</p></li><li><p>asasasa</p></li></ul><ol><li><p>aasaasasaasa</p></li><li><p>asasas</p></li></ol><p></p><p></p><blockquote><p>asasasasas</p></blockquote><p>assaasas</p><p>asaas</p><img class="max-w-full h-auto rounded-lg" src="https://media.istockphoto.com/id/1443562748/pt/foto/cute-ginger-cat.jpg?s=612x612&w=0&k=20&c=OqlMF3bysUX6cVux5kKc1gqCGMghQpGc5ukyw1qG82s="><p></p>',
    backText:
      '<p><strong>11211212</strong></p><p><strong><em>aasasasa</em></strong></p><p><em>asasas</em></p><p></p><p><s>asasasas</s></p><p><code>asasasasas</code></p><p></p><ul><li><p>asasasa</p></li><li><p>asasasa</p></li></ul><ol><li><p>aasaasasaasa</p></li><li><p>asasas</p></li></ol><p></p><p></p><blockquote><p>asasasasas</p></blockquote><p>assaasas</p><p>asaas</p><img class="max-w-full h-auto rounded-lg" src="https://media.istockphoto.com/id/1443562748/pt/foto/cute-ginger-cat.jpg?s=612x612&w=0&k=20&c=OqlMF3bysUX6cVux5kKc1gqCGMghQpGc5ukyw1qG82s="><p></p>',
    orderIndex: 0,
    deletedAt: null,
    createdAt: "2025-09-13T03:07:48.386Z",
    updatedAt: "2025-09-13T03:07:48.386Z",
  };

  // Função para decodificar entidades HTML
  const decodeHtmlEntities = (text: string): string => {
    if (typeof document === "undefined") return text;
    const textarea = document.createElement("textarea");
    textarea.innerHTML = text;
    return textarea.value;
  };

  // Função para processar texto do Anki com separadores especiais
  const processAnkiText = (text: string): string => {
    if (!text) return "";

    let processed = decodeHtmlEntities(text);
    processed = processed.replace(/\u001f/g, "\n");
    processed = processed.replace(/&nbsp;/g, " ");
    processed = processed.replace(/\n{3,}/g, "\n\n");
    processed = processed.replace(/[ \t]+$/gm, "");
    processed = processed.trim();

    return processed;
  };

  // Função para renderizar HTML de forma segura
  const renderSafeHTML = (html: string) => {
    if (/<[^>]+>/.test(html)) {
      return (
        <div
          dangerouslySetInnerHTML={{ __html: html }}
          className="wysiwyg-content prose prose-sm max-w-none [&>p]:mb-2 [&>ul]:mb-2 [&>ol]:mb-2 [&>blockquote]:mb-2 [&>h1]:mb-2 [&>h2]:mb-2 [&>h3]:mb-2 [&>h4]:mb-2 [&>h5]:mb-2 [&>h6]:mb-2 [&_img]:max-w-full [&_img]:h-auto [&_img]:rounded-lg [&_img]:mx-auto [&_img]:block"
        />
      );
    }

    return <div className="whitespace-pre-line">{html}</div>;
  };

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-8">
      <h1 className="text-2xl font-bold">Teste de Conteúdo HTML Rico</h1>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-primary">Frente do Card</h2>
          <div className="border-2 border-primary/20 bg-primary/5 p-6 rounded-xl">
            {renderSafeHTML(processAnkiText(testData.frontText))}
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-secondary-foreground">
            Verso do Card
          </h2>
          <div className="border-2 border-secondary/20 bg-secondary p-6 rounded-xl">
            {renderSafeHTML(processAnkiText(testData.backText))}
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">HTML Original (Frente):</h3>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded text-xs overflow-x-auto">
          {testData.frontText}
        </pre>
      </div>
    </div>
  );
}
