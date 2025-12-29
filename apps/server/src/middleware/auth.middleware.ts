import { Context, Next } from "hono";
import { auth } from "../lib/auth";

// Middleware para proteger rotas de acesso não autorizado
export const protect = async (c: Context, next: Next) => {
  try {
    // Extrair a sessão dos headers da requisição
    const session = await auth.api.getSession({ headers: c.req.raw.headers });

    // Se não há sessão válida ou usuário, retornar não autorizado
    if (!session || !session.user) {
      return c.json(
        {
          success: false,
          message: "Unauthorized",
          error: "No valid session found",
        },
        401
      );
    }

    // Adicionar usuário e sessão às variáveis do contexto
    c.set("user", session.user);
    c.set("session", session.session);

    // Continuar para o próximo middleware/handler
    await next();
  } catch (error) {
    console.error("Error in protect middleware:", error);
    return c.json(
      {
        success: false,
        message: "Authentication Error",
        error: "Failed to validate session",
      },
      500
    );
  }
};

// Middleware para proteger rotas de admin
export const isAdmin = async (c: Context, next: Next) => {
  try {
    // Extrair a sessão dos headers da requisição
    const session = await auth.api.getSession({ headers: c.req.raw.headers });

    // Se não há sessão válida ou usuário, retornar não autorizado
    if (!session || !session.user) {
      return c.json(
        {
          success: false,
          message: "Unauthorized",
          error: "No valid session found",
        },
        401
      );
    }

    // Verificar se o usuário é admin
    if (session.user.role !== "admin") {
      return c.json(
        {
          success: false,
          message: "Forbidden",
          error: "User is not an admin",
        },
        403
      );
    }

    // Adicionar usuário e sessão às variáveis do contexto
    c.set("user", session.user);
    c.set("session", session.session);

    // Continuar para o próximo middleware/handler
    await next();
  } catch (error) {
    console.error("Error in isAdmin middleware:", error);
    return c.json(
      {
        success: false,
        message: "Authentication Error",
        error: "Failed to validate admin session",
      },
      500
    );
  }
};
