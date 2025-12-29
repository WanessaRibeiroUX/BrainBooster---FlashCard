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
import { Heart, User, BookOpen, HeartOff } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";
import { useState } from "react";
import { ConfirmDialog } from "@/components/confirm-dialog";

export default function Favorites() {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const [removeDialogOpen, setRemoveDialogOpen] = useState(false);
  const [deckToRemove, setDeckToRemove] = useState<number | null>(null);

  const { data, isLoading, refetch } = trpc.favorites.getMine.useQuery(
    { limit: 20, offset: 0 },
    { enabled: !!session }
  );

  const removeFavoriteMutation = trpc.favorites.remove.useMutation({
    onSuccess: () => {
      toast.success("Removido dos favoritos!");
      refetch();
      setRemoveDialogOpen(false);
      setDeckToRemove(null);
    },
    onError: (error) => {
      toast.error("Erro ao remover dos favoritos: " + error.message);
      setRemoveDialogOpen(false);
      setDeckToRemove(null);
    },
  });

  const handleRemoveFavorite = (deckId: number) => {
    setDeckToRemove(deckId);
    setRemoveDialogOpen(true);
  };

  const confirmRemoveFavorite = () => {
    if (deckToRemove) {
      removeFavoriteMutation.mutate({ deckId: deckToRemove });
    }
  };

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
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Meus Favoritos</h1>
        <p className="text-gray-600">
          Flashcards que você marcou como favoritos para estudar depois.
        </p>
      </div>

      {data?.favorites.length === 0 ? (
        <div className="text-center py-12">
          <Heart className="mx-auto h-12 w-12 text-gray-400 mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Nenhum favorito ainda
          </h3>
          <p className="text-gray-500 mb-6">
            Explore o marketplace e marque os decks que mais gostar como
            favoritos.
          </p>
          <Link href="/marketplace">
            <Button>
              <BookOpen className="h-4 w-4 mr-2" />
              Explorar Marketplace
            </Button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data?.favorites.map((favorite) => (
            <Card
              key={favorite.id}
              className="hover:shadow-md transition-shadow"
            >
              <CardHeader>
                {favorite.deck.coverUrl && (
                  <div className="w-full h-32 bg-gray-100 rounded-md mb-3 overflow-hidden">
                    <img
                      src={favorite.deck.coverUrl}
                      alt={favorite.deck.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <CardTitle className="line-clamp-2">
                  {favorite.deck.title}
                </CardTitle>
                <CardDescription className="line-clamp-3">
                  {favorite.deck.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {favorite.deck.user.name}
                    </div>
                    <div className="flex items-center gap-1">
                      <BookOpen className="h-4 w-4" />
                      {favorite.deck._count.flashcards} cards
                    </div>
                  </div>

                  <div className="font-semibold text-lg">
                    {favorite.deck.priceCents === 0 ? (
                      <span className="text-green-600">Grátis</span>
                    ) : (
                      <span>
                        R$ {(favorite.deck.priceCents / 100).toFixed(2)}
                      </span>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <Link href={`/deck/${favorite.deckId}`} className="flex-1">
                      <Button className="w-full">Ver Deck</Button>
                    </Link>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleRemoveFavorite(favorite.deckId)}
                      disabled={removeFavoriteMutation.isPending}
                    >
                      <HeartOff className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {data && data.total > 20 && (
        <div className="mt-8 flex justify-center">
          <Button variant="outline">Carregar mais</Button>
        </div>
      )}

      <ConfirmDialog
        open={removeDialogOpen}
        onOpenChange={setRemoveDialogOpen}
        title="Remover dos Favoritos"
        description="Tem certeza que deseja remover este deck dos seus favoritos?"
        onConfirm={confirmRemoveFavorite}
        isLoading={removeFavoriteMutation.isPending}
        confirmText="Remover"
      />
    </div>
  );
}
