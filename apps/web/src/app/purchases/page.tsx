"use client";

import { trpc } from "@/utils/trpc";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ShoppingCart,
  CheckCircle,
  XCircle,
  Clock,
  RefreshCw,
} from "lucide-react";
import Link from "next/link";

const statusConfig = {
  pending: {
    icon: Clock,
    label: "Pendente",
    color: "text-yellow-600",
    bgColor: "bg-yellow-50",
  },
  paid: {
    icon: CheckCircle,
    label: "Pago",
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  failed: {
    icon: XCircle,
    label: "Falhou",
    color: "text-red-600",
    bgColor: "bg-red-50",
  },
  refunded: {
    icon: RefreshCw,
    label: "Reembolsado",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  canceled: {
    icon: XCircle,
    label: "Cancelado",
    color: "text-gray-600",
    bgColor: "bg-gray-50",
  },
};

export default function Purchases() {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  const { data, isLoading } = trpc.purchases.getMine.useQuery(
    { limit: 20, offset: 0 },
    { enabled: !!session }
  );

  if (isPending) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        Carregando...
      </div>
    );
  }

  if (!session) {
    router.push("/login");
    return null;
  }

  if (isLoading) {
    return (
      <div className="container mx-auto max-w-4xl px-4 py-8">
        <div className="space-y-4">
          <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
          <div className="space-y-4">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="h-32 bg-gray-200 rounded-lg animate-pulse"
              ></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Minhas Compras</h1>
        <p className="text-gray-600">
          Histórico de todas as suas compras e status dos pagamentos.
        </p>
      </div>

      {data?.purchases.length === 0 ? (
        <div className="text-center py-12">
          <ShoppingCart className="mx-auto h-12 w-12 text-gray-400 mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Nenhuma compra ainda
          </h3>
          <p className="text-gray-500 mb-6">
            Explore o marketplace e compre flashcards para acelerar seus
            estudos.
          </p>
          <Link href="/marketplace">
            <Button>
              <ShoppingCart className="h-4 w-4 mr-2" />
              Explorar Marketplace
            </Button>
          </Link>
        </div>
      ) : (
        <div className="space-y-6">
          {data?.purchases.map((purchase) => {
            const statusInfo =
              statusConfig[purchase.status as keyof typeof statusConfig];
            const StatusIcon = statusInfo.icon;

            return (
              <Card key={purchase.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="line-clamp-1">
                        {purchase.deck.title}
                      </CardTitle>
                      <CardDescription>
                        Por {purchase.deck.user.name} • Compra #{purchase.id}
                      </CardDescription>
                    </div>
                    <div
                      className={`flex items-center gap-2 px-3 py-1 rounded-full ${statusInfo.bgColor}`}
                    >
                      <StatusIcon className={`h-4 w-4 ${statusInfo.color}`} />
                      <span
                        className={`text-sm font-medium ${statusInfo.color}`}
                      >
                        {statusInfo.label}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span>
                          <strong>Valor:</strong> R${" "}
                          {(purchase.amountCents / 100).toFixed(2)}
                        </span>
                        {purchase.paymentMethod && (
                          <span>
                            <strong>Método:</strong> {purchase.paymentMethod}
                          </span>
                        )}
                        <span>
                          <strong>Data:</strong>{" "}
                          {new Date(purchase.createdAt).toLocaleDateString(
                            "pt-BR"
                          )}
                        </span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      {purchase.status === "paid" && (
                        <Link href={`/deck/${purchase.deckId}`}>
                          <Button>Acessar Deck</Button>
                        </Link>
                      )}
                      {purchase.status === "failed" && (
                        <Button
                          variant="outline"
                          onClick={() => {
                            // TODO: Implementar reprocessamento de pagamento
                            console.log("Tentar novamente:", purchase.id);
                          }}
                        >
                          Tentar Novamente
                        </Button>
                      )}
                    </div>
                  </div>

                  {(purchase.status === "pending" ||
                    purchase.status === "failed") && (
                    <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-600">
                        {purchase.status === "pending"
                          ? "Aguardando confirmação do pagamento. Isso pode levar alguns minutos."
                          : "Falha no processamento do pagamento. Verifique os dados do cartão ou tente outro método."}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}

          {data && data.total > 20 && (
            <div className="flex justify-center">
              <Button variant="outline">Carregar mais</Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
