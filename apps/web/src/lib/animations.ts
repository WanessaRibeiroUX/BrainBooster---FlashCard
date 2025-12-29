/**
 * Biblioteca de animações reutilizáveis
 * Para uso com Tailwind CSS e tw-animate-css
 */

// ==================== CSS Class Helpers ====================

/**
 * Classes de animação de entrada com delay escalonado
 */
export const getStaggerDelay = (index: number, delayMs: number = 100) => {
  return {
    animationDelay: `${index * delayMs}ms`,
  };
};

/**
 * Gera classes de stagger para múltiplos elementos
 */
export const staggerClasses = (totalItems: number, baseDelay: number = 100) => {
  return Array.from({ length: totalItems }, (_, i) => ({
    animationDelay: `${i * baseDelay}ms`,
  }));
};

// ==================== Animation Variants ====================

/**
 * Fade in simples
 */
export const fadeIn = "animate-fade-in animate-duration-500";

/**
 * Fade in com slide up
 */
export const fadeInUp =
  "animate-fade-in-up animate-duration-600 animate-ease-out";

/**
 * Fade in com slide down
 */
export const fadeInDown =
  "animate-fade-in-down animate-duration-500 animate-ease-out";

/**
 * Fade in com slide left
 */
export const fadeInLeft =
  "animate-fade-in-left animate-duration-500 animate-ease-out";

/**
 * Fade in com slide right
 */
export const fadeInRight =
  "animate-fade-in-right animate-duration-500 animate-ease-out";

/**
 * Scale up suave
 */
export const scaleIn = "animate-scale-in animate-duration-400 animate-ease-out";

/**
 * Bounce suave
 */
export const bounceIn = "animate-bounce-in animate-duration-600";

/**
 * Pulse suave
 */
export const pulse = "animate-pulse";

/**
 * Spin para loaders
 */
export const spin = "animate-spin";

// ==================== Hover Effects ====================

/**
 * Lift effect para cards em hover
 */
export const hoverLift =
  "transition-all duration-300 hover:shadow-xl hover:-translate-y-1";

/**
 * Scale up em hover
 */
export const hoverScale = "transition-transform duration-300 hover:scale-105";

/**
 * Tilt 3D suave (requer perspective no container)
 */
export const hoverTilt =
  "transition-transform duration-300 hover:rotate-1 hover:scale-105";

/**
 * Glow effect em hover
 */
export const hoverGlow =
  "transition-all duration-300 hover:shadow-lg hover:shadow-primary/50";

/**
 * Shimmer effect (requer @keyframes shimmer no CSS)
 */
export const shimmer =
  "animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent bg-[length:200%_100%]";

// ==================== Complex Animations ====================

/**
 * Counter animation para números (usar com hook useCountUp)
 */
export const counterAnimation = {
  duration: 1500,
  ease: "easeOut",
};

/**
 * Progress bar animation
 */
export const progressBar = "transition-all duration-1000 ease-out";

/**
 * Flip card 3D
 */
export const flipCard = {
  container: "perspective-1000",
  inner:
    "relative w-full h-full transition-transform duration-500 transform-style-3d",
  front: "absolute w-full h-full backface-hidden",
  back: "absolute w-full h-full backface-hidden rotate-y-180",
};

/**
 * Stagger container (para uso com children)
 */
export const staggerContainer = "space-y-2";

// ==================== React Hooks para Animações ====================

/**
 * Hook para counter animation simples
 */
export const useCountUp = (
  end: number,
  duration: number = 1500,
  start: number = 0
) => {
  const [count, setCount] = React.useState(start);

  React.useEffect(() => {
    const startTime = Date.now();
    const endTime = startTime + duration;

    const updateCount = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      const easeOutProgress = 1 - Math.pow(1 - progress, 3); // Ease out cubic
      const currentCount = Math.floor(start + (end - start) * easeOutProgress);

      setCount(currentCount);

      if (now < endTime) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(updateCount);
  }, [end, duration, start]);

  return count;
};

/**
 * Hook para detectar quando elemento entra na viewport
 */
export const useInView = (options?: IntersectionObserverInit) => {
  const [isInView, setIsInView] = React.useState(false);
  const [node, setNode] = React.useState<Element | null>(null);

  React.useEffect(() => {
    if (!node) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, options);

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [node, options]);

  return [setNode, isInView] as const;
};

// ==================== Utilities ====================

/**
 * Combina classes CSS de forma segura
 */
export const cn = (...classes: (string | undefined | null | false)[]) => {
  return classes.filter(Boolean).join(" ");
};

/**
 * Gera classe de delay dinâmico
 */
export const delayClass = (index: number, baseDelayMs: number = 100) => {
  return `[animation-delay:${index * baseDelayMs}ms]`;
};

/**
 * Prefers reduced motion check
 */
export const prefersReducedMotion = () => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

// Import React para hooks
import React from "react";
