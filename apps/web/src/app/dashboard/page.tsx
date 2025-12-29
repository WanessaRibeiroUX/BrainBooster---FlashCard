"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { trpc } from "@/utils/trpc";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AuthDebug from "@/components/auth-debug";
import {
  BookOpen,
  ShoppingCart,
  Heart,
  Plus,
  Eye,
  Sparkles,
} from "lucide-react";
import {
  useCountUp,
  getStaggerDelay,
  fadeInUp,
  hoverLift,
  scaleIn,
} from "@/lib/animations";

/* ---------- UI helpers ---------- */
function StatCard({
  title,
  value,
  icon,
  tone = "primary",
  subtitle,
  loading,
}: {
  title: string;
  value: number;
  icon: React.ElementType;
  subtitle?: string;
  tone?: "primary" | "secondary" | "accent";
  loading?: boolean;
}) {
  const toneBg =
    tone === "secondary"
      ? "bg-secondary/10 text-secondary-foreground"
      : tone === "accent"
      ? "bg-accent/10 text-secondary-foreground"
      : "bg-primary/10 text-primary";

  const Icon = icon;
  const animatedValue = useCountUp(value, 1200);

  return (
    <Card className="border bg-card shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            {loading ? (
              <div className="h-8 w-20 rounded-md bg-muted animate-pulse" />
            ) : (
              <p className="text-3xl font-bold text-foreground transition-all duration-300">
                {animatedValue}
              </p>
            )}
            {subtitle && (
              <p className="text-xs text-muted-foreground">{subtitle}</p>
            )}
          </div>
          <div
            className={`p-3 rounded-full ${toneBg} transition-transform duration-300 hover:scale-110 hover:rotate-6`}
          >
            <Icon className="h-6 w-6" aria-hidden />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function EmptyState({
  icon: Icon,
  title,
  description,
  ctaLabel,
  href,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  ctaLabel: string;
  href: string;
}) {
  return (
    <div className="text-center py-12">
      <div className="p-4 bg-muted rounded-full w-fit mx-auto mb-4">
        <Icon className="mx-auto h-8 w-8 text-muted-foreground" aria-hidden />
      </div>
      <h3 className="font-medium text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground mb-6 max-w-sm mx-auto">
        {description}
      </p>
      <Button asChild className="bg-primary hover:bg-primary/90">
        <Link href={href}>{ctaLabel}</Link>
      </Button>
    </div>
  );
}
/* -------------------------------- */

