import type { Context } from "hono";
import crypto from "crypto";
import prisma from "../../prisma";
import { AsaasService } from "@/lib/asaas/service";
import { WEBHOOK_EVENTS } from "@/lib/asaas/config";
import type {
  AsaasWebhookPayload,
  AsaasPaymentResponse,
} from "@/lib/asaas/types";

// Hash HMAC para validar webhook (se configurado)
function validateWebhookSignature(
  payload: string,
  signature: string,
  secret: string
): boolean {
  if (!secret || !signature) return true; // Se não há secret configurado, pula validação

  const expectedSignature = crypto
    .createHmac("sha256", secret)
    .update(payload)
    .digest("hex");

  return crypto.timingSafeEqual(
    Buffer.from(signature, "hex"),
    Buffer.from(expectedSignature, "hex")
  );
}

// Função otimizada para sincronizar pagamento usando dados do webhook
async function syncPaymentFromWebhook(
  paymentData: AsaasPaymentResponse
): Promise<void> {
  console.log(
    `[SYNC] Syncing payment ${paymentData.id} with status ${paymentData.status}`
  );

  // Múltiplas estratégias para encontrar a purchase
  let purchase = null;

  // 1. Buscar por asaasPaymentId (ID do pagamento)
  purchase = await prisma.purchase.findFirst({
    where: { asaasPaymentId: paymentData.id },
    include: { user: true, deck: true },
  });

  if (!purchase) {
    // 2. Buscar por checkoutSession (se disponível)
    if (paymentData.checkoutSession) {
      console.log(
        `[SYNC] Searching by checkoutSession: ${paymentData.checkoutSession}`
      );
      purchase = await prisma.purchase.findFirst({
        where: { asaasPaymentId: paymentData.checkoutSession },
        include: { user: true, deck: true },
      });
    }
  }

  if (!purchase) {
    console.warn(
      `[SYNC] Purchase not found for payment ${paymentData.id} or checkoutSession ${paymentData.checkoutSession}`
    );
    return;
  }

  console.log(
    `[SYNC] Found purchase ${purchase.id} for user ${purchase.user.email}`
  );

  // Buscar ou criar AsaasCustomer
  let asaasCustomer = await prisma.asaasCustomer.findUnique({
    where: { userId: purchase.userId },
  });

  if (!asaasCustomer && paymentData.customer) {
    console.log(`[SYNC] Creating AsaasCustomer for user ${purchase.userId}`);

    // Busca dados do customer na Asaas
    const asaasService = new AsaasService();
    const customerData = await asaasService.getCustomerData(
      paymentData.customer
    );

    // Cria o customer local
    asaasCustomer = await prisma.asaasCustomer.create({
      data: {
        id: crypto.randomUUID(),
        userId: purchase.userId,
        asaasId: customerData.id,
        name: customerData.name,
        email: customerData.email,
        cpfCnpj: customerData.cpfCnpj || null,
        phone: customerData.phone || null,
        mobilePhone: customerData.mobilePhone || null,
        postalCode: customerData.postalCode || null,
        address: customerData.address || null,
        addressNumber: customerData.addressNumber || null,
        complement: customerData.complement || null,
        province: customerData.province || null,
        externalReference: customerData.externalReference || null,
      },
    });

    // Atualiza o usuário com o ID do customer
    await prisma.user.update({
      where: { id: purchase.userId },
      data: { asaasCustomerId: asaasCustomer.asaasId },
    });
  }

  // Usa transação para garantir consistência
  await prisma.$transaction(async (tx) => {
    // Buscar ou criar AsaasPayment
    let asaasPayment = await tx.asaasPayment.findUnique({
      where: { asaasId: paymentData.id },
    });

    const paymentUpdateData = {
      status: paymentData.status,
      confirmedDate: paymentData.paymentDate
        ? new Date(paymentData.paymentDate)
        : null,
      paymentDate: paymentData.paymentDate
        ? new Date(paymentData.paymentDate)
        : null,
      clientPaymentDate: paymentData.clientPaymentDate
        ? new Date(paymentData.clientPaymentDate)
        : null,
      netValue: paymentData.netValue || null,
      asaasPayload: JSON.stringify(paymentData),
    };

    if (!asaasPayment && asaasCustomer) {
      console.log(
        `[SYNC] Creating AsaasPayment record for payment ${paymentData.id}`
      );

      asaasPayment = await tx.asaasPayment.create({
        data: {
          id: crypto.randomUUID(),
          customerId: asaasCustomer.id,
          purchaseId: purchase.id,
          asaasId: paymentData.id,
          billingType: paymentData.billingType,
          value: paymentData.value,
          dueDate: new Date(paymentData.dueDate),
          originalDueDate: paymentData.originalDueDate
            ? new Date(paymentData.originalDueDate)
            : null,
          description: paymentData.description || null,
          externalReference: paymentData.externalReference || null,
          invoiceUrl: paymentData.invoiceUrl || null,
          bankSlipUrl: paymentData.bankSlipUrl || null,
          pixQrCode: null,
          originalValue: paymentData.originalValue || null,
          interestValue: paymentData.interestValue || null,
          discountValue:
            paymentData.value -
            (paymentData.originalValue || paymentData.value),
          ...paymentUpdateData,
        },
      });
    } else if (asaasPayment) {
      console.log(
        `[SYNC] Updating existing AsaasPayment record for payment ${paymentData.id}`
      );

      // Atualiza payment existente
      await tx.asaasPayment.update({
        where: { id: asaasPayment.id },
        data: paymentUpdateData,
      });
    }

    // Atualiza a compra se o pagamento foi confirmado - apenas se ainda não está pago
    if (
      ["CONFIRMED", "RECEIVED", "RECEIVED_IN_CASH"].includes(
        paymentData.status
      ) &&
      purchase.status !== "paid"
    ) {
      console.log(
        `[SYNC] Marking purchase ${purchase.id} as paid - payment confirmed with status ${paymentData.status}`
      );

      await tx.purchase.update({
        where: { id: purchase.id },
        data: {
          status: "paid",
          paymentMethod: paymentData.billingType,
          confirmedAt: paymentData.paymentDate
            ? new Date(paymentData.paymentDate)
            : new Date(),
          asaasPaymentId: paymentData.id, // Atualiza com o ID real do pagamento
        },
      });

      console.log(
        `[SYNC] ✅ Purchase ${purchase.id} successfully updated to paid status`
      );
    } else if (
      ["CONFIRMED", "RECEIVED", "RECEIVED_IN_CASH"].includes(paymentData.status)
    ) {
      console.log(
        `[SYNC] Purchase ${purchase.id} already marked as paid, skipping update`
      );
    } else {
      console.log(
        `[SYNC] Payment ${paymentData.id} status is ${paymentData.status} - no purchase status change`
      );
    }
  });
}

