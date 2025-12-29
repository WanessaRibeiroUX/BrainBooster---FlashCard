"use client";

import { trpc } from "@/utils/trpc";
import { authClient } from "@/lib/auth-client";
import { useEffect, useState } from "react";
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
  Trash2,
  BookOpen,
  ShoppingBag,
  Plus,
  Crown,
  ShoppingCart,
} from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import Loader from "@/components/loader";
import { ConfirmDialog } from "@/components/confirm-dialog";

function EmptyState({
  icon: Icon,
  title,
  description,
  ctaLabel,
  href,
  onClick,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  ctaLabel: string;
  href?: string;
  onClick?: () => void;
}) {
  return (
    <div className="text-center py-12">
      <div className="p-4 bg-muted/20 rounded-full w-fit mx-auto mb-4">
        <Icon className="mx-auto h-8 w-8 text-muted-foreground" aria-hidden />
      </div>
      <h3 className="font-medium text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground mb-6 max-w-sm mx-auto">
        {description}
      </p>
      {onClick ? (
        <Button onClick={onClick} className="bg-primary hover:bg-primary/90">
          {ctaLabel}
        </Button>
      ) : (
        href && (
          <Button asChild className="bg-primary hover:bg-primary/90">
            <Link href={href}>{ctaLabel}</Link>
          </Button>
        )
      )}
    </div>
  );
}

