"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, Clock, AlertCircle } from "lucide-react";
import { toast } from "sonner";
import Link from "next/link";

function PaymentStatusContent() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<string | null>(null);

  useEffect(() => {
    const paymentStatus = searchParams.get("payment");
    setStatus(paymentStatus);

    if (paymentStatus === "success") {
      toast.success(
        "Pagamento realizado com sucesso! Você já pode acessar o deck."
      );
    } else if (paymentStatus === "cancel") {
      toast.info("Pagamento cancelado.");
    } else if (paymentStatus === "expired") {
      toast.error("Link de pagamento expirado.");
    }
  }, [searchParams]);

  const getStatusInfo = () => {
    switch (status) {
      case "success":
        return {
          icon: <CheckCircle className="h-16 w-16 text-green-500" />,
          title: "Pagamento Confirmado!",
          description:
            "Seu pagamento foi processado com sucesso. Você já pode acessar todo o conteúdo do deck.",
          color: "text-green-600",
          bgColor: "bg-green-50",
        };
      case "cancel":
        return {
          icon: <XCircle className="h-16 w-16 text-red-500" />,
          title: "Pagamento Cancelado",
          description:
            "O pagamento foi cancelado. Você pode tentar novamente a qualquer momento.",
          color: "text-red-600",
          bgColor: "bg-red-50",
        };
      case "expired":
        return {
          icon: <Clock className="h-16 w-16 text-amber-500" />,
          title: "Link Expirado",
          description:
            "O link de pagamento expirou. Gere um novo link para continuar com a compra.",
          color: "text-amber-600",
          bgColor: "bg-amber-50",
        };
      default:
        return {
          icon: <AlertCircle className="h-16 w-16 text-gray-500" />,
          title: "Status do Pagamento",
          description: "Verificando status do pagamento...",
          color: "text-gray-600",
          bgColor: "bg-gray-50",
        };
    }
  };

  const statusInfo = getStatusInfo();

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <Card className={`${statusInfo.bgColor} border-2`}>
          <CardHeader className="text-center pb-4">
            <div className="flex justify-center mb-4">{statusInfo.icon}</div>
            <CardTitle className={`text-2xl ${statusInfo.color}`}>
              {statusInfo.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            <p className="text-lg text-gray-700">{statusInfo.description}</p>

            {status === "success" && (
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg border">
                  <h3 className="font-semibold text-green-600 mb-2">
                    ✅ Próximos passos:
                  </h3>
                  <ul className="text-sm text-gray-600 space-y-1 text-left">
                    <li>• Acesse o deck através do menu "Meus Decks"</li>
                    <li>• Comece a estudar com os flashcards</li>
                    <li>• Acompanhe seu progresso nos estudos</li>
                  </ul>
                </div>
                <Button asChild className="w-full">
                  <Link href="/my-decks">Acessar Meus Decks</Link>
                </Button>
              </div>
            )}

            {(status === "cancel" || status === "expired") && (
              <div className="space-y-4">
                <Button asChild variant="default" className="w-full">
                  <Link href="/marketplace">Voltar ao Marketplace</Link>
                </Button>
              </div>
            )}

            <div className="flex justify-center gap-4">
              <Button variant="outline" asChild>
                <Link href="/">Página Inicial</Link>
              </Button>

              {status !== "success" && (
                <Button variant="outline" asChild>
                  <Link href="/marketplace">Marketplace</Link>
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Informações sobre os métodos de pagamento */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="p-4 text-center">
            <div className="text-green-600 font-semibold mb-2">PIX</div>
            <p className="text-sm text-gray-600">
              Confirmação imediata após o pagamento
            </p>
          </Card>

          <Card className="p-4 text-center">
            <div className="text-blue-600 font-semibold mb-2">
              Cartão de Crédito
            </div>
            <p className="text-sm text-gray-600">
              Aprovação em poucos segundos
            </p>
          </Card>

          <Card className="p-4 text-center">
            <div className="text-amber-600 font-semibold mb-2">Boleto</div>
            <p className="text-sm text-gray-600">
              Confirmação em até 3 dias úteis
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}

function PaymentStatusFallback() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <Card className="bg-gray-50 border-2">
          <CardHeader className="text-center pb-4">
            <div className="flex justify-center mb-4">
              <Clock className="h-16 w-16 text-gray-500 animate-spin" />
            </div>
            <CardTitle className="text-2xl text-gray-600">
              Carregando status do pagamento...
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-lg text-gray-700">
              Aguarde um momento enquanto verificamos o status do seu pagamento.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default function PaymentStatusPage() {
  return (
    <Suspense fallback={<PaymentStatusFallback />}>
      <PaymentStatusContent />
    </Suspense>
  );
}
