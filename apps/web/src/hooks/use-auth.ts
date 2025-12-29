import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { toast } from "sonner";

export const useAuth = () => {
  const router = useRouter();

  const {
    data: session,
    isPending: isLoading,
    error,
  } = authClient.useSession();

  const signIn = useCallback(
    async (email: string, password: string) => {
      try {
        const result = await authClient.signIn.email({
          email,
          password,
        });

        if (result.error) {
          toast.error("Erro no login", {
            description: result.error.message || "Credenciais inválidas",
          });
          return { success: false, error: result.error.message };
        }

        toast.success("Login realizado com sucesso!");

        // Redirecionar para o dashboard ou callback URL
        const callbackUrl = new URLSearchParams(window.location.search).get(
          "callbackUrl"
        );
        router.push(callbackUrl || "/dashboard");
        router.refresh();

        return { success: true };
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : "Erro desconhecido";
        toast.error("Erro no login", {
          description: errorMessage,
        });
        return { success: false, error: errorMessage };
      }
    },
    [router]
  );

  const signUp = useCallback(
    async (email: string, password: string, name: string) => {
      try {
        const result = await authClient.signUp.email({
          email,
          password,
          name,
        });

        if (result.error) {
          toast.error("Erro no cadastro", {
            description: result.error.message || "Erro ao criar conta",
          });
          return { success: false, error: result.error.message };
        }

        toast.success("Conta criada com sucesso!");
        router.push("/dashboard");
        router.refresh();

        return { success: true };
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : "Erro desconhecido";
        toast.error("Erro no cadastro", {
          description: errorMessage,
        });
        return { success: false, error: errorMessage };
      }
    },
    [router]
  );

  const signOut = useCallback(async () => {
    try {
      await authClient.signOut();
      toast.success("Logout realizado com sucesso!");
      router.push("/login");
      router.refresh();
    } catch (error) {
      toast.error("Erro no logout", {
        description: "Erro ao fazer logout",
      });
    }
  }, [router]);

  const refreshSession = useCallback(async () => {
    try {
      // Force refresh by calling useSession again
      router.refresh();
    } catch (error) {
      console.error("Error refreshing session:", error);
    }
  }, [router]);

  return {
    // Session data
    session,
    user: session?.user || null,
    isLoading,
    error,

    // Auth state
    isAuthenticated: !!session?.user,
    isAdmin: (session?.user as any)?.role === "admin", // Type assertion for custom role field

    // Auth actions
    signIn,
    signUp,
    signOut,
    refreshSession,
  };
};
