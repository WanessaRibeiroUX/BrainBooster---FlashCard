"use client";

import { trpc } from "@/utils/trpc";
import { authClient } from "@/lib/auth-client";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect, useCallback } from "react";
import { StatisticsCard } from "@/components/deck/StatisticsCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  useCountUp,
  getStaggerDelay,
  hoverLift,
  fadeInUp,
  scaleIn,
  hoverScale,
} from "@/lib/animations";
import {
  Heart,
  User,
  BookOpen,
  ShoppingCart,
  Trophy,
  Target,
  Zap,
  CheckCircle,
  XCircle,
  RotateCcw,
  Shuffle,
  Brain,
  Star,
  Flame,
  Award,
  TrendingUp,
  Clock,
  RefreshCw,
} from "lucide-react";
import { toast } from "sonner";
import { CheckoutModal } from "@/components/checkout-modal";
import { AsaasCheckoutModal } from "@/components/asaas-checkout-modal";

// Função para decodificar entidades HTML
const decodeHtmlEntities = (text: string): string => {
  const textarea = document.createElement("textarea");
  textarea.innerHTML = text;
  return textarea.value;
};

// Função para processar texto do Anki com separadores especiais
const processAnkiText = (text: string): string => {
  if (!text) return "";

  // Decodificar entidades HTML primeiro
  let processed = decodeHtmlEntities(text);

  // Substituir separadores \u001f (Unit Separator) por quebra de linha para manter organização
  processed = processed.replace(/\u001f/g, "\n");

  // Substituir &nbsp; por espaço normal
  processed = processed.replace(/&nbsp;/g, " ");

  // Remover múltiplas quebras de linha consecutivas (máximo 2)
  processed = processed.replace(/\n{3,}/g, "\n\n");

  // Remover espaços extras no final de cada linha
  processed = processed.replace(/[ \t]+$/gm, "");

  // Trim geral
  processed = processed.trim();

  return processed;
};

// Função para renderizar HTML de forma segura
const renderSafeHTML = (html: string) => {
  // Lista de tags permitidas para flashcards
  const allowedTags = [
    "p",
    "br",
    "strong",
    "b",
    "em",
    "i",
    "u",
    "s",
    "mark",
    "span",
    "div",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "ul",
    "ol",
    "li",
    "blockquote",
    "code",
    "pre",
    "a",
    "img",
  ];

  // Se contém tags HTML, renderiza como HTML
  if (/<[^>]+>/.test(html)) {
    return (
      <div
        dangerouslySetInnerHTML={{ __html: html }}
        className="wysiwyg-content prose prose-sm max-w-none [&>p]:mb-2 [&>ul]:mb-2 [&>ol]:mb-2 [&>blockquote]:mb-2 [&>h1]:mb-2 [&>h2]:mb-2 [&>h3]:mb-2 [&>h4]:mb-2 [&>h5]:mb-2 [&>h6]:mb-2 [&_img]:max-w-full [&_img]:h-auto [&_img]:rounded-lg [&_img]:mx-auto [&_img]:block"
      />
    );
  }

  // Caso contrário, renderiza como texto simples com quebras de linha
  return <div className="whitespace-pre-line">{html}</div>;
};

// Função para extrair conteúdo das cloze deletions
const extractClozeContent = (text: string): string => {
  return text.replace(/\{\{c\d+::([^}]+)\}\}/g, "$1");
};

// Tipos para gamificação
interface StudySession {
  score: number;
  streak: number;
  correctAnswers: number;
  totalAnswers: number;
  timeSpent: number;
  difficulty: "easy" | "medium" | "hard";
}

interface FlashcardAnswer {
  cardId: number;
  difficulty: "easy" | "medium" | "hard";
  timeToAnswer: number;
  correct: boolean;
}

