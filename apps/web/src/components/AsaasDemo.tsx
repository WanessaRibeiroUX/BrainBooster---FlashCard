"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { trpc } from "@/utils/trpc";
import { toast } from "sonner";

interface AsaasDemoProps {
  deckId: number;
  deckTitle: string;
  deckPrice: number; // in cents
}

export function AsaasDemo({ deckId, deckTitle, deckPrice }: AsaasDemoProps) {
  const [billingType, setBillingType] = useState<
    "BOLETO" | "PIX" | "CREDIT_CARD" | "UNDEFINED"
  >("PIX");
  const [isCreatingPayment, setIsCreatingPayment] = useState(false);

  // Mutations
  const createPaymentMutation = trpc.asaas.createPayment.useMutation({
    onSuccess: (data) => {
      toast.success("Pagamento criado com sucesso!");
      if (data.pixQrCode) {
        console.log("PIX QR Code:", data.pixQrCode);
      }
      if (data.bankSlipUrl) {
        window.open(data.bankSlipUrl, "_blank");
      }
    },
    onError: (error) => {
      toast.error(`Erro ao criar pagamento: ${error.message}`);
    },
  });

  const createSubscriptionMutation = trpc.asaas.createSubscription.useMutation({
    onSuccess: () => {
      toast.success("Assinatura criada com sucesso!");
    },
    onError: (error) => {
      toast.error(`Erro ao criar assinatura: ${error.message}`);
    },
  });

  // Queries
  const { data: payments, refetch: refetchPayments } =
    trpc.asaas.getPayments.useQuery();
  const { data: subscriptions } = trpc.asaas.getSubscriptions.useQuery();

  const handleCreatePayment = async () => {
    setIsCreatingPayment(true);

    try {
      // Primeiro cria uma compra
      const purchase = await fetch("/api/purchases", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          deckId,
          amountCents: deckPrice,
        }),
      }).then((res) => res.json());

      if (!purchase.id) {
        throw new Error("Erro ao criar compra");
      }

      // Depois cria o pagamento na Asaas
      await createPaymentMutation.mutateAsync({
        purchaseId: purchase.id,
        billingType,
        dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
          .toISOString()
          .split("T")[0], // 7 dias
        description: `Compra do deck: ${deckTitle}`,
        discount: {
          percentage: 5,
          dueDateLimitDays: 2,
        },
        fine: {
          percentage: 2,
        },
        interest: {
          percentage: 1,
        },
      });

      refetchPayments();
    } catch (error) {
      console.error("Erro:", error);
    } finally {
      setIsCreatingPayment(false);
    }
  };

  const handleCreateSubscription = async () => {
    await createSubscriptionMutation.mutateAsync({
      billingType: "BOLETO",
      value: 29.9,
      nextDueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
        .toISOString()
        .split("T")[0], // 30 dias
      cycle: "MONTHLY",
      description: "Plano Premium - Acesso ilimitado",
    });
  };

  return (
    <div className="space-y-6">
      {/* Criar Pagamento */}
      <Card>
        <CardHeader>
          <CardTitle>Criar Pagamento</CardTitle>
          <CardDescription>
            Crie um pagamento para o deck: {deckTitle} - R${" "}
            {(deckPrice / 100).toFixed(2)}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="billing-type">Tipo de Cobrança</Label>
            <select
              id="billing-type"
              value={billingType}
              onChange={(e) => setBillingType(e.target.value as any)}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            >
              <option value="PIX">PIX</option>
              <option value="BOLETO">Boleto</option>
              <option value="UNDEFINED">
                Link de Pagamento (Cliente escolhe)
              </option>
            </select>
          </div>

          <Button
            onClick={handleCreatePayment}
            disabled={isCreatingPayment}
            className="w-full"
          >
            {isCreatingPayment ? "Criando..." : "Criar Pagamento"}
          </Button>
        </CardContent>
      </Card>

      {/* Criar Assinatura */}
      <Card>
        <CardHeader>
          <CardTitle>Criar Assinatura</CardTitle>
          <CardDescription>
            Crie uma assinatura mensal de R$ 29,90
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button
            onClick={handleCreateSubscription}
            disabled={createSubscriptionMutation.isPending}
            className="w-full"
          >
            {createSubscriptionMutation.isPending
              ? "Criando..."
              : "Criar Assinatura Mensal"}
          </Button>
        </CardContent>
      </Card>

      {/* Lista de Pagamentos */}
      <Card>
        <CardHeader>
          <CardTitle>Meus Pagamentos</CardTitle>
          <CardDescription>Histórico de pagamentos</CardDescription>
        </CardHeader>
        <CardContent>
          {payments?.payments && payments.payments.length > 0 ? (
            <div className="space-y-3">
              {payments.payments.map((payment) => (
                <div key={payment.id} className="border rounded-lg p-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium">
                        R$ {payment.value.toFixed(2)}
                      </p>
                      <p className="text-sm text-gray-600">
                        {payment.description}
                      </p>
                      <p className="text-xs text-gray-500">
                        Vencimento:{" "}
                        {new Date(payment.dueDate).toLocaleDateString("pt-BR")}
                      </p>
                    </div>
                    <div className="text-right">
                      <span
                        className={`inline-block px-2 py-1 text-xs rounded ${
                          payment.status === "CONFIRMED"
                            ? "bg-green-100 text-green-800"
                            : payment.status === "PENDING"
                            ? "bg-yellow-100 text-yellow-800"
                            : payment.status === "OVERDUE"
                            ? "bg-red-100 text-red-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {payment.status}
                      </span>
                      <p className="text-xs text-gray-500 mt-1">
                        {payment.billingType}
                      </p>
                    </div>
                  </div>

                  {(payment.bankSlipUrl ||
                    payment.pixQrCode ||
                    payment.invoiceUrl) && (
                    <div className="mt-2 space-x-2">
                      {payment.bankSlipUrl && (
                        <Button size="sm" variant="outline" asChild>
                          <a
                            href={payment.bankSlipUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Ver Boleto
                          </a>
                        </Button>
                      )}
                      {payment.pixQrCode && (
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() =>
                            navigator.clipboard.writeText(payment.pixQrCode!)
                          }
                        >
                          Copiar PIX
                        </Button>
                      )}
                      {payment.invoiceUrl && (
                        <Button size="sm" variant="outline" asChild>
                          <a
                            href={payment.invoiceUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Ver Fatura
                          </a>
                        </Button>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">Nenhum pagamento encontrado</p>
          )}
        </CardContent>
      </Card>

      {/* Lista de Assinaturas */}
      <Card>
        <CardHeader>
          <CardTitle>Minhas Assinaturas</CardTitle>
          <CardDescription>Assinaturas ativas e históricas</CardDescription>
        </CardHeader>
        <CardContent>
          {subscriptions?.subscriptions &&
          subscriptions.subscriptions.length > 0 ? (
            <div className="space-y-3">
              {subscriptions.subscriptions.map((subscription) => (
                <div key={subscription.id} className="border rounded-lg p-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium">{subscription.planName}</p>
                      <p className="text-sm text-gray-600">
                        R$ {subscription.value.toFixed(2)} /{" "}
                        {subscription.cycle?.toLowerCase()}
                      </p>
                      <p className="text-xs text-gray-500">
                        Próximo vencimento:{" "}
                        {subscription.nextDueDate
                          ? new Date(
                              subscription.nextDueDate
                            ).toLocaleDateString("pt-BR")
                          : "N/A"}
                      </p>
                    </div>
                    <div className="text-right">
                      <span
                        className={`inline-block px-2 py-1 text-xs rounded ${
                          subscription.status === "active"
                            ? "bg-green-100 text-green-800"
                            : subscription.status === "canceled"
                            ? "bg-red-100 text-red-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {subscription.status.toUpperCase()}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">Nenhuma assinatura encontrada</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
