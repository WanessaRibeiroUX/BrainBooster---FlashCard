"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { queryClient, trpc } from "@/utils/trpc";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Loader from "@/components/loader";
import {
  Edit2,
  Trash2,
  Plus,
  ArrowLeft,
  Eye,
  EyeOff,
  CreditCard,
  Users,
  Heart,
  Layers,
  Settings,
  PlayCircle,
  BookOpen,
  DollarSign,
  Download,
  Loader2,
} from "lucide-react";
import Link from "next/link";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { ConfirmDialog } from "@/components/confirm-dialog";

export default function AdminDecks() {
  const router = useRouter();
  const { data: session } = authClient.useSession();
  const queryClient = useQueryClient();
  const [search, setSearch] = useState("");
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [deletingDeckId, setDeletingDeckId] = useState<number | null>(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

  // Verificar se é admin
  const { data: adminCheck, isLoading: adminCheckLoading } =
    trpc.admin.isAdmin.useQuery();

  // Buscar decks
  const {
    data: decksData,
    isLoading: decksLoading,
    refetch: refetchDecks,
  } = trpc.admin.getAllDecks.useQuery(
    { search, limit: 20, offset: 0 },
    { enabled: !!adminCheck?.isAdmin }
  );

  const deleteDeckMutation = trpc.admin.deleteDeck.useMutation({
    onSuccess: () => {
      toast.success("Deck deletado com sucesso!");
      refetchDecks();
      setDeletingDeckId(null);
      setDeleteDialogOpen(false);
    },
    onError: (error) => {
      const message = (error as any)?.message ?? "Erro ao deletar deck";
      toast.error(message);
      setDeletingDeckId(null);
      setDeleteDialogOpen(false);
    },
  });

  const handleDeleteDeck = (deckId: number) => {
    setDeletingDeckId(deckId);
    setDeleteDialogOpen(true);
  };

  const confirmDeleteDeck = () => {
    if (deletingDeckId) {
      deleteDeckMutation.mutate({ id: deletingDeckId });
    }
  };

  useEffect(() => {
    if (!session && session !== null) {
      router.push("/login");
      return;
    }

    if (!adminCheckLoading && adminCheck && !adminCheck.isAdmin) {
      router.push("/dashboard");
      return;
    }

    if (session !== undefined && !adminCheckLoading) {
      setIsLoading(false);
    }
  }, [session, adminCheck, adminCheckLoading, router]);

  if (isLoading || adminCheckLoading || decksLoading) {
    return <Loader />;
  }

  if (!adminCheck?.isAdmin) {
    return null;
  }

  return (
    <div className="container mx-auto py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <Link
            href="/admin"
            className="flex items-center text-sm text-muted-foreground mb-2"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar ao Painel
          </Link>
          <h1 className="text-3xl font-bold">Gerenciar Decks</h1>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={() => router.push("/admin/decks/import-anki")}
          >
            <Download className="mr-2 h-4 w-4" />
            Importar do Anki
          </Button>
          <Button onClick={() => setShowCreateForm(true)}>
            <Plus className="mr-2 h-4 w-4" />
            Criar Deck
          </Button>
        </div>
      </div>

      {/* Filtros */}
      <Card className="mb-6">
        <CardContent className="pt-6">
          <div className="flex gap-4">
            <Input
              placeholder="Pesquisar decks..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="max-w-sm"
            />
          </div>
        </CardContent>
      </Card>

      {/* Lista de decks */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {decksData?.decks.map((deck) => (
          <Card
            key={deck.id}
            className="group hover:shadow-lg transition-all duration-200 border-2 hover:border-primary/20"
          >
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <CardTitle className="text-lg line-clamp-1 max-w-[200px] truncate">
                      {deck.title}
                    </CardTitle>
                    {deck.isPublic ? (
                      <div className="flex gap-1 items-center justify-center text-green-600">
                        <Eye className="h-4 w-4 " />
                        <span className="text-sm ">Público</span>
                      </div>
                    ) : (
                      <div className="flex gap-1 items-center justify-center text-gray-500">
                        <EyeOff className="h-4 w-4 " />
                        <span className="text-sm ">Privado</span>
                      </div>
                    )}
                  </div>
                  {deck.priceCents > 0 && (
                    <div className="flex items-center gap-1 text-emerald-600 font-medium">
                      <span>R$ {(deck.priceCents / 100).toFixed(2)}</span>
                    </div>
                  )}
                </div>
                <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Link href={`/admin/decks/${deck.id}`}>
                    <Settings className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </CardHeader>

            <CardContent className="pt-0">
              {deck.description && (
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {deck.description}
                </p>
              )}

              <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                <span className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  {deck.user.name}
                </span>
              </div>

              {/* Estatísticas do deck */}
              <div className="grid grid-cols-3 gap-2 mb-4">
                <div className="text-center p-2 bg-blue-50 dark:bg-blue-950/30 rounded-lg">
                  <div className="flex items-center justify-center mb-1">
                    <Layers className="h-4 w-4 text-blue-600" />
                  </div>
                  <div className="text-xs text-muted-foreground">Cards</div>
                  <div className="text-sm font-semibold">
                    {deck._count.flashcards}
                  </div>
                </div>
                <div className="text-center p-2 bg-green-50 dark:bg-green-950/30 rounded-lg">
                  <div className="flex items-center justify-center mb-1">
                    <CreditCard className="h-4 w-4 text-green-600" />
                  </div>
                  <div className="text-xs text-muted-foreground">Vendas</div>
                  <div className="text-sm font-semibold">
                    {deck._count.purchases}
                  </div>
                </div>
                <div className="text-center p-2 bg-red-50 dark:bg-red-950/30 rounded-lg">
                  <div className="flex items-center justify-center mb-1">
                    <Heart className="h-4 w-4 text-red-600" />
                  </div>
                  <div className="text-xs text-muted-foreground">Likes</div>
                  <div className="text-sm font-semibold">
                    {deck._count.favorites}
                  </div>
                </div>
              </div>

              {/* Ações do deck */}
              <div className="flex gap-2">
                <Link href={`/admin/decks/${deck.id}`} className="flex-1">
                  <Button variant="default" size="sm" className="w-full">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Gerenciar Cards
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    // TODO: Implementar preview do deck
                    toast.info("Preview em desenvolvimento");
                  }}
                >
                  <PlayCircle className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleDeleteDeck(deck.id)}
                  disabled={deletingDeckId === deck.id}
                  className="text-red-600 hover:text-red-700 hover:bg-red-50"
                >
                  {deletingDeckId === deck.id ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Trash2 className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Estado vazio */}
      {decksData?.decks.length === 0 && (
        <div className="text-center py-12">
          <BookOpen className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
          <h3 className="text-lg font-semibold mb-2">Nenhum deck encontrado</h3>
          <p className="text-muted-foreground mb-4">
            {search
              ? "Tente ajustar os filtros de pesquisa"
              : "Comece criando seu primeiro deck"}
          </p>
          {!search && (
            <Button onClick={() => setShowCreateForm(true)}>
              <Plus className="mr-2 h-4 w-4" />
              Criar Primeiro Deck
            </Button>
          )}
        </div>
      )}

      {/* Form de criação */}
      {showCreateForm && (
        <CreateDeckForm
          onClose={() => setShowCreateForm(false)}
          onSuccess={() => {
            setShowCreateForm(false);
          }}
          refetchDecks={refetchDecks}
        />
      )}

      <ConfirmDialog
        open={deleteDialogOpen}
        onOpenChange={setDeleteDialogOpen}
        title="Deletar Deck"
        description="Tem certeza que deseja deletar este deck? Esta ação não pode ser desfeita e todos os flashcards associados serão perdidos."
        onConfirm={confirmDeleteDeck}
        isLoading={deleteDeckMutation.isPending}
      />
    </div>
  );
}

function CreateDeckForm({
  onClose,
  onSuccess,
  refetchDecks,
}: {
  onClose: () => void;
  onSuccess: () => void;
  refetchDecks: () => Promise<any>;
}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [isPublic, setIsPublic] = useState(true);
  const router = useRouter();

  const createDeckMutation = trpc.admin.createDeck.useMutation({
    onMutate: async (variables) => {
      // Cancela queries pendentes para evitar conflitos
      await queryClient.cancelQueries({
        queryKey: ["admin", "getAllDecks"],
      });

      // Toast de feedback imediato
      toast.loading("Criando deck...", { id: "create-deck" });
    },
    onSuccess: async (newDeck) => {
      // Remove o loading toast e mostra sucesso
      toast.dismiss("create-deck");
      toast.success("Deck criado com sucesso!");

      // Atualiza a lista imediatamente
      await refetchDecks();
      onSuccess();
    },
    onError: (error) => {
      // Remove o loading toast e mostra erro
      toast.dismiss("create-deck");
      const message = (error as any)?.message ?? "Erro ao criar deck";
      toast.error(message);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim()) {
      toast.error("Título é obrigatório");
      return;
    }

    const priceCents = price ? Math.round(parseFloat(price) * 100) : 0;

    createDeckMutation.mutate({
      title,
      description: description || undefined,
      priceCents,
      isPublic,
    });
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-md mx-4 shadow-2xl">
        <CardHeader className="text-center pb-2">
          <CardTitle className="text-2xl flex items-center justify-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            Criar Novo Deck
          </CardTitle>
          <p className="text-sm text-muted-foreground mt-1">
            Crie um deck de flashcards para o marketplace
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                Título *
              </label>
              <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Ex: Inglês Básico, Matemática..."
                className="transition-all focus:ring-2"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Descrição</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Descreva o conteúdo do seu deck..."
                className="w-full px-3 py-2 text-sm border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <DollarSign className="h-4 w-4" />
                Preço (R$)
              </label>
              <Input
                type="number"
                step="0.01"
                min="0"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="0.00 (gratuito)"
                className="transition-all focus:ring-2"
              />
              <p className="text-xs text-muted-foreground">
                Deixe vazio ou 0 para criar um deck gratuito
              </p>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-muted/30 rounded-lg">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="isPublic"
                  checked={isPublic}
                  onChange={(e) => setIsPublic(e.target.checked)}
                  className="w-4 h-4"
                />
                <label
                  htmlFor="isPublic"
                  className="text-sm font-medium cursor-pointer"
                >
                  Publicar no marketplace
                </label>
              </div>
              {isPublic ? (
                <Eye className="h-4 w-4 text-green-600 mt-0.5" />
              ) : (
                <EyeOff className="h-4 w-4 text-gray-500 mt-0.5" />
              )}
            </div>

            <div className="flex gap-3 pt-2">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="flex-1"
                disabled={createDeckMutation.isPending}
              >
                Cancelar
              </Button>
              <Button
                type="submit"
                disabled={createDeckMutation.isPending}
                className="flex-1"
              >
                {createDeckMutation.isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Criando...
                  </>
                ) : (
                  <>
                    <Plus className="mr-2 h-4 w-4" />
                    Criar Deck
                  </>
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