export default function MyDecks() {
  const router = useRouter();
  const { data: session } = authClient.useSession();
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [deckToDelete, setDeckToDelete] = useState<number | null>(null);

  const { data: myDecks, isLoading: decksLoading } =
    trpc.decks.getMine.useQuery(
      { limit: 5, offset: 0 },
      { enabled: !!session }
    );

  const { data, isLoading, refetch } = trpc.decks.getMine.useQuery(
    {},
    {
      enabled: !!session,
    }
  );

  const deleteDeckMutation = trpc.decks.delete.useMutation({
    onSuccess: () => {
      toast.success("Deck deletado com sucesso!");
      refetch();
      setDeleteDialogOpen(false);
      setDeckToDelete(null);
    },
    onError: (error) => {
      toast.error("Erro ao deletar deck: " + error.message);
      setDeleteDialogOpen(false);
      setDeckToDelete(null);
    },
  });

  const handleDeleteDeck = (deckId: number) => {
    setDeckToDelete(deckId);
    setDeleteDialogOpen(true);
  };

  const confirmDeleteDeck = () => {
    if (deckToDelete) {
      deleteDeckMutation.mutate({ id: deckToDelete });
    }
  };

  useEffect(() => {
    if (!session && session !== null) {
      router.push("/login");
    }
  }, [session, router]);

  if (!session) {
    return null;
  }

  if (isLoading) {
    return (
      <div className="container mx-auto max-w-6xl px-4 py-8">
        <div className="space-y-4">
          <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="h-64 bg-gray-200 rounded-lg animate-pulse"
              ></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-6xl px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Meus Flashcards</h1>
          <p className="text-gray-600">Seus decks criados e comprados.</p>
        </div>
        <Button
          className="bg-primary hover:bg-primary/90"
          onClick={() => setShowCreateForm(true)}
        >
          <Plus className="h-4 w-4 mr-2" />
          Criar Novo Deck
        </Button>
      </div>
      {(data?.decks?.length ?? 0) === 0 ? (
        <section>
          <Card className="border-0 bg-card/30 backdrop-blur-sm">
            <CardContent>
              {decksLoading ? (
                <div className="space-y-3">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="h-16 rounded-lg bg-muted/20 animate-pulse"
                    />
                  ))}
                </div>
              ) : (
                <div className="space-y-3">
                  {myDecks!.decks.slice(0, 3).map((deck) => (
                    <div
                      key={deck.id}
                      className="flex items-center justify-between p-4 bg-muted/20 rounded-lg hover:bg-muted/30 transition-colors duration-200"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <h4 className="font-medium text-foreground line-clamp-1">
                            {deck.title}
                          </h4>
                          {(deck as any).isOwned ? (
                            <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-700">
                              <Crown className="h-3 w-3" />
                              Criado
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs bg-green-100 text-green-700">
                              <ShoppingCart className="h-3 w-3" />
                              Comprado
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {deck._count.flashcards} flashcards •{" "}
                          {deck.isPublic ? "Público" : "Privado"}
                        </p>
                      </div>
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="hover:bg-primary/5 bg-transparent"
                      >
                        <Link href={`/deck/${deck.id}/edit`}>
                          {(deck as any).isOwned ? "Editar" : "Visualizar"}
                        </Link>
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <EmptyState
              icon={BookOpen}
              title="Nenhum deck encontrado"
              description="Comece criando seu primeiro deck de flashcards ou explore o marketplace para comprar decks existentes"
              ctaLabel="Criar Primeiro Deck"
              onClick={() => setShowCreateForm(true)}
            />
            <EmptyState
              icon={ShoppingBag}
              title="Adquira um deck no Marketplace"
              description="Explore decks de flashcards criados por outros usuários."
              ctaLabel="Explorar Marketplace"
              href="/marketplace"
            />
          </div>
        </section>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(data?.decks ?? []).map((deck) => {
            const cardHeight = deck.coverUrl ? "h-88" : "h-56";
            return (
              <Card
                key={deck.id}
                className={`hover:shadow-md transition-shadow ${cardHeight}`}
              >
                <CardHeader>
                  {deck.coverUrl && (
                    <div className="w-full h-28 bg-gray-100 rounded-md mb-3 overflow-hidden">
                      <img
                        src={deck.coverUrl}
                        alt={deck.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <CardTitle className="line-clamp-2 flex items-center gap-2">
                    {deck.title}
                    {(deck as any).isOwned ? (
                      <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-700">
                        <Crown className="h-3 w-3" />
                        Criado
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs bg-green-100 text-green-700">
                        <ShoppingCart className="h-3 w-3" />
                        Comprado
                      </span>
                    )}
                  </CardTitle>
                  <CardDescription className="line-clamp-3">
                    {deck.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <BookOpen className="h-4 w-4" />
                        {deck._count.flashcards} cards
                      </div>
                      <div>
                        {deck.isPublic ? (
                          <span className="text-green-600">Público</span>
                        ) : (
                          <span className="text-gray-500">Privado</span>
                        )}
                      </div>
                    </div>

                    <div className="font-semibold text-lg">
                      {deck.priceCents === 0 ? (
                        <span className="text-green-600">Grátis</span>
                      ) : (
                        <span>R$ {(deck.priceCents / 100).toFixed(2)}</span>
                      )}
                    </div>

                    <div className="flex gap-2">
                      <Link href={`/deck/${deck.id}`} className="flex-1">
                        <Button variant="outline" className="w-full">
                          Visualizar
                        </Button>
                      </Link>
                      {(deck as any).isOwned &&
                        session?.user?.id === deck.userId && (
                          <Button
                            variant="destructive"
                            size="sm"
                            onClick={() => handleDeleteDeck(deck.id)}
                            disabled={deleteDeckMutation.isPending}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}
      {showCreateForm && (
        <CreateDeckForm
          onClose={() => setShowCreateForm(false)}
          onSuccess={() => {
            setShowCreateForm(false);
            refetch();
          }}
        />
      )}
      <ConfirmDialog
        open={deleteDialogOpen}
        onOpenChange={setDeleteDialogOpen}
        title="Deletar Deck"
        description="Tem certeza que deseja deletar este deck? Esta ação não pode ser desfeita e todos os flashcards associados serão perdidos."
        onConfirm={confirmDeleteDeck}
        isLoading={deleteDeckMutation.isPending}
      />{" "}
    </div>
  );
}

function CreateDeckForm({
  onClose,
  onSuccess,
}: {
  onClose: () => void;
  onSuccess: () => void;
}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();

  const createDeckMutation = trpc.decks.create.useMutation({
    onSuccess: () => {
      toast.success("Deck criado com sucesso!");
      onSuccess();
      router.refresh();
    },
    onError: (error) => {
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

    createDeckMutation.mutate({
      title,
      description: description || undefined,
      priceCents: 0,
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
            Crie um deck de flashcards privado para seus estudos
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

            <div className="flex items-center gap-2 p-4 bg-muted/30 rounded-lg">
              <span className="text-sm text-muted-foreground">
                Deck privado (apenas você pode ver)
              </span>
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
                    <Loader className="mr-2 h-4 w-4" />
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