export async function asaasWebhookHandler(c: Context) {
  try {
    const body = await c.req.text();
    const webhookPayload: AsaasWebhookPayload = JSON.parse(body);

    console.log(`[WEBHOOK] Received event: ${webhookPayload.event}`, {
      paymentId: webhookPayload.payment?.id,
      checkoutSession: webhookPayload.payment?.checkoutSession,
      status: webhookPayload.payment?.status,
    });

    // Validação da assinatura (opcional)
    const signature = c.req.header("asaas-signature");
    const webhookSecret = process.env.ASAAS_WEBHOOK_SECRET;

    if (webhookSecret && signature) {
      const isValid = validateWebhookSignature(body, signature, webhookSecret);
      if (!isValid) {
        console.error("Invalid webhook signature");
        return c.json({ error: "Invalid signature" }, 401);
      }
    }

    // Salva o webhook no banco para auditoria
    const webhookRecord = await prisma.asaasWebhook.create({
      data: {
        id: crypto.randomUUID(),
        event: webhookPayload.event,
        object: webhookPayload.payment
          ? "payment"
          : webhookPayload.subscription
          ? "subscription"
          : webhookPayload.customer
          ? "customer"
          : "unknown",
        objectId:
          webhookPayload.payment?.id ||
          webhookPayload.subscription?.id ||
          webhookPayload.customer?.id ||
          "unknown",
        payload: body,
        processed: false,
      },
    });

    try {
      switch (webhookPayload.event) {
        case WEBHOOK_EVENTS.PAYMENT_CREATED:
        case WEBHOOK_EVENTS.PAYMENT_RECEIVED:
        case WEBHOOK_EVENTS.PAYMENT_UPDATED:
        case WEBHOOK_EVENTS.PAYMENT_CONFIRMED:
        case WEBHOOK_EVENTS.PAYMENT_OVERDUE:
          if (webhookPayload.payment) {
            // Usa dados do webhook diretamente para otimizar performance
            await syncPaymentFromWebhook(webhookPayload.payment);
            console.log(
              `[WEBHOOK] Payment ${webhookPayload.payment.id} processed for event ${webhookPayload.event}`
            );
          }
          break;

        case WEBHOOK_EVENTS.SUBSCRIPTION_CREATED:
        case WEBHOOK_EVENTS.SUBSCRIPTION_UPDATED:
          if (webhookPayload.subscription) {
            await syncSubscriptionStatus(webhookPayload.subscription.id);
            console.log(
              `[WEBHOOK] Subscription ${webhookPayload.subscription.id} synced for event ${webhookPayload.event}`
            );
          }
          break;

        case WEBHOOK_EVENTS.SUBSCRIPTION_DELETED:
          if (webhookPayload.subscription) {
            await handleSubscriptionCancellation(
              webhookPayload.subscription.id
            );
            console.log(
              `[WEBHOOK] Subscription ${webhookPayload.subscription.id} cancelled`
            );
          }
          break;

        default:
          console.log(
            `[WEBHOOK] Unhandled webhook event: ${webhookPayload.event}`
          );
      }

      // Marca webhook como processado
      await prisma.asaasWebhook.update({
        where: { id: webhookRecord.id },
        data: {
          processed: true,
          processedAt: new Date(),
        },
      });

      return c.json({ success: true });
    } catch (processingError) {
      console.error("[WEBHOOK] Error processing webhook:", processingError);

      // Marca webhook como erro
      await prisma.asaasWebhook.update({
        where: { id: webhookRecord.id },
        data: {
          processed: false,
          errorLog:
            processingError instanceof Error
              ? processingError.message
              : "Unknown error",
        },
      });

      // Retorna sucesso para evitar reenvio desnecessário
      return c.json({ success: true, error: "Processing failed" });
    }
  } catch (error) {
    console.error("[WEBHOOK] Webhook error:", error);
    return c.json({ error: "Internal server error" }, 500);
  }
}

