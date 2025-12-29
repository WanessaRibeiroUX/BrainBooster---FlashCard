"use client";

import React from "react";
import { Flame } from "lucide-react";
import { useCountUp } from "@/lib/animations";

interface StatisticsCardProps {
  score: number;
  streak: number;
}

/**
 * Componente isolado para exibir estatísticas animadas do estudo.
 * Usa React.memo para evitar re-renders quando os props não mudam,
 * isolando as atualizações do useCountUp do componente pai.
 */
export const StatisticsCard = React.memo(function StatisticsCard({
  score,
  streak,
}: StatisticsCardProps) {
  // useCountUp agora está isolado neste componente
  // Os re-renders causados pela animação não afetam o componente pai
  const animatedScore = useCountUp(score, 800);
  const animatedStreak = useCountUp(streak, 600);

  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="text-center">
        <div className="text-2xl font-bold text-primary transition-all duration-300">
          {animatedScore}
        </div>
        <div className="text-xs text-primary/80">Pontos</div>
      </div>
      <div className="text-center">
        <div
          className={`text-2xl font-bold text-accent-foreground flex items-center justify-center gap-1 transition-all duration-300 ${
            streak >= 5 ? "animate-pulse-glow" : ""
          }`}
        >
          <Flame
            className={`h-5 w-5 ${streak >= 5 ? "animate-bounce-subtle" : ""}`}
          />
          {animatedStreak}
        </div>
        <div className="text-xs text-accent-foreground/80">Streak</div>
      </div>
    </div>
  );
});
