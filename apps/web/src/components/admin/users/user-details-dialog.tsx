"use client";

import React from "react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Calendar,
  Mail,
  Shield,
  ShieldOff,
  BookOpen,
  CreditCard,
  Heart,
  Clock,
  User,
  CheckCircle,
  XCircle,
  Activity,
} from "lucide-react";
import { trpc } from "@/utils/trpc";

interface UserDetailsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  userId: string | null;
}

export function UserDetailsDialog({
  open,
  onOpenChange,
  userId,
}: UserDetailsDialogProps) {
  const { data: user, isLoading } = trpc.admin.getUser.useQuery(
    { userId: userId! },
    { enabled: !!userId && open }
  );

  const { data: userStats, isLoading: statsLoading } =
    trpc.admin.getUserStats.useQuery(
      { userId: userId! },
      { enabled: !!userId && open }
    );

  if (!userId) return null;

  const formatCurrency = (cents: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(cents / 100);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Detalhes do Usuário</DialogTitle>
        </DialogHeader>

        {isLoading ? (
          <div className="flex items-center justify-center p-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
          </div>
        ) : user ? (
          <div className="space-y-6">
            {/* Informações Básicas */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Informações Pessoais
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                  {user.image && (
                    <div className="h-16 w-16 rounded-full overflow-hidden bg-muted">
                      <img
                        src={user.image}
                        alt={user.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  )}
                  <div>
                    <h3 className="text-xl font-semibold">{user.name}</h3>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Mail className="h-4 w-4" />
                      {user.email}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      Tipo de Usuário
                    </label>
                    <Badge
                      variant={user.role === "admin" ? "default" : "secondary"}
                      className="flex items-center gap-1 w-fit"
                    >
                      {user.role === "admin" ? (
                        <Shield className="h-3 w-3" />
                      ) : (
                        <ShieldOff className="h-3 w-3" />
                      )}
                      {user.role === "admin" ? "Administrador" : "Usuário"}
                    </Badge>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      Email Verificado
                    </label>
                    <div className="flex items-center gap-2">
                      {user.emailVerified ? (
                        <>
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-green-600">Verificado</span>
                        </>
                      ) : (
                        <>
                          <XCircle className="h-4 w-4 text-red-500" />
                          <span className="text-red-600">Não verificado</span>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      Data de Cadastro
                    </label>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4" />
                      {format(
                        new Date(user.createdAt),
                        "dd/MM/yyyy 'às' HH:mm",
                        {
                          locale: ptBR,
                        }
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      Última Atualização
                    </label>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4" />
                      {format(
                        new Date(user.updatedAt),
                        "dd/MM/yyyy 'às' HH:mm",
                        {
                          locale: ptBR,
                        }
                      )}
                    </div>
                  </div>
                </div>

                {user.asaasCustomerId && (
                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      ID Cliente Asaas
                    </label>
                    <code className="text-sm bg-muted px-2 py-1 rounded">
                      {user.asaasCustomerId}
                    </code>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Estatísticas */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Activity className="h-5 w-5" />
                  Estatísticas de Atividade
                </CardTitle>
              </CardHeader>
              <CardContent>
                {statsLoading ? (
                  <div className="flex items-center justify-center p-4">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-gray-900"></div>
                  </div>
                ) : userStats ? (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center p-4 border rounded-lg">
                      <BookOpen className="h-6 w-6 mx-auto mb-2 text-blue-500" />
                      <div className="text-2xl font-bold">
                        {userStats.totalDecks}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Decks Criados
                      </div>
                    </div>

                    <div className="text-center p-4 border rounded-lg">
                      <CreditCard className="h-6 w-6 mx-auto mb-2 text-green-500" />
                      <div className="text-2xl font-bold">
                        {userStats.totalPurchases}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Compras
                      </div>
                    </div>

                    <div className="text-center p-4 border rounded-lg">
                      <Heart className="h-6 w-6 mx-auto mb-2 text-red-500" />
                      <div className="text-2xl font-bold">
                        {userStats.totalFavorites}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Favoritos
                      </div>
                    </div>

                    <div className="text-center p-4 border rounded-lg">
                      <Activity className="h-6 w-6 mx-auto mb-2 text-purple-500" />
                      <div className="text-2xl font-bold">
                        {userStats.activeSessions}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Sessões Ativas
                      </div>
                    </div>

                    <div className="col-span-2 md:col-span-4 text-center p-4 border rounded-lg bg-muted/50">
                      <div className="text-xl font-bold text-green-600">
                        {formatCurrency(userStats.totalSpent)}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Total Gasto
                      </div>
                    </div>
                  </div>
                ) : null}
              </CardContent>
            </Card>

            {/* Contagem de Registros */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Registros do Sistema</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex justify-between">
                    <span>Decks:</span>
                    <span className="font-medium">{user._count.decks}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Compras:</span>
                    <span className="font-medium">{user._count.purchases}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Favoritos:</span>
                    <span className="font-medium">{user._count.favorites}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sessões:</span>
                    <span className="font-medium">{user._count.sessions}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Contas Vinculadas:</span>
                    <span className="font-medium">{user._count.accounts}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Dados do Asaas (se existir) */}
            {user.asaasCustomer && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    Dados de Pagamento (Asaas)
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex justify-between">
                      <span>Nome:</span>
                      <span className="font-medium">
                        {user.asaasCustomer.name}
                      </span>
                    </div>
                    {user.asaasCustomer.cpfCnpj && (
                      <div className="flex justify-between">
                        <span>CPF/CNPJ:</span>
                        <span className="font-medium">
                          {user.asaasCustomer.cpfCnpj}
                        </span>
                      </div>
                    )}
                    {user.asaasCustomer.phone && (
                      <div className="flex justify-between">
                        <span>Telefone:</span>
                        <span className="font-medium">
                          {user.asaasCustomer.phone}
                        </span>
                      </div>
                    )}
                    {user.asaasCustomer.mobilePhone && (
                      <div className="flex justify-between">
                        <span>Celular:</span>
                        <span className="font-medium">
                          {user.asaasCustomer.mobilePhone}
                        </span>
                      </div>
                    )}
                    {user.asaasCustomer.address && (
                      <div className="col-span-2 flex justify-between">
                        <span>Endereço:</span>
                        <span className="font-medium">
                          {user.asaasCustomer.address}
                        </span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Compras Recentes */}
            {userStats?.recentPurchases &&
              userStats.recentPurchases.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Compras Recentes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {userStats.recentPurchases.map((purchase) => (
                        <div
                          key={purchase.id}
                          className="flex items-center justify-between p-3 border rounded-lg"
                        >
                          <div>
                            <div className="font-medium">
                              {purchase.deck.title}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {format(
                                new Date(purchase.createdAt),
                                "dd/MM/yyyy",
                                {
                                  locale: ptBR,
                                }
                              )}
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-medium">
                              {formatCurrency(purchase.amountCents)}
                            </div>
                            <Badge
                              variant={
                                purchase.status === "paid"
                                  ? "default"
                                  : "secondary"
                              }
                            >
                              {purchase.status === "paid" ? "Pago" : "Pendente"}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
          </div>
        ) : (
          <div className="text-center p-8">
            <p className="text-muted-foreground">Usuário não encontrado.</p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