export default function Dashboard() {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  const { data: myDecks, isLoading: decksLoading } =
    trpc.decks.getMine.useQuery(
      { limit: 5, offset: 0 },
      { enabled: !!session }
    );

  const { data: purchases, isLoading: purchasesLoading } =
    trpc.purchases.getMine.useQuery(
      { limit: 5, offset: 0 },
      { enabled: !!session }
    );

  const { data: favorites, isLoading: favLoading } =
    trpc.favorites.getMine.useQuery(
      { limit: 5, offset: 0 },
      { enabled: !!session }
    );

  useEffect(() => {
    if (!session && !isPending) router.push("/login");
  }, [session, isPending, router]);

  if (isPending) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <div className="flex flex-col items-center gap-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
          <p className="text-muted-foreground">Carregando seu dashboard...</p>
        </div>
      </div>
    );
  }
  if (!session) return null;

  const deckCount = myDecks?.total ?? 0;
  const purchasesCount = purchases?.total ?? 0;
  const favCount = favorites?.total ?? 0;

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto max-w-7xl px-4 py-8">
        {/* Header */}
        <div className={`mb-12 ${fadeInUp} animate-duration-600`}>
          <div className="flex items-center gap-3 mb-4">
            <div
              className={`p-2 bg-primary/10 rounded-lg ${scaleIn} animate-delay-300`}
            >
              <Sparkles className="h-6 w-6 text-primary" aria-hidden />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-foreground">Dashboard</h1>
              <p className="text-lg text-muted-foreground mt-1">
                Bem-vindo de volta,{" "}
                <span className="text-primary font-medium">
                  {session.user.name}
                </span>
                !
              </p>
            </div>
          </div>
          <p className="text-muted-foreground max-w-2xl">
            Gerencie seus flashcards, acompanhe seu progresso e explore novos
            conteúdos no marketplace.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div
            className={`${fadeInUp} animate-duration-500`}
            style={getStaggerDelay(0, 150)}
          >
            <StatCard
              title="Meus Decks"
              value={deckCount}
              subtitle="decks criados"
              icon={BookOpen}
              loading={decksLoading}
            />
          </div>
          <div
            className={`${fadeInUp} animate-duration-500`}
            style={getStaggerDelay(1, 150)}
          >
            <StatCard
              title="Compras"
              value={purchasesCount}
              subtitle="decks adquiridos"
              icon={ShoppingCart}
              tone="secondary"
              loading={purchasesLoading}
            />
          </div>
          <div
            className={`${fadeInUp} animate-duration-500`}
            style={getStaggerDelay(2, 150)}
          >
            <StatCard
              title="Favoritos"
              value={favCount}
              subtitle="decks salvos"
              icon={Heart}
              tone="accent"
              loading={favLoading}
            />
          </div>
        </div>

        {/* Ações rápidas */}
        <Card
          className={`mb-12 border bg-card shadow-sm ${scaleIn} animate-duration-700`}
        >
          <CardHeader className="pb-4">
            <CardTitle className="text-xl text-foreground">
              Ações Rápidas
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              Acesse as principais funcionalidades rapidamente
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Button
                asChild
                variant="outline"
                className="w-full h-24 flex flex-col gap-3 bg-background hover:bg-secondary/20 hover:border-secondary hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <Link href="/marketplace" aria-label="Abrir marketplace">
                  <div className="p-2 bg-secondary/10 rounded-lg text-secondary-foreground">
                    <ShoppingCart className="h-5 w-5" aria-hidden />
                  </div>
                  <span className="font-medium">Marketplace</span>
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="w-full h-24 flex flex-col gap-3 bg-background hover:bg-accent/20 hover:border-accent hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <Link href="/favorites" aria-label="Abrir favoritos">
                  <div className="p-2 bg-accent/10 rounded-lg text-secondary-foreground">
                    <Heart className="h-5 w-5" aria-hidden />
                  </div>
                  <span className="font-medium">Favoritos</span>
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="w-full h-24 flex flex-col gap-3 bg-background hover:bg-primary/20 hover:border-primary hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <Link href="/purchases" aria-label="Abrir minhas compras">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <Eye className="h-5 w-5" aria-hidden />
                  </div>
                  <span className="font-medium">Minhas Compras</span>
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Listas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Meus Decks Recentes */}
          <Card className="border bg-card shadow-sm">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-xl text-foreground">
                  Meus Decks Recentes
                </CardTitle>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="hover:bg-primary/20 hover:text-primary hover:border-primary/50 transition-colors"
                >
                  <Link href="/my-decks">Ver todos</Link>
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {decksLoading ? (
                <div className="space-y-3">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="h-16 rounded-lg bg-muted animate-pulse"
                    />
                  ))}
                </div>
              ) : (myDecks?.decks?.length ?? 0) === 0 ? (
                <EmptyState
                  icon={BookOpen}
                  title="Nenhum deck criado"
                  description="Comece criando seu primeiro deck de flashcards para organizar seus estudos"
                  ctaLabel="Criar Primeiro Deck"
                  href="/my-decks"
                />
              ) : (
                <div className="space-y-3">
                  {myDecks!.decks.slice(0, 3).map((deck) => (
                    <div
                      key={deck.id}
                      className="flex items-center justify-between p-4 bg-background border border-border/50 rounded-lg hover:bg-accent/5 hover:border-primary/50 hover:shadow-sm transition-all duration-200"
                    >
                      <div className="space-y-1">
                        <h4 className="font-medium text-foreground line-clamp-1">
                          {deck.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {deck._count.flashcards} flashcards •{" "}
                          {deck.isPublic ? "Público" : "Privado"}
                        </p>
                      </div>
                      <Button
                        asChild
                        variant="ghost"
                        size="sm"
                        className="hover:bg-primary/20 hover:text-primary"
                      >
                        <Link href={`/deck/${deck.id}/edit`}>Editar</Link>
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Compras Recentes */}
          <Card className="border bg-card shadow-sm">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-xl text-foreground">
                  Compras Recentes
                </CardTitle>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="hover:bg-primary/20 hover:text-primary hover:border-primary/50 transition-colors"
                >
                  <Link href="/purchases">Ver todas</Link>
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {purchasesLoading ? (
                <div className="space-y-3">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="h-16 rounded-lg bg-muted animate-pulse"
                    />
                  ))}
                </div>
              ) : (purchases?.purchases?.length ?? 0) === 0 ? (
                <EmptyState
                  icon={ShoppingCart}
                  title="Nenhuma compra realizada"
                  description="Explore o marketplace e encontre decks criados por outros usuários"
                  ctaLabel="Explorar Marketplace"
                  href="/marketplace"
                />
              ) : (
                <div className="space-y-3">
                  {purchases!.purchases.slice(0, 3).map((purchase) => (
                    <div
                      key={purchase.id}
                      className="flex items-center justify-between p-4 bg-background border border-border/50 rounded-lg hover:bg-accent/5 hover:border-primary/50 hover:shadow-sm transition-all duration-200"
                    >
                      <div className="space-y-1">
                        <h4 className="font-medium text-foreground line-clamp-1">
                          {purchase.deck.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          R$ {(purchase.amountCents / 100).toFixed(2)} •{" "}
                          {purchase.status}
                        </p>
                      </div>
                      <Button
                        asChild
                        variant="ghost"
                        size="sm"
                        className="hover:bg-primary/20 hover:text-primary"
                      >
                        <Link href={`/deck/${purchase.deckId}`}>Ver Deck</Link>
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
