import prisma from "../../../prisma";
import { AsaasApiClient } from "./client";
import type {
  AsaasCustomerData,
  AsaasCustomerResponse,
  CreatePaymentData,
  CreateSubscriptionData,
  UpdateSubscriptionData,
  CreateCheckoutData,
  CheckoutResponse,
} from "./types";

export class AsaasService {
  private apiClient: AsaasApiClient;

  constructor() {
    this.apiClient = new AsaasApiClient();
  }

  // ===== CUSTOMERS =====

  async getOrCreateCustomer(userId: string): Promise<string> {
    // Verifica se já existe um customer para este usuário
    let asaasCustomer = await prisma.asaasCustomer.findUnique({
      where: { userId },
    });

    if (asaasCustomer) {
      return asaasCustomer.id;
    }

    // Busca os dados do usuário
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new Error("Usuário não encontrado");
    }

    // Cria o customer na Asaas
    const customerData: AsaasCustomerData = {
      name: user.name,
      email: user.email,
      externalReference: `user_${userId}`,
    };

    const asaasResponse = await this.apiClient.createCustomer(customerData);

    // Salva no banco local
    asaasCustomer = await prisma.asaasCustomer.create({
      data: {
        id: crypto.randomUUID(),
        userId,
        asaasId: asaasResponse.id,
        name: asaasResponse.name,
        email: asaasResponse.email,
        cpfCnpj: asaasResponse.cpfCnpj || null,
        phone: asaasResponse.phone || null,
        mobilePhone: asaasResponse.mobilePhone || null,
        postalCode: asaasResponse.postalCode || null,
        address: asaasResponse.address || null,
        addressNumber: asaasResponse.addressNumber || null,
        complement: asaasResponse.complement || null,
        province: asaasResponse.province || null,
        externalReference: asaasResponse.externalReference || null,
      },
    });

    // Atualiza o usuário com o ID do customer
    await prisma.user.update({
      where: { id: userId },
      data: { asaasCustomerId: asaasCustomer.asaasId },
    });

