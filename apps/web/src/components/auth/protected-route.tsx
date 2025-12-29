"use client";

import { useAuth } from "@/hooks/use-auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireAdmin?: boolean;
  fallback?: React.ReactNode;
}

export function ProtectedRoute({
  children,
  requireAdmin = false,
  fallback = null,
}: ProtectedRouteProps) {
  const { isLoading, isAuthenticated, isAdmin } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading) {
      if (!isAuthenticated) {
        const currentPath = window.location.pathname;
        router.push(`/login?callbackUrl=${encodeURIComponent(currentPath)}`);
        return;
      }

      if (requireAdmin && !isAdmin) {
        router.push("/dashboard");
        return;
      }
    }
  }, [isLoading, isAuthenticated, isAdmin, requireAdmin, router]);

  // Show loading state
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  // Show fallback if not authenticated
  if (!isAuthenticated) {
    return fallback;
  }

  // Show fallback if admin required but user is not admin
  if (requireAdmin && !isAdmin) {
    return fallback;
  }

  return <>{children}</>;
}

interface AuthGuardProps {
  children: React.ReactNode;
}

export function AuthGuard({ children }: AuthGuardProps) {
  return <ProtectedRoute>{children}</ProtectedRoute>;
}

export function AdminGuard({ children }: AuthGuardProps) {
  return <ProtectedRoute requireAdmin>{children}</ProtectedRoute>;
}
