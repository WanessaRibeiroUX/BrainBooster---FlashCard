"use client";
import { trpc } from "@/utils/trpc";
import { authClient } from "@/lib/auth-client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Users,
  Zap,
  ShoppingCart,
  Plus,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import {
  getStaggerDelay,
  fadeInUp,
  hoverLift,
  scaleIn,
} from "@/lib/animations";

export default function Home() {
  const healthCheck = trpc.healthCheck.useQuery();
  const { data: session } = authClient.useSession();

  return (
    <div className="container mx-auto max-w-6xl px-4 py-8">
      {/* Hero Section */}
      <div className={`text-center mb-16 ${fadeInUp} animate-duration-700`}>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]">
            BrainBoost
          </span>
          <br />
          <span className={`text-foreground ${scaleIn} animate-delay-300`}>
            Aprenda Mais Rápido
          </span>
        </h1>
        <p
          className={`text-xl text-muted-foreground mb-8 max-w-2xl mx-auto ${fadeInUp} animate-delay-500 animate-duration-600`}
        >
          A plataforma inteligente de flashcards para turbinar seus estudos.
          Aprenda de forma divertida e eficiente com conteúdo de qualidade.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {session ? (
            <>
              <Link href="/dashboard">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <BookOpen className="h-5 w-5 mr-2" />
                  Ir ao Dashboard
                </Button>
              </Link>
              <Link href="/marketplace">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-border hover:bg-accent bg-transparent"
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Explorar Marketplace
                </Button>
              </Link>
            </>
          ) : (
            <>
              <Link href="/login">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-primary hover:bg-primary/80 text-primary-foreground transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-primary/25"
                >
                  Começar Agora
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
              <Link href="/marketplace">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-border hover:bg-accent bg-transparent"
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Ver Marketplace
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Features Section */}
      <div className="mb-16">
        <h2
          className={`text-3xl font-bold text-center mb-12 text-primary ${fadeInUp} animate-duration-600`}
        >
          Por que escolher nossa plataforma?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card
            className={`bg-card border-border hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ${fadeInUp} animate-duration-600`}
            style={getStaggerDelay(0, 200)}
          >
            <CardHeader className="text-center">
              <div className="mx-auto w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 hover:scale-110 hover:rotate-6">
                <Plus className="h-6 w-6 text-primary-foreground" />
              </div>
              <CardTitle className="text-card-foreground">
                Criação Fácil
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center">
                Crie seus próprios flashcards do zero com nossa interface
                intuitiva. Personalize, organize e publique em minutos.
              </p>
            </CardContent>
          </Card>

          <Card
            className={`bg-card border-border hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ${fadeInUp} animate-duration-600`}
            style={getStaggerDelay(1, 200)}
          >
            <CardHeader className="text-center">
              <div className="mx-auto w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 hover:scale-110 hover:rotate-6">
                <ShoppingCart className="h-6 w-6 text-secondary-foreground" />
              </div>
              <CardTitle className="text-card-foreground">
                Marketplace Integrado
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center">
                Compre flashcards de qualidade criados por especialistas ou
                monetize seus próprios conhecimentos vendendo os seus.
              </p>
            </CardContent>
          </Card>

          <Card
            className={`bg-card border-border hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ${fadeInUp} animate-duration-600`}
            style={getStaggerDelay(2, 200)}
          >
            <CardHeader className="text-center">
              <div className="mx-auto w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 hover:scale-110 hover:rotate-6">
                <Zap className="h-6 w-6 text-accent-foreground" />
              </div>
              <CardTitle className="text-card-foreground">
                Estudos Otimizados
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center">
                Interface otimizada para estudos eficientes com sistema de
                revisão espaçada e acompanhamento de progresso.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA Section */}
      <Card
        className={`mb-8 bg-muted/50 border-border hover:shadow-xl transition-all duration-300 ${scaleIn} animate-duration-700`}
      >
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold mb-4 text-primary">
            {session ? "Continue seus estudos" : "Pronto para começar?"}
          </h3>
          <p className="text-muted-foreground mb-6">
            {session
              ? "Acesse seu dashboard ou explore novos flashcards no marketplace."
              : "Junte-se a milhares de estudantes que já aceleram seus estudos conosco."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {session ? (
              <>
                <Link href="/my-decks">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <Plus className="h-5 w-5 mr-2" />
                    Criar Novo Deck
                  </Button>
                </Link>
                <Link href="/marketplace">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-border hover:bg-accent bg-transparent"
                  >
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Explorar Marketplace
                  </Button>
                </Link>
              </>
            ) : (
              <Link href="/login">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Criar Conta Grátis
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