export default function DeckDetail() {
  const params = useParams();
  const router = useRouter();
  const deckId = Number.parseInt(params.id as string);
  const { data: session } = authClient.useSession();

  // Estados existentes
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [showAsaasCheckout, setShowAsaasCheckout] = useState(false);

  // Estados de gamificação
  const [studyMode, setStudyMode] = useState<
    "casual" | "challenge" | "practice"
  >("casual");
  const [isStudyStarted, setIsStudyStarted] = useState(false);
  const [studySession, setStudySession] = useState<StudySession>({
    score: 0,
    streak: 0,
    correctAnswers: 0,
    totalAnswers: 0,
    timeSpent: 0,
    difficulty: "medium",
  });
  const [cardAnswers, setCardAnswers] = useState<FlashcardAnswer[]>([]);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [cardStartTime, setCardStartTime] = useState<number | null>(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);
  const [shuffledCards, setShuffledCards] = useState<number[]>([]);

  // Queries existentes
  const {
    data: deck,
    isLoading,
    error,
  } = trpc.decks.getById.useQuery({ id: deckId });

  const { data: accessData } = trpc.purchases.canAccess.useQuery(
    { deckId },
    { enabled: !!session }
  );

  const { data: favoriteData, refetch: refetchFavorite } =
    trpc.favorites.isLiked.useQuery({ deckId }, { enabled: !!session });

  // Mutations existentes
  const addFavoriteMutation = trpc.favorites.add.useMutation({
    onSuccess: () => {
      toast.success("⭐ Adicionado aos favoritos!", {
        description: "Agora você pode encontrar facilmente este deck!",
      });
      refetchFavorite();
    },
  });

  const removeFavoriteMutation = trpc.favorites.remove.useMutation({
    onSuccess: () => {
      toast.success("Removido dos favoritos!");
      refetchFavorite();
    },
  });

  // Efeitos para gamificação
  useEffect(() => {
    if (deck && isStudyStarted && !shuffledCards.length) {
      setShuffledCards(deck.flashcards.map((_, index) => index));
    }
  }, [deck, isStudyStarted]);

  // Removido useEffect problemático que causava re-renders

  // Funções de gamificação
  const startStudy = (mode: "casual" | "challenge" | "practice") => {
    setStudyMode(mode);
    setIsStudyStarted(true);
    setStartTime(Date.now());
    setCardStartTime(Date.now());
    setStudySession({
      score: 0,
      streak: 0,
      correctAnswers: 0,
      totalAnswers: 0,
      timeSpent: 0,
      difficulty: mode === "challenge" ? "hard" : "medium",
    });
    setCardAnswers([]);

    if (mode === "challenge" && deck) {
      // Embaralhar cards no modo challenge
      const shuffled = [...Array(deck.flashcards.length)]
        .map((_, i) => i)
        .sort(() => Math.random() - 0.5);
      setShuffledCards(shuffled);
    }

    toast.success(
      `🎮 Modo ${
        mode === "challenge"
          ? "Desafio"
          : mode === "practice"
          ? "Prática"
          : "Casual"
      } iniciado!`,
      {
        description: "Boa sorte nos seus estudos!",
      }
    );
  };

  const answerCard = (difficulty: "easy" | "medium" | "hard") => {
    if (!cardStartTime || !deck) return;

    const timeToAnswer = Date.now() - cardStartTime;
    const currentCard = deck.flashcards[getCurrentCardIndex()];

    const points = difficulty === "hard" ? 10 : difficulty === "medium" ? 5 : 2;
    const timeBonus =
      timeToAnswer < 5000 ? Math.floor((5000 - timeToAnswer) / 1000) : 0;
    const streakBonus = studySession.streak >= 5 ? 5 : 0;

    const totalPoints = points + timeBonus + streakBonus;
    const isCorrect = difficulty !== "easy"; // Assumimos que easy = erro

    const newAnswer: FlashcardAnswer = {
      cardId: currentCard.id,
      difficulty,
      timeToAnswer,
      correct: isCorrect,
    };

    setCardAnswers((prev) => [...prev, newAnswer]);

    setStudySession((prev) => ({
      ...prev,
      score: prev.score + totalPoints,
      streak: isCorrect ? prev.streak + 1 : 0,
      correctAnswers: prev.correctAnswers + (isCorrect ? 1 : 0),
      totalAnswers: prev.totalAnswers + 1,
    }));

    // Celebração para streak alto
    if (isCorrect && studySession.streak + 1 >= 5) {
      setShowCelebration(true);
      setTimeout(() => setShowCelebration(false), 2000);
      toast.success(`🔥 Streak de ${studySession.streak + 1}!`, {
        description: "Você está em fogo! Continue assim!",
      });
    }

    // Não avançar automaticamente - deixar o usuário controlar
  };

  const getCurrentCardIndex = () => {
    return shuffledCards.length > 0
      ? shuffledCards[currentCardIndex]
      : currentCardIndex;
  };

  const resetStudy = () => {
    setIsStudyStarted(false);
    setCurrentCardIndex(0);
    setShowAnswer(false);
    setIsFlipped(false);
    setStudySession({
      score: 0,
      streak: 0,
      correctAnswers: 0,
      totalAnswers: 0,
      timeSpent: 0,
      difficulty: "medium",
    });
    setCardAnswers([]);
    setShuffledCards([]);
    setStartTime(null);
    setCardStartTime(null);
  };

  // Funções existentes atualizadas
  const handleFavoriteToggle = () => {
    if (!session) {
      toast.error("Faça login para favoritar decks!");
      router.push("/login");
      return;
    }

    if (favoriteData?.isLiked) {
      removeFavoriteMutation.mutate({ deckId });
    } else {
      addFavoriteMutation.mutate({ deckId });
    }
  };

  const handleNextCard = () => {
    if (deck && currentCardIndex < deck.flashcards.length - 1) {
      // Calcular tempo gasto no card antes de resetar
      if (cardStartTime && showAnswer) {
        const timeSpent = Date.now() - cardStartTime;
        setStudySession((prev) => ({
          ...prev,
          timeSpent: prev.timeSpent + timeSpent,
        }));
      }

      setCurrentCardIndex(currentCardIndex + 1);
      setShowAnswer(false);
      setIsFlipped(false);
      setCardStartTime(Date.now());
    } else if (isStudyStarted) {
      // Finalizar sessão de estudo
      finishStudySession();
    }
  };

  const handlePrevCard = () => {
    if (currentCardIndex > 0) {
      // Calcular tempo gasto antes de voltar
      if (cardStartTime && showAnswer) {
        const timeSpent = Date.now() - cardStartTime;
        setStudySession((prev) => ({
          ...prev,
          timeSpent: prev.timeSpent + timeSpent,
        }));
      }

      setCurrentCardIndex(currentCardIndex - 1);
      setShowAnswer(false);
      setIsFlipped(false);
      setCardStartTime(Date.now());
    }
  };

  const handleFlipCard = useCallback(() => {
    // Sempre revelar a resposta quando clicar (nunca esconder)
    if (!showAnswer) {
      setIsFlipped(true);
      setShowAnswer(true);
    }
    // Não fazer nada se já estiver mostrando a resposta
  }, [showAnswer]);

  const finishStudySession = () => {
    if (!studySession.totalAnswers) return;

    const accuracy = Math.round(
      (studySession.correctAnswers / studySession.totalAnswers) * 100
    );
    const avgTime = Math.round(
      studySession.timeSpent / studySession.totalAnswers / 1000
    );

    let message = "";
    let emoji = "";

    if (accuracy >= 90) {
      message = "Excelente! Você dominou este deck!";
      emoji = "🏆";
    } else if (accuracy >= 70) {
      message = "Muito bem! Continue praticando!";
      emoji = "🎯";
    } else {
      message = "Bom esforço! A prática leva à perfeição!";
      emoji = "💪";
    }

    toast.success(`${emoji} Sessão concluída!`, {
      description: `${message} Precisão: ${accuracy}% | Pontuação: ${studySession.score}`,
    });

    setIsStudyStarted(false);
  };

  const handlePurchase = () => {
    if (!session) {
      toast.error("Faça login para comprar decks!");
      router.push("/login");
      return;
    }
    setShowCheckout(true);
  };

  if (isLoading) {
    return (
      <div className="container mx-auto max-w-6xl px-4 py-8">
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 bg-muted rounded-full animate-pulse"></div>
            <div className="space-y-2 flex-1">
              <div className="h-8 bg-muted rounded-lg animate-pulse"></div>
              <div className="h-4 bg-muted rounded animate-pulse w-2/3"></div>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 h-96 bg-muted rounded-xl animate-pulse border"></div>
            <div className="space-y-4">
              <div className="h-32 bg-muted rounded-xl animate-pulse border"></div>
              <div className="h-24 bg-muted rounded-xl animate-pulse border"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !deck) {
    return (
      <div className="container mx-auto max-w-4xl px-4 py-8">
        <Card className="border-destructive/20 bg-destructive/5">
          <CardContent className="p-12 text-center">
            <div className="space-y-6">
              <div className="w-20 h-20 mx-auto bg-destructive/10 rounded-full flex items-center justify-center">
                <XCircle className="h-10 w-10 text-destructive" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-destructive mb-2">
                  Deck não encontrado
                </h1>
                <p className="text-destructive/80 mb-6">
                  O deck que você está procurando não existe ou não está mais
                  disponível.
                </p>
              </div>
              <Button
                onClick={() => router.push("/marketplace")}
                className="bg-destructive hover:bg-destructive/90"
              >
                <BookOpen className="h-4 w-4 mr-2" />
                Voltar ao Marketplace
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  const canAccess =
    !session || accessData?.canAccess || deck.userId === session?.user.id;
  const isOwner = session?.user.id === deck.userId;
  const needsPurchase =
    session &&
    !canAccess &&
    accessData &&
    "reason" in accessData &&
    accessData.reason === "Compra necessária";

  const progressPercentage =
    deck.flashcards.length > 0
      ? Math.round(((currentCardIndex + 1) / deck.flashcards.length) * 100)
      : 0;

  const accuracyPercentage =
    studySession.totalAnswers > 0
      ? Math.round(
          (studySession.correctAnswers / studySession.totalAnswers) * 100
        )
      : 0;

  return (
    <div className="container mx-auto max-w-6xl px-4 py-8">
      {/* Celebração de Streak */}
      {showCelebration && (
        <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
          <div className="bg-gradient-to-r from-orange-400 to-red-500 text-white px-8 py-4 rounded-full text-xl font-bold animate-bounce shadow-2xl">
            🔥 STREAK DE FOGO! 🔥
          </div>
        </div>
      )}

      {/* Header do Deck Melhorado */}
      {!isStudyStarted && (
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Informações principais */}
            <div className="flex-1 space-y-6">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  {deck.coverUrl && (
                    <div className="w-20 h-20 bg-muted rounded-xl overflow-hidden shadow-lg flex-shrink-0">
                      <img
                        src={deck.coverUrl || "/placeholder.svg"}
                        alt={deck.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                      {deck.title}
                    </h1>
                    {deck.description && (
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        {deck.description}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 p-4 rounded-xl border-2 border-blue-500/30">
                    <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                      <BookOpen className="h-5 w-5" />
                      <span className="font-semibold">
                        {deck._count.flashcards}
                      </span>
                    </div>
                    <p className="text-xs text-blue-700 dark:text-blue-300 mt-1">
                      Flashcards
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-rose-50 to-rose-100 dark:from-rose-950 dark:to-rose-900 p-4 rounded-xl border-2 border-rose-500/30">
                    <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400">
                      <Heart className="h-5 w-5" />
                      <span className="font-semibold">
                        {deck._count.favorites}
                      </span>
                    </div>
                    <p className="text-xs text-rose-700 dark:text-rose-300 mt-1">
                      Favoritos
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 p-4 rounded-xl border-2 border-purple-500/30">
                    <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400">
                      <User className="h-5 w-5" />
                      <span className="font-semibold text-sm">
                        {deck.user.name}
                      </span>
                    </div>
                    <p className="text-xs text-purple-700 dark:text-purple-300 mt-1">
                      Criador
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-950 dark:to-amber-900 p-4 rounded-xl border-2 border-amber-500/30">
                    <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400">
                      <Star className="h-5 w-5" />
                      <span className="font-semibold">
                        {deck.priceCents === 0
                          ? "Grátis"
                          : `R$ ${(deck.priceCents / 100).toFixed(2)}`}
                      </span>
                    </div>
                    <p className="text-xs text-amber-700 dark:text-amber-300 mt-1">
                      Preço
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  {session && (
                    <Button
                      variant="outline"
                      onClick={handleFavoriteToggle}
                      disabled={
                        addFavoriteMutation.isPending ||
                        removeFavoriteMutation.isPending
                      }
                      className={`transition-all ${
                        favoriteData?.isLiked
                          ? "border-destructive/30 bg-destructive/5 text-destructive hover:bg-destructive/10"
                          : "hover:border-destructive/30 hover:bg-destructive/5"
                      }`}
                    >
                      <Heart
                        className={`h-4 w-4 mr-2 transition-all ${
                          favoriteData?.isLiked ? "fill-current scale-110" : ""
                        }`}
                      />
                      {favoriteData?.isLiked ? "Favorito" : "Favoritar"}
                    </Button>
                  )}

                  {needsPurchase && (
                    <div className="flex gap-2">
                      <Button
                        onClick={handlePurchase}
                        className="bg-primary hover:bg-primary/90"
                      >
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Checkout Clássico
                      </Button>
                      <Button
                        onClick={() => setShowAsaasCheckout(true)}
                        variant="outline"
                        className="border-primary/30 text-primary hover:bg-primary/5 hover:border-primary/40"
                      >
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Checkout Asaas
                      </Button>
                    </div>
                  )}

                  {isOwner && (
                    <Button
                      variant="outline"
                      onClick={() => router.push(`/deck/${deck.id}/edit`)}
                      className="border-accent/30 text-accent-foreground hover:bg-accent/50"
                    >
                      <Brain className="h-4 w-4 mr-2" />
                      Editar Deck
                    </Button>
                  )}
                </div>
              </div>
            </div>

            {canAccess && isStudyStarted && (
              <div className="lg:w-80 space-y-4">
                <Card className="bg-primary/5 border-primary/20">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center gap-2 text-primary">
                      <Trophy className="h-5 w-5" />
                      Estatísticas da Sessão
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <StatisticsCard
                      score={studySession.score}
                      streak={studySession.streak}
                    />

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Progresso</span>
                        <span className="font-semibold text-foreground">
                          {progressPercentage}%
                        </span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
                        <div
                          className="h-full bg-primary rounded-full transition-all duration-1000 ease-out animate-pulse"
                          style={{ width: `${progressPercentage}%` }}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Precisão</span>
                        <span className="font-semibold text-foreground">
                          {accuracyPercentage}%
                        </span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-1000 ease-out ${
                            accuracyPercentage >= 80
                              ? "bg-primary animate-pulse"
                              : accuracyPercentage >= 60
                              ? "bg-accent"
                              : "bg-destructive"
                          }`}
                          style={{ width: `${accuracyPercentage}%` }}
                        />
                      </div>
                    </div>

                    <div className="text-center pt-2">
                      <Button
                        onClick={resetStudy}
                        variant="outline"
                        size="sm"
                        className="text-primary border-primary/30 hover:bg-primary/5 bg-transparent"
                      >
                        <RotateCcw className="h-4 w-4 mr-2" />
                        Reiniciar
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Conteúdo dos Flashcards Gamificado */}
      {canAccess && deck.flashcards.length > 0 ? (
        <div className="space-y-6">
          {!isStudyStarted ? (
            /* Updated study mode selection cards to use semantic colors */
            <div className="grid md:grid-cols-3 gap-6">
              <Card
                className={`cursor-pointer border-2 border-blue-500/30 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 ${fadeInUp} animate-duration-500`}
                style={getStaggerDelay(0, 150)}
                onClick={() => startStudy("casual")}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-blue-500/20 rounded-full flex items-center justify-center">
                    <Brain className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-2">
                    Modo Casual
                  </h3>
                  <p className="text-blue-700 dark:text-blue-300 text-sm mb-4">
                    Estude no seu ritmo, sem pressão de tempo
                  </p>
                  <div className="flex items-center justify-center gap-2 text-xs text-blue-600 dark:text-blue-400">
                    <Clock className="h-4 w-4" />
                    Sem limite de tempo
                  </div>
                </CardContent>
              </Card>

              <Card
                className={`cursor-pointer border-2 border-orange-500/30 hover:border-orange-500/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950 dark:to-orange-900 ${fadeInUp} animate-duration-500`}
                style={getStaggerDelay(1, 150)}
                onClick={() => startStudy("challenge")}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-orange-500/20 rounded-full flex items-center justify-center">
                    <Target className="h-8 w-8 text-orange-600 dark:text-orange-400" />
                  </div>
                  <h3 className="text-xl font-bold text-orange-900 dark:text-orange-100 mb-2">
                    Modo Desafio
                  </h3>
                  <p className="text-orange-700 dark:text-orange-300 text-sm mb-4">
                    Cards embaralhados com sistema de pontuação
                  </p>
                  <div className="flex items-center justify-center gap-2 text-xs text-orange-600 dark:text-orange-400">
                    <Shuffle className="h-4 w-4" />
                    Cards aleatórios
                  </div>
                </CardContent>
              </Card>

              <Card
                className={`cursor-pointer border-2 border-green-500/30 hover:border-green-500/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 ${fadeInUp} animate-duration-500`}
                style={getStaggerDelay(2, 150)}
                onClick={() => startStudy("practice")}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-green-500/20 rounded-full flex items-center justify-center">
                    <TrendingUp className="h-8 w-8 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-green-900 dark:text-green-100 mb-2">
                    Modo Prática
                  </h3>
                  <p className="text-green-700 dark:text-green-300 text-sm mb-4">
                    Foque na revisão e retenção do conhecimento
                  </p>
                  <div className="flex items-center justify-center gap-2 text-xs text-green-600 dark:text-green-400">
                    <RefreshCw className="h-4 w-4" />
                    Revisão adaptativa
                  </div>
                </CardContent>
              </Card>
            </div>
          ) : (
            /* Interface de Estudo Ativa */
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Card className="relative overflow-hidden border-2 border-border min-h-[400px]">
                  <div className="absolute top-4 left-4 flex items-center gap-2 z-10">
                    <div className="bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-foreground border">
                      {currentCardIndex + 1} de {deck.flashcards.length}
                    </div>
                    {studyMode === "challenge" && (
                      <div className="bg-accent/10 text-accent-foreground px-3 py-1 rounded-full text-sm font-medium border border-accent/20">
                        🎯 Desafio
                      </div>
                    )}
                  </div>

                  <CardContent className="p-8 h-full flex flex-col justify-center">
                    <div
                      className={`relative w-full min-h-[380px] perspective-1000 transition-transform duration-700 ease-out transform-style-3d`}
                      style={{
                        transformStyle: "preserve-3d",
                        transform: isFlipped
                          ? "rotateY(180deg)"
                          : "rotateY(0deg)",
                      }}
                    >
                      {/* Frente do Card */}
                      <div
                        className={`absolute inset-0 flex flex-col items-center justify-center p-6 rounded-xl transition-all duration-700 ${
                          isFlipped
                            ? "flip-card-back-hidden"
                            : "flip-card-front"
                        } ${
                          !showAnswer
                            ? "bg-primary/5 border-2 border-primary/20"
                            : "opacity-0"
                        }`}
                        style={{
                          backfaceVisibility: "hidden",
                          transform: "rotateY(0deg)",
                        }}
                      >
                        <div className="text-lg font-medium text-primary mb-4">
                          💭 Pergunta
                        </div>
                        <div className="text-xl leading-relaxed text-center text-foreground max-w-full break-words overflow-hidden px-2">
                          {deck.flashcards[
                            getCurrentCardIndex()
                          ]?.frontText?.includes("{{c")
                            ? // Renderiza cloze deletion do Anki
                              processAnkiText(
                                deck.flashcards[getCurrentCardIndex()]
                                  ?.frontText
                              )
                                .split(/(\{\{c\d+::[^}]+\}\})/)
                                .map((part, index) => {
                                  if (part.match(/\{\{c\d+::[^}]+\}\}/)) {
                                    return (
                                      <span
                                        key={index}
                                        className="inline-block bg-primary/20 text-primary border border-primary/30 px-3 py-1 rounded-lg font-semibold shadow-sm"
                                      >
                                        [...]
                                      </span>
                                    );
                                  }
                                  return part;
                                })
                            : // Renderiza HTML normal ou texto
                              renderSafeHTML(
                                processAnkiText(
                                  deck.flashcards[getCurrentCardIndex()]
                                    ?.frontText
                                )
                              )}
                        </div>
                      </div>

                      {/* Verso do Card */}
                      <div
                        className={`absolute inset-0 flex flex-col items-center justify-center p-6 rounded-xl transition-all duration-700 ${
                          isFlipped
                            ? "flip-card-back"
                            : "flip-card-front-hidden"
                        } ${
                          showAnswer
                            ? "bg-secondary border-2 border-secondary/20"
                            : "opacity-0"
                        }`}
                        style={{
                          backfaceVisibility: "hidden",
                          transform: "rotateY(180deg)",
                        }}
                      >
                        <div className="text-lg font-medium text-secondary-foreground mb-4">
                          ✅ Resposta
                        </div>
                        <div className="text-xl leading-relaxed text-center text-secondary-foreground max-w-full break-words overflow-auto px-2">
                          {deck.flashcards[
                            getCurrentCardIndex()
                          ]?.backText?.includes("{{c")
                            ? // Renderiza cloze deletion do Anki
                              processAnkiText(
                                deck.flashcards[getCurrentCardIndex()]?.backText
                              )
                                .split(/(\{\{c\d+::[^}]+\}\})/)
                                .map((part, index) => {
                                  const match = part.match(
                                    /\{\{c\d+::([^}]+)\}\}/
                                  );
                                  if (match) {
                                    return (
                                      <span
                                        key={index}
                                        className="inline-block bg-secondary text-secondary-foreground border-2 border-secondary-foreground/30 px-4 py-2 rounded-lg font-bold shadow-lg transform transition-all duration-200 hover:scale-105"
                                      >
                                        {processAnkiText(match[1])}
                                      </span>
                                    );
                                  }
                                  return part;
                                })
                            : // Renderiza HTML normal ou texto
                              renderSafeHTML(
                                processAnkiText(
                                  deck.flashcards[getCurrentCardIndex()]
                                    ?.backText
                                )
                              )}
                        </div>
                      </div>
                    </div>

                    {/* Controles */}
                    <div className="mt-8 space-y-4">
                      {!showAnswer ? (
                        <Button
                          onClick={handleFlipCard}
                          size="lg"
                          className="w-full bg-primary hover:bg-primary/90 text-lg py-6"
                        >
                          <RefreshCw className="h-5 w-5 mr-2" />
                          Revelar Resposta
                        </Button>
                      ) : (
                        /* Updated evaluation buttons to use semantic colors */
                        <div className="grid grid-cols-3 gap-3">
                          <Button
                            onClick={() => answerCard("easy")}
                            variant="outline"
                            size="lg"
                            className="border-destructive/30 text-destructive hover:bg-destructive/5 hover:border-destructive/40 py-4"
                          >
                            <XCircle className="h-5 w-5 mr-2" />
                            Difícil
                            <div className="text-xs opacity-75 mt-1">
                              +2 pts
                            </div>
                          </Button>
                          <Button
                            onClick={() => answerCard("medium")}
                            variant="outline"
                            size="lg"
                            className="border-accent/30 text-primary-foreground hover:bg-primary/80 hover:border-accent/40 py-4"
                          >
                            <Zap className="h-5 w-5 mr-2" />
                            Médio
                            <div className="text-xs opacity-75 mt-1">
                              +5 pts
                            </div>
                          </Button>
                          <Button
                            onClick={() => answerCard("hard")}
                            variant="outline"
                            size="lg"
                            className="border-primary/30 text-primary hover:bg-primary/5 hover:border-primary/40 py-4"
                          >
                            <CheckCircle className="h-5 w-5 mr-2" />
                            Fácil
                            <div className="text-xs opacity-75 mt-1">
                              +10 pts
                            </div>
                          </Button>
                        </div>
                      )}

                      {/* Navegação */}
                      <div className="flex justify-between items-center pt-4 gap-4">
                        <Button
                          onClick={handlePrevCard}
                          disabled={currentCardIndex === 0}
                          variant="outline"
                          className="flex-1 bg-transparent"
                        >
                          ← Anterior
                        </Button>
                        <Button
                          onClick={handleNextCard}
                          disabled={
                            currentCardIndex === deck.flashcards.length - 1 &&
                            !showAnswer
                          }
                          className="flex-1 bg-primary hover:bg-primary/90"
                        >
                          {currentCardIndex === deck.flashcards.length - 1
                            ? "Finalizar"
                            : "Próximo"}{" "}
                          →
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-4">
                <Card className="bg-gradient-to-br from-cyan-50 to-cyan-100 dark:from-cyan-950 dark:to-cyan-900 border-2 border-cyan-500/30">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center gap-2 text-cyan-700 dark:text-cyan-300">
                      <Award className="h-5 w-5" />
                      Progresso Geral
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-cyan-900 dark:text-cyan-100 mb-1">
                          {currentCardIndex + 1}/{deck.flashcards.length}
                        </div>
                        <div className="text-sm text-cyan-700 dark:text-cyan-300">
                          Cards estudados
                        </div>
                      </div>

                      <div className="w-full bg-cyan-200 dark:bg-cyan-950 rounded-full h-3 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full transition-all duration-500 ease-out"
                          style={{ width: `${progressPercentage}%` }}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {studySession.totalAnswers > 0 && (
                  <Card className="bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-950 dark:to-emerald-900 border-2 border-emerald-500/30">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg flex items-center gap-2 text-emerald-700 dark:text-emerald-300">
                        <TrendingUp className="h-5 w-5" />
                        Performance
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-sm text-emerald-700 dark:text-emerald-300">
                            Corretas:
                          </span>
                          <span className="font-semibold text-emerald-900 dark:text-emerald-100">
                            {studySession.correctAnswers}/
                            {studySession.totalAnswers}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-emerald-700 dark:text-emerald-300">
                            Precisão:
                          </span>
                          <span className="font-semibold text-emerald-900 dark:text-emerald-100">
                            {accuracyPercentage}%
                          </span>
                        </div>
                        <div className="w-full bg-emerald-200 dark:bg-emerald-950 rounded-full h-2 overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full transition-all duration-500"
                            style={{ width: `${accuracyPercentage}%` }}
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          )}
        </div>
      ) : !canAccess ? (
        <Card className="border-accent/20 bg-accent/5">
          <CardContent className="p-12 text-center">
            <div className="space-y-6">
              <div className="w-20 h-20 mx-auto bg-accent/10 rounded-full flex items-center justify-center">
                {needsPurchase ? (
                  <ShoppingCart className="h-10 w-10 text-accent-foreground" />
                ) : (
                  <User className="h-10 w-10 text-accent-foreground" />
                )}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-accent-foreground mb-2">
                  {needsPurchase ? "🔒 Acesso Premium" : "🔐 Login Necessário"}
                </h3>
                <p className="text-accent-foreground/80 mb-6 max-w-md mx-auto">
                  {needsPurchase
                    ? "Este deck premium contém conteúdo exclusivo. Adquira para desbloquear todos os flashcards!"
                    : "Faça login para acessar este deck e começar seus estudos."}
                </p>
              </div>

              {!session ? (
                <Button
                  onClick={() => router.push("/login")}
                  size="lg"
                  className="bg-primary hover:bg-primary/90"
                >
                  <User className="h-5 w-5 mr-2" />
                  Fazer Login
                </Button>
              ) : needsPurchase ? (
                <div className="space-y-4">
                  <div className="text-3xl font-bold text-accent-foreground mb-2">
                    R$ {(deck.priceCents / 100).toFixed(2)}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Button
                      onClick={handlePurchase}
                      size="lg"
                      className="bg-primary hover:bg-primary/90"
                    >
                      <ShoppingCart className="h-5 w-5 mr-2" />
                      Checkout Clássico
                    </Button>
                    <Button
                      onClick={() => setShowAsaasCheckout(true)}
                      size="lg"
                      variant="outline"
                      className="border-primary/30 text-primary hover:bg-primary/5 hover:border-primary/40"
                    >
                      <ShoppingCart className="h-5 w-5 mr-2" />
                      Checkout Asaas
                    </Button>
                  </div>
                </div>
              ) : null}
            </div>
          </CardContent>
        </Card>
      ) : (
        <Card className="border-muted bg-muted/50">
          <CardContent className="p-12 text-center">
            <div className="space-y-6">
              <div className="w-20 h-20 mx-auto bg-muted rounded-full flex items-center justify-center">
                <BookOpen className="h-10 w-10 text-muted-foreground" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-muted-foreground mb-2">
                📝 Deck em Construção
              </h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Este deck ainda não possui flashcards.{" "}
                {isOwner
                  ? "Que tal adicionar alguns?"
                  : "Volte mais tarde para conferir o conteúdo!"}
              </p>
            </div>
            {isOwner && (
              <Button
                onClick={() => router.push(`/deck/${deck.id}/edit`)}
                size="lg"
                className="bg-primary hover:bg-primary/90"
                disabled={deck.flashcards.length === 0}
              >
                <Brain className="h-5 w-5 mr-2" />
                Adicionar Flashcards
              </Button>
            )}
          </CardContent>
        </Card>
      )}

      {/* Modais de Checkout */}
      {deck && needsPurchase && (
        <>
          <CheckoutModal
            isOpen={showCheckout}
            onClose={() => setShowCheckout(false)}
            deck={{
              id: deck.id,
              title: deck.title,
              priceCents: deck.priceCents,
              coverUrl: deck.coverUrl || undefined,
            }}
          />

          <AsaasCheckoutModal
            isOpen={showAsaasCheckout}
            onClose={() => setShowAsaasCheckout(false)}
            deck={{
              id: deck.id,
              title: deck.title,
              priceCents: deck.priceCents,
              coverUrl: deck.coverUrl || undefined,
            }}
          />
        </>
      )}

      {/* Estilos CSS para animações de flip e conteúdo HTML */}
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }

        .flip-card-front {
          opacity: 1;
        }

        .flip-card-front-hidden {
          opacity: 0;
        }

        .flip-card-back {
          opacity: 1;
        }

        .flip-card-back-hidden {
          opacity: 0;
        }

        /* Estilos para conteúdo HTML nos flashcards */
        .wysiwyg-content {
          font-size: inherit;
          line-height: inherit;
          color: inherit;
        }

        .wysiwyg-content p {
          margin-bottom: 0.5rem;
        }

        .wysiwyg-content p:last-child {
          margin-bottom: 0;
        }

        .wysiwyg-content ul,
        .wysiwyg-content ol {
          margin: 0.5rem 0;
          padding-left: 1.5rem;
        }

        .wysiwyg-content li {
          margin-bottom: 0.25rem;
        }

        .wysiwyg-content blockquote {
          border-left: 4px solid currentColor;
          padding-left: 1rem;
          margin: 0.5rem 0;
          opacity: 0.8;
          font-style: italic;
        }

        .wysiwyg-content code {
          background-color: rgba(0, 0, 0, 0.1);
          padding: 0.125rem 0.25rem;
          border-radius: 0.25rem;
          font-family: monospace;
          font-size: 0.875em;
        }

        .wysiwyg-content pre {
          background-color: rgba(0, 0, 0, 0.1);
          padding: 0.75rem;
          border-radius: 0.5rem;
          overflow-x: auto;
          margin: 0.5rem 0;
        }

        .wysiwyg-content pre code {
          background-color: transparent;
          padding: 0;
        }

        .wysiwyg-content img {
          max-width: 100%;
          height: auto;
          border-radius: 0.5rem;
          margin: 0.5rem auto;
          display: block;
        }

        .wysiwyg-content strong,
        .wysiwyg-content b {
          font-weight: bold;
        }

        .wysiwyg-content em,
        .wysiwyg-content i {
          font-style: italic;
        }

        .wysiwyg-content u {
          text-decoration: underline;
        }

        .wysiwyg-content s {
          text-decoration: line-through;
        }

        .wysiwyg-content h1,
        .wysiwyg-content h2,
        .wysiwyg-content h3,
        .wysiwyg-content h4,
        .wysiwyg-content h5,
        .wysiwyg-content h6 {
          font-weight: bold;
          margin: 0.5rem 0 0.25rem 0;
        }

        .wysiwyg-content h1 {
          font-size: 1.5em;
        }
        .wysiwyg-content h2 {
          font-size: 1.375em;
        }
        .wysiwyg-content h3 {
          font-size: 1.25em;
        }
        .wysiwyg-content h4 {
          font-size: 1.125em;
        }
        .wysiwyg-content h5 {
          font-size: 1em;
        }
        .wysiwyg-content h6 {
          font-size: 0.875em;
        }
      `}</style>
    </div>
  );
}