// Função auxiliar para sincronizar status da assinatura
async function syncSubscriptionStatus(
  asaasSubscriptionId: string
): Promise<void> {
  const asaasSubscription = await prisma.asaasSubscription.findUnique({
    where: { asaasId: asaasSubscriptionId },
    include: { subscription: true },
  });

  if (!asaasSubscription?.subscription) {
    return;
  }

  // Busca dados atualizados da Asaas
  const asaasService = new AsaasService();
  const apiClient = (asaasService as any).apiClient;
  const asaasResponse = await apiClient.getSubscription(asaasSubscriptionId);

  // Atualiza subscription local
  await prisma.subscription.update({
    where: { id: asaasSubscription.subscription.id },
    data: {
      status: asaasResponse.status.toLowerCase(),
      nextDueDate: new Date(asaasResponse.nextDueDate),
      currentPeriodEnd: asaasResponse.endDate
        ? new Date(asaasResponse.endDate)
        : null,
    },
  });

  // Atualiza AsaasSubscription
  await prisma.asaasSubscription.update({
    where: { id: asaasSubscription.id },
    data: {
      status: asaasResponse.status,
      value: asaasResponse.value,
      nextDueDate: new Date(asaasResponse.nextDueDate),
      endDate: asaasResponse.endDate ? new Date(asaasResponse.endDate) : null,
      asaasPayload: JSON.stringify(asaasResponse),
    },
  });
}

// Função auxiliar para tratar cancelamento de assinatura
async function handleSubscriptionCancellation(
  asaasSubscriptionId: string
): Promise<void> {
  const asaasSubscription = await prisma.asaasSubscription.findUnique({
    where: { asaasId: asaasSubscriptionId },
    include: { subscription: true },
  });

  if (!asaasSubscription?.subscription) {
    return;
  }

  // Cancela subscription local
  await prisma.subscription.update({
    where: { id: asaasSubscription.subscription.id },
    data: { status: "canceled" },
  });

  // Atualiza AsaasSubscription
  await prisma.asaasSubscription.update({
    where: { id: asaasSubscription.id },
    data: { status: "INACTIVE" },
  });
}
