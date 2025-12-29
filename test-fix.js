// Teste da função de processamento de texto do Anki
// Este arquivo testa como os dados são processados para resolver o problema dos separadores

// Simulação de dados como vem do backend
const problematicData = {
  frontText: "Direito Tributário\u001fA Constituição Federal é fonte instituidora de tributos.\u001ferrado\u001f\u001f",
  backText: "A CF/88 apenas fixa quem é competente para cada tributo.&nbsp;\nContudo cada ente federado deverá instituir o tributo de sua competência por meio de Lei.\u001f\u001f\u001f\u001f"
};

// Função de processamento (a mesma que foi adicionada no frontend)
function processAnkiText(text) {
  if (!text) return "";

  // Decodificar entidades HTML primeiro
  let processed = text.replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"');

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
}

console.log("=== TESTE DE PROCESSAMENTO DE TEXTO ANKI ===\n");

console.log("📝 TEXTO ORIGINAL (frontText):");
console.log("RAW:", JSON.stringify(problematicData.frontText));
console.log("VISUAL:", problematicData.frontText);
console.log();

console.log("✅ TEXTO PROCESSADO (frontText):");
const processedFront = processAnkiText(problematicData.frontText);
console.log("PROCESSED:", JSON.stringify(processedFront));
console.log("VISUAL:", processedFront);
console.log();

console.log("📝 TEXTO ORIGINAL (backText):");
console.log("RAW:", JSON.stringify(problematicData.backText));
console.log("VISUAL:", problematicData.backText);
console.log();

console.log("✅ TEXTO PROCESSADO (backText):");
const processedBack = processAnkiText(problematicData.backText);
console.log("PROCESSED:", JSON.stringify(processedBack));
console.log("VISUAL:", processedBack);
console.log();

console.log("🎯 RESULTADO FINAL:");
console.log("Frente:", processedFront);
console.log("Verso:", processedBack);