    return asaasCustomer.id;
  }

  async updateCustomer(
    userId: string,
    customerData: Partial<AsaasCustomerData>
  ): Promise<void> {
    const asaasCustomer = await prisma.asaasCustomer.findUnique({
      where: { userId },
    });

    if (!asaasCustomer) {
      throw new Error("Customer não encontrado para este usuário");
    }

    // Atualiza na Asaas
    const asaasResponse = await this.apiClient.updateCustomer(
      asaasCustomer.asaasId,
      customerData
    );

    // Atualiza no banco local
    await prisma.asaasCustomer.update({
      where: { id: asaasCustomer.id },
      data: {
        name: asaasResponse.name,
        email: asaasResponse.email,
        cpfCnpj: asaasResponse.cpfCnpj || null,
        phone: asaasResponse.phone || null,
        mobilePhone: asaasResponse.mobilePhone || null,
        postalCode: asaasResponse.postalCode || null,
        address: asaasResponse.address || null,
        addressNumber: asaasResponse.addressNumber || null,
        complement: asaasResponse.complement || null,
        province: asaasResponse.province || null,
      },
    });
  }

  /**
   * Busca dados de um customer na Asaas
   */
  async getCustomerData(
    asaasCustomerId: string
  ): Promise<AsaasCustomerResponse> {
    return await this.apiClient.getCustomer(asaasCustomerId);
  }

  // ===== PAYMENTS =====

  async createPaymentForPurchase(
    purchaseId: number,
    paymentData: Omit<CreatePaymentData, "customer" | "value">
  ): Promise<string> {
    const purchase = await prisma.purchase.findUnique({
      where: { id: purchaseId },
      include: { user: true, deck: true },
    });

    if (!purchase) {
      throw new Error("Compra não encontrada");
    }

    // Garante que o customer existe
    const customerId = await this.getOrCreateCustomer(purchase.userId);
    const asaasCustomer = await prisma.asaasCustomer.findUnique({
      where: { id: customerId },
    });

    if (!asaasCustomer) {
      throw new Error("Erro ao obter customer");
    }

    // Cria o pagamento na Asaas
    const asaasPaymentData: CreatePaymentData = {
      ...paymentData,
      customer: asaasCustomer.asaasId,
      value: purchase.amountCents / 100, // Converte centavos para reais
      description:
        paymentData.description || `Compra do deck: ${purchase.deck.title}`,
      externalReference: `purchase_${purchaseId}`,
    };

    const asaasResponse = await this.apiClient.createPayment(asaasPaymentData);

    // Salva no banco local
    const asaasPayment = await prisma.asaasPayment.create({
      data: {
        id: crypto.randomUUID(),
        customerId,
        purchaseId,
        asaasId: asaasResponse.id,
        billingType: asaasResponse.billingType,
        status: asaasResponse.status,
        value: asaasResponse.value,
        dueDate: new Date(asaasResponse.dueDate),
        originalDueDate: asaasResponse.originalDueDate
          ? new Date(asaasResponse.originalDueDate)
          : null,
        description: asaasResponse.description || null,
        externalReference: asaasResponse.externalReference || null,
        invoiceUrl: asaasResponse.invoiceUrl || null,
        bankSlipUrl: asaasResponse.bankSlipUrl || null,
        pixQrCode: asaasResponse.pixTransaction?.qrCode.payload || null,
        netValue: asaasResponse.netValue || null,
        originalValue: asaasResponse.originalValue || null,
        interestValue: asaasResponse.interestValue || null,
        discountValue:
          asaasResponse.value -
          (asaasResponse.originalValue || asaasResponse.value),
        asaasPayload: JSON.stringify(asaasResponse),
      },
    });

    // Atualiza a compra com o ID do payment da Asaas
    await prisma.purchase.update({
      where: { id: purchaseId },
      data: {
        asaasPaymentId: asaasResponse.id,
        paymentMethod: asaasResponse.billingType,
      },
    });

    return asaasPayment.id;
  }

  // ===== SUBSCRIPTIONS =====

  async createSubscription(
    userId: string,
    subscriptionData: Omit<CreateSubscriptionData, "customer">
  ): Promise<string> {
    // Garante que o customer existe
    const customerId = await this.getOrCreateCustomer(userId);
    const asaasCustomer = await prisma.asaasCustomer.findUnique({
      where: { id: customerId },
    });

    if (!asaasCustomer) {
      throw new Error("Erro ao obter customer");
    }

    // Cria a assinatura na Asaas
    const asaasSubscriptionData: CreateSubscriptionData = {
      ...subscriptionData,
      customer: asaasCustomer.asaasId,
      externalReference:
        subscriptionData.externalReference || `user_${userId}_subscription`,
    };

    const asaasResponse = await this.apiClient.createSubscription(
      asaasSubscriptionData
    );

    // Cria a subscription no banco local
    const subscription = await prisma.subscription.create({
      data: {
        userId,
        status: asaasResponse.status.toLowerCase(),
        planName: subscriptionData.description || "Plano Premium",
        priceCents: Math.round(asaasResponse.value * 100),
        asaasSubscriptionId: asaasResponse.id,
        nextDueDate: new Date(asaasResponse.nextDueDate),
        currentPeriodEnd: asaasResponse.endDate
          ? new Date(asaasResponse.endDate)
          : null,
      },
    });

    // Salva os dados detalhados da Asaas
    await prisma.asaasSubscription.create({
      data: {
        id: crypto.randomUUID(),
        customerId,
        subscriptionId: subscription.id,
        asaasId: asaasResponse.id,
        billingType: asaasResponse.billingType,
        status: asaasResponse.status,
        value: asaasResponse.value,
        nextDueDate: new Date(asaasResponse.nextDueDate),
        cycle: asaasResponse.cycle,
        description: asaasResponse.description || null,
        endDate: asaasResponse.endDate ? new Date(asaasResponse.endDate) : null,
        maxPayments: asaasResponse.maxPayments || null,
        externalReference: asaasResponse.externalReference || null,
        asaasPayload: JSON.stringify(asaasResponse),
      },
    });

    return subscription.id.toString();
  }

  async updateSubscription(
    subscriptionId: number,
    updateData: UpdateSubscriptionData
  ): Promise<void> {
    const subscription = await prisma.subscription.findUnique({
      where: { id: subscriptionId },
    });

    if (!subscription) {
      throw new Error("Assinatura não encontrada");
    }

    // Atualiza na Asaas usando o asaasSubscriptionId
    const asaasResponse = await this.apiClient.updateSubscription(
      subscription.asaasSubscriptionId,
      updateData
    );

    // Atualiza no banco local
    await prisma.subscription.update({
      where: { id: subscriptionId },
      data: {
        priceCents: Math.round(asaasResponse.value * 100),
        nextDueDate: new Date(asaasResponse.nextDueDate),
        currentPeriodEnd: asaasResponse.endDate
          ? new Date(asaasResponse.endDate)
          : null,
      },
    });

    // Atualiza AsaasSubscription se existir
    const asaasSubscription = await prisma.asaasSubscription.findUnique({
      where: { asaasId: subscription.asaasSubscriptionId },
    });

    if (asaasSubscription) {
      await prisma.asaasSubscription.update({
        where: { id: asaasSubscription.id },
        data: {
          status: asaasResponse.status,
          value: asaasResponse.value,
          nextDueDate: new Date(asaasResponse.nextDueDate),
          cycle: asaasResponse.cycle,
          description: asaasResponse.description || null,
          endDate: asaasResponse.endDate
            ? new Date(asaasResponse.endDate)
            : null,
          maxPayments: asaasResponse.maxPayments || null,
          asaasPayload: JSON.stringify(asaasResponse),
        },
      });
    }
  }

  async cancelSubscription(subscriptionId: number): Promise<void> {
    const subscription = await prisma.subscription.findUnique({
      where: { id: subscriptionId },
    });

    if (!subscription) {
      throw new Error("Assinatura não encontrada");
    }

    // Cancela na Asaas
    await this.apiClient.deleteSubscription(subscription.asaasSubscriptionId);

    // Atualiza no banco local
    await prisma.subscription.update({
      where: { id: subscriptionId },
      data: { status: "canceled" },
    });

    // Atualiza AsaasSubscription se existir
    const asaasSubscription = await prisma.asaasSubscription.findUnique({
      where: { asaasId: subscription.asaasSubscriptionId },
    });

    if (asaasSubscription) {
      await prisma.asaasSubscription.update({
        where: { id: asaasSubscription.id },
        data: { status: "INACTIVE" },
      });
    }
  }

  // ===== SYNC METHODS =====

  async syncPaymentStatus(asaasPaymentId: string): Promise<void> {
    const asaasPayment = await prisma.asaasPayment.findUnique({
      where: { asaasId: asaasPaymentId },
      include: { purchase: true },
    });

    if (!asaasPayment) {
      // Se não encontrou um AsaasPayment, pode ser um pagamento de checkout
      // Vamos tentar sincronizar como pagamento de checkout
      await this.syncCheckoutPayment(asaasPaymentId);
      return;
    }

    // Busca o status atualizado na Asaas
    const asaasResponse = await this.apiClient.getPayment(asaasPaymentId);

    // Atualiza o payment local
    await prisma.asaasPayment.update({
      where: { id: asaasPayment.id },
      data: {
        status: asaasResponse.status,
        confirmedDate: asaasResponse.paymentDate
          ? new Date(asaasResponse.paymentDate)
          : null,
        paymentDate: asaasResponse.paymentDate
          ? new Date(asaasResponse.paymentDate)
          : null,
        clientPaymentDate: asaasResponse.clientPaymentDate
          ? new Date(asaasResponse.clientPaymentDate)
          : null,
        netValue: asaasResponse.netValue || null,
        asaasPayload: JSON.stringify(asaasResponse),
      },
    });

    // Atualiza a compra se o pagamento foi confirmado
    if (
      asaasPayment.purchase &&
      ["CONFIRMED", "RECEIVED", "RECEIVED_IN_CASH"].includes(
        asaasResponse.status
      )
    ) {
      await prisma.purchase.update({
        where: { id: asaasPayment.purchase.id },
        data: {
          status: "paid",
          confirmedAt: asaasResponse.paymentDate
            ? new Date(asaasResponse.paymentDate)
            : new Date(),
        },
      });
    }
  }

  /**
   * Sincroniza pagamentos de checkout que não possuem AsaasPayment pré-criado
   */
  async syncCheckoutPayment(asaasPaymentId: string): Promise<void> {
    // Busca o pagamento na API da Asaas
    const asaasResponse = await this.apiClient.getPayment(asaasPaymentId);

    // Busca a purchase pelo asaasPaymentId (que foi salvo como checkout ID)
    const purchase = await prisma.purchase.findFirst({
      where: { asaasPaymentId: asaasPaymentId },
      include: { user: true, deck: true },
    });

    if (!purchase) {
      console.warn(`Purchase não encontrada para payment ${asaasPaymentId}`);
      return;
    }

    // Cria ou obtém o customer da Asaas usando dados do pagamento
    let asaasCustomer = await prisma.asaasCustomer.findUnique({
      where: { userId: purchase.userId },
    });

    if (!asaasCustomer && asaasResponse.customer) {
      // Busca dados do customer na Asaas
      const customerData = await this.apiClient.getCustomer(
        asaasResponse.customer
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

    // Cria o AsaasPayment record
    if (asaasCustomer) {
      await prisma.asaasPayment.create({
        data: {
          id: crypto.randomUUID(),
          customerId: asaasCustomer.id,
          purchaseId: purchase.id,
          asaasId: asaasResponse.id,
          billingType: asaasResponse.billingType,
          status: asaasResponse.status,
          value: asaasResponse.value,
          dueDate: new Date(asaasResponse.dueDate),
          originalDueDate: asaasResponse.originalDueDate
            ? new Date(asaasResponse.originalDueDate)
            : null,
          description: asaasResponse.description || null,
          externalReference: asaasResponse.externalReference || null,
          invoiceUrl: asaasResponse.invoiceUrl || null,
          bankSlipUrl: asaasResponse.bankSlipUrl || null,
          pixQrCode: asaasResponse.pixTransaction?.qrCode.payload || null,
          netValue: asaasResponse.netValue || null,
          originalValue: asaasResponse.originalValue || null,
          interestValue: asaasResponse.interestValue || null,
          discountValue:
            asaasResponse.value -
            (asaasResponse.originalValue || asaasResponse.value),
          confirmedDate: asaasResponse.paymentDate
            ? new Date(asaasResponse.paymentDate)
            : null,
          paymentDate: asaasResponse.paymentDate
            ? new Date(asaasResponse.paymentDate)
            : null,
          clientPaymentDate: asaasResponse.clientPaymentDate
            ? new Date(asaasResponse.clientPaymentDate)
            : null,
          asaasPayload: JSON.stringify(asaasResponse),
        },
      });
    }

    // Atualiza a compra se o pagamento foi confirmado
    if (
      ["CONFIRMED", "RECEIVED", "RECEIVED_IN_CASH"].includes(
        asaasResponse.status
      )
    ) {
      await prisma.purchase.update({
        where: { id: purchase.id },
        data: {
          status: "paid",
          paymentMethod: asaasResponse.billingType,
          confirmedAt: asaasResponse.paymentDate
            ? new Date(asaasResponse.paymentDate)
            : new Date(),
        },
      });
    }
  }

  // ===== UTILS =====

  /**
   * Verifica se um usuário já comprou um deck específico
   */
  async hasUserPurchasedDeck(userId: string, deckId: number): Promise<boolean> {
    const purchase = await prisma.purchase.findFirst({
      where: {
        userId,
        deckId,
        status: "paid",
      },
    });

    return !!purchase;
  }

  /**
   * Valida e ajusta URLs de callback para garantir compatibilidade com Asaas
   * Em ambiente de desenvolvimento, algumas URLs localhost podem ser rejeitadas
   */
  private validateCallbackUrl(url: string): string {
    try {
      const urlObj = new URL(url);

      // Se estamos em ambiente de desenvolvimento e a URL é localhost
      if (
        process.env.NODE_ENV !== "production" &&
        (urlObj.hostname === "localhost" || urlObj.hostname === "127.0.0.1")
      ) {
        // Log para debug
        console.warn(`URL localhost detectada: ${url}`);

        // Para desenvolvimento, você pode:
        // 1. Usar ngrok para expor localhost publicamente
        // 2. Usar URLs de teste válidas
        // 3. Configurar um domínio de desenvolvimento

        // Verificar se há uma variável de ambiente com URL pública para desenvolvimento
        const publicUrl =
          process.env.NEXT_PUBLIC_DEV_URL || process.env.NGROK_URL;

        if (publicUrl) {
          console.log(`Usando URL pública de desenvolvimento: ${publicUrl}`);
          return url.replace(urlObj.origin, publicUrl);
        }

        // Se não há URL pública configurada, avisa mas tenta com a URL original
        console.warn(
          "ATENÇÃO: Asaas pode rejeitar URLs localhost. Configure NEXT_PUBLIC_DEV_URL ou NGROK_URL para usar uma URL pública."
        );
        console.warn(
          "Alternativa: Use ngrok (https://ngrok.com/) para expor localhost publicamente."
        );

        return url;
      }

      // Garante que a URL seja HTTPS em produção
      if (
        process.env.NODE_ENV === "production" &&
        urlObj.protocol !== "https:"
      ) {
        console.warn(`Converting HTTP to HTTPS for production: ${url}`);
        urlObj.protocol = "https:";
        return urlObj.toString();
      }

      return url;
    } catch (error) {
      console.error(`URL inválida: ${url}`, error);
      throw new Error(`URL de callback inválida: ${url}`);
    }
  }

  // ===== CHECKOUT =====

  async createCheckoutForDeck(
    deckId: number,
    userId: string
  ): Promise<{ checkoutUrl: string; checkoutId: string }> {
    // Busca informações do deck
    const deck = await prisma.deck.findUnique({
      where: { id: deckId, deletedAt: null },
    });

    if (!deck) {
      throw new Error("Deck não encontrado");
    }

    // Busca informações do usuário para pré-preenchimento
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new Error("Usuário não encontrado");
    }

    // Cria uma purchase record para trackear esta compra
    const purchase = await prisma.purchase.create({
      data: {
        userId,
        deckId,
        amountCents: deck.priceCents,
        status: "pending",
        paymentMethod: null, // Será definido quando o pagamento for confirmado
      },
    });

    // URLs de callback (ajuste conforme suas rotas)
    const baseUrl = process.env.NEXT_PUBLIC_WEB_URL || "http://localhost:3001";
    const successUrl = `${baseUrl}/payment-status?payment=success&purchaseId=${purchase.id}`;
    const cancelUrl = `${baseUrl}/payment-status?payment=cancel&purchaseId=${purchase.id}`;
    const expiredUrl = `${baseUrl}/payment-status?payment=expired&purchaseId=${purchase.id}`;

    // Monta os dados do checkout com configurações fixas
    const checkoutData: CreateCheckoutData = {
      billingTypes: ["PIX", "CREDIT_CARD"],
      chargeTypes: ["DETACHED", "INSTALLMENT"],
      minutesToExpire: 60, // 1 hora
      callback: {
        successUrl: this.validateCallbackUrl(successUrl),
        cancelUrl: this.validateCallbackUrl(cancelUrl),
        expiredUrl: this.validateCallbackUrl(expiredUrl),
      },
      items: [
        {
          name: deck.title,
          description: deck.description || `Deck de flashcards: ${deck.title}`,
          quantity: 1,
          value: deck.priceCents / 100, // Converte centavos para reais
        },
      ],
      installment: {
        maxInstallmentCount: 12, // Máximo de 12x no cartão
      },
    };

    // Cria o checkout na Asaas
    try {
      console.log(
        "Dados do checkout sendo enviados para Asaas:",
        JSON.stringify(checkoutData, null, 2)
      );
      const checkoutResponse = await this.apiClient.createCheckout(
        checkoutData
      );
      console.log("Resposta do checkout:", checkoutResponse);

      // Atualiza a purchase com o ID do checkout
      await prisma.purchase.update({
        where: { id: purchase.id },
        data: {
          asaasPaymentId: checkoutResponse.id, // Guarda o ID do checkout para referência
        },
      });

      // Monta a URL do checkout
      const checkoutUrl = checkoutResponse.link;

      return {
        checkoutUrl,
        checkoutId: checkoutResponse.id,
      };
    } catch (error) {
      // Remove a purchase criada se o checkout falhar
      await prisma.purchase.delete({
        where: { id: purchase.id },
      });

      console.error("Erro detalhado ao criar checkout na Asaas:", {
        error: error instanceof Error ? error.message : error,
        checkoutData,
      });
      throw error;
    }
  }

  async createCheckoutForSubscription(
    userId: string,
    options: {
      planName: string;
      description?: string;
      priceCents: number;
      cycle: "MONTHLY" | "YEARLY";
      billingTypes: Array<"CREDIT_CARD">;
      nextDueDate: string; // YYYY-MM-DD HH:mm:ss
      endDate?: string; // YYYY-MM-DD HH:mm:ss
      minutesToExpire?: number;
      successUrl: string;
      cancelUrl: string;
      expiredUrl?: string;
    }
  ): Promise<{ checkoutUrl: string; checkoutId: string }> {
    // Busca informações do usuário
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new Error("Usuário não encontrado");
    }

    // Verifica se o usuário já tem um customer na Asaas
    let asaasCustomer = await prisma.asaasCustomer.findUnique({
      where: { userId },
    });

    // Monta os dados do checkout para assinatura
    const checkoutData: CreateCheckoutData = {
      billingTypes: options.billingTypes as any[],
      chargeTypes: ["RECURRENT"],
      minutesToExpire: options.minutesToExpire || 60,
      callback: {
        successUrl: options.successUrl,
        cancelUrl: options.cancelUrl,
        expiredUrl: options.expiredUrl || options.cancelUrl,
      },
      items: [
        {
          name: options.planName,
          description: options.description || `Assinatura: ${options.planName}`,
          quantity: 1,
          value: options.priceCents / 100,
        },
      ],
      subscription: {
        cycle: options.cycle as any,
        nextDueDate: options.nextDueDate,
        endDate: options.endDate,
      },
    };

    // Se tem customer cadastrado, usa o ID, senão envia dados para pré-preenchimento
    if (asaasCustomer) {
      checkoutData.customer = asaasCustomer.asaasId;
    } else {
      checkoutData.customerData = {
        name: user.name,
        email: user.email,
      };
    }

    // Cria o checkout na Asaas
    const checkoutResponse = await this.apiClient.createCheckout(checkoutData);

    // Monta a URL do checkout
    const checkoutUrl = `https://asaas.com/checkoutSession/show?id=${checkoutResponse.id}`;

    return {
      checkoutUrl,
      checkoutId: checkoutResponse.id,
    };
  }
}
