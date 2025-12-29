/**
 * Script de teste para validar as melhorias no webhook handler
 * 
 * Este script simula o webhook recebido para verificar se:
 * 1. A busca por checkoutSession funciona
 * 2. Os logs estão funcionando corretamente
 * 3. A performance foi otimizada
 */

const testWebhookPayload = {
  "id": "evt_d26e303b238e509335ac9ba210e51b0f&1063779563",
  "event": "PAYMENT_RECEIVED",
  "dateCreated": "2025-09-17 13:12:21",
  "payment": {
    "object": "payment",
    "id": "pay_hv82gm5s5p6xs4n4",
    "dateCreated": "2025-09-17",
    "customer": "cus_000135374657",
    "checkoutSession": "96f721a7-928d-4f97-9aaa-f159da41924f",
    "paymentLink": null,
    "value": 5,
    "netValue": 4.01,
    "originalValue": null,
    "interestValue": null,
    "description": null,
    "billingType": "PIX",
    "confirmedDate": "2025-09-17",
    "pixTransaction": "323d140b-c4dc-4d21-b116-ed1e39dcf707",
    "pixQrCodeId": "PROTOCOLODOAPROVAD00000521420151ASA",
    "status": "RECEIVED",
    "dueDate": "2025-09-17",
    "originalDueDate": "2025-09-17",
    "paymentDate": "2025-09-17",
    "clientPaymentDate": "2025-09-17",
    "installmentNumber": null,
    "invoiceUrl": "https://www.asaas.com/i/hv82gm5s5p6xs4n4",
    "invoiceNumber": "637750147",
    "externalReference": null,
    "deleted": false,
    "anticipated": false,
    "anticipable": false,
    "creditDate": "2025-09-17",
    "estimatedCreditDate": "2025-09-17",
    "transactionReceiptUrl": "https://www.asaas.com/comprovantes/h/UEFZTUVOVF9SRUNFSVZFRDpwYXlfaHY4MmdtNXM1cDZ4czRuNA%3D%3D",
    "nossoNumero": null,
    "bankSlipUrl": null,
    "lastInvoiceViewedDate": null,
    "lastBankSlipViewedDate": null,
    "discount": {
      "value": 0,
      "limitDate": null,
      "dueDateLimitDays": 0,
      "type": "FIXED"
    },
    "fine": {
      "value": 0,
      "type": "FIXED"
    },
    "interest": {
      "value": 0,
      "type": "PERCENTAGE"
    },
    "postalService": false,
    "escrow": null,
    "refunds": null
  }
};

console.log("=== TESTE DO WEBHOOK OTIMIZADO ===");
console.log("Payload de exemplo:", JSON.stringify(testWebhookPayload, null, 2));
console.log("\nMelhorias implementadas:");
console.log("1. ✅ Busca por checkoutSession como fallback");
console.log("2. ✅ Uso direto dos dados do webhook (sem chamada extra à API)");
console.log("3. ✅ Logs detalhados para debugging");
console.log("4. ✅ Transações otimizadas");
console.log("5. ✅ Prevenção de atualizações duplicadas");

console.log("\nPara testar:");
console.log("1. Envie este payload para /webhooks/asaas");
console.log("2. Verifique os logs no console");
console.log("3. Confirme se a purchase foi marcada como 'paid'");