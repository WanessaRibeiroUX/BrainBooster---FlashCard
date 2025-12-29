"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, User, BookOpen, CheckCircle } from "lucide-react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { trpc } from "@/utils/trpc";
import { toast } from "sonner";
import {
  getStaggerDelay,
  fadeInUp,
  hoverLift,
  scaleIn,
} from "@/lib/animations";

export default function Marketplace() {
  const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState("");

  const { data: session } = authClient.useSession();
  const router = useRouter();

  const { data, isLoading, refetch } = trpc.decks.getPublic.useQuery({
    limit: 20,
    offset: 0,
    search: search || undefined,
  });

  // Verificar quais decks já foram comprados pelo usuário (se logado)
  const purchaseQueries = trpc.useQueries((t) =>
    session && data?.decks
      ? data.decks
          .filter((deck) => deck.priceCents > 0) // Só verificar decks pagos
          .map((deck) =>
            t.asaas.hasUserPurchasedDeck(
              { deckId: deck.id },
              {
                enabled: !!session,
              }
            )
          )
      : []
  );

  const createCheckoutMutation = trpc.asaas.createCheckoutForDeck.useMutation({
    onSuccess: (result) => {
      // Redireciona diretamente para o checkout da Asaas
      window.location.href = result.checkoutUrl;
    },
    onError: (error) => {
      toast.error("Erro ao criar checkout", {
        description: error.message,
      });
    },
  });

  const handleSearch = () => {
    setSearch(searchInput);
    refetch();
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handlePurchase = async (deckId: number) => {
    if (!session) {
      router.push("/login");
      return;
    }

    // Cria checkout e redireciona
    createCheckoutMutation.mutate({ deckId });
  };

  // Função para verificar se um deck foi comprado
  const isDeckPurchased = (deckId: number) => {
    if (!session || !data?.decks) return false;

    const deckIndex = data.decks
      .filter((deck) => deck.priceCents > 0)
      .findIndex((deck) => deck.id === deckId);

    if (deckIndex === -1) return false;

    const purchaseQuery = purchaseQueries[deckIndex];
    return purchaseQuery?.data?.hasPurchased || false;
  };

  if (isLoading) {
    return (
      <div className="container mx-auto max-w-6xl px-4 py-8">
        <div className="space-y-4">
          <div
            className={`h-8 bg-gray-200 rounded ${fadeInUp} animate-pulse`}
          ></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className={`h-64 bg-gray-200 rounded-lg animate-pulse ${scaleIn}`}
                style={getStaggerDelay(i, 100)}
              ></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-6xl px-4 py-8">
      <div className={`mb-8 ${fadeInUp} animate-duration-600`}>
        <h1 className="text-3xl font-bold mb-4">Marketplace de Flashcards</h1>
        <p className="text-gray-600 mb-6">
          Descubra e compre flashcards criados pela comunidade para acelerar
          seus estudos.
        </p>

        <div className="flex gap-2 max-w-md">
          <Input
            placeholder="Buscar flashcards..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1"
          />
          <Button onClick={handleSearch} variant="outline">
            <Search className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {data?.decks.length === 0 ? (
        <div className="text-center py-12">
          <BookOpen className="mx-auto h-12 w-12 text-gray-400 mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Nenhum flashcard encontrado
          </h3>
          <p className="text-gray-500">
            {search
              ? "Tente buscar por outros termos."
              : "Seja o primeiro a publicar um deck!"}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data?.decks.map((deck, index) => (
            <Card
              key={deck.id}
              className={`hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ${fadeInUp} animate-duration-500`}
              style={getStaggerDelay(index, 100)}
            >
              <CardHeader>
                {deck.coverUrl && (
                  <div className="w-full h-32 bg-gray-100 rounded-md mb-3 overflow-hidden">
                    <img
                      src={deck.coverUrl}
                      alt={deck.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <CardTitle className="line-clamp-2">{deck.title}</CardTitle>
                <CardDescription className="line-clamp-3">
                  {deck.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    {deck.user.name}
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen className="h-4 w-4" />
                    {deck._count.flashcards} cards
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="font-semibold text-lg">
                    {deck.priceCents === 0 ? (
                      <span className="text-green-600">Grátis</span>
                    ) : (
                      <span>R$ {(deck.priceCents / 100).toFixed(2)}</span>
                    )}
                  </div>
                  {deck.priceCents === 0 ? (
                    <Link href={`/deck/${deck.id}`}>
                      <Button>Ver Deck</Button>
                    </Link>
                  ) : isDeckPurchased(deck.id) ? (
                    <div className="flex items-center gap-2 text-green-600">
                      <CheckCircle className="h-4 w-4" />
                      <span className="font-medium">Já Obtido</span>
                    </div>
                  ) : (
                    <Button
                      onClick={() => handlePurchase(deck.id)}
                      disabled={createCheckoutMutation.isPending}
                    >
                      {createCheckoutMutation.isPending
                        ? "Redirecionando..."
                        : "Comprar"}
                    </Button>
                  )}
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
    </div>
  );
}
