import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Lista de caminhos públicos que não requerem autenticação
const publicPaths = ["/", "/login", "/marketplace", "/favicon.ico"];

// Prefixos de caminhos públicos
const publicPathPrefixes = ["/deck/", "/api/", "/_next/", "/static/"];

// Lista de caminhos que requerem autenticação de admin
const adminPaths = ["/admin"];

// Prefixos de caminhos que requerem autenticação de admin
const adminPathPrefixes = ["/admin/"];

function isPublicPath(path: string): boolean {
  return (
    publicPaths.includes(path) ||
    publicPathPrefixes.some((prefix) => path.startsWith(prefix))
  );
}

function isAdminPath(path: string): boolean {
  return (
    adminPaths.includes(path) ||
    adminPathPrefixes.some((prefix) => path.startsWith(prefix))
  );
}

function hasValidSession(request: NextRequest): boolean {
  // Better Auth session cookies - verificar múltiplos possíveis nomes
  return (
    request.cookies.has("better-auth.session_token") ||
    request.cookies.has("__session") ||
    request.cookies.has("session") ||
    request.cookies.has("authjs.session-token")
  ); // Fallback para outras libs
}

function getUserRole(request: NextRequest): string | null {
  // Tentar extrair role do cookie se disponível
  const sessionCookie = request.cookies.get("better-auth.session_token");
  if (sessionCookie) {
    try {
      // Em produção, seria necessário verificar e decodificar o token adequadamente
      // Por simplicidade, assumiremos que o role está disponível via outro método
      return request.cookies.get("user-role")?.value || "user";
    } catch {
      return "user";
    }
  }
  return null;
}

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const hasSession = hasValidSession(request);
  const userRole = getUserRole(request);

  // Log para debugging em desenvolvimento
  if (process.env.NODE_ENV === "development") {
    console.log(
      `🛡️ Middleware: ${request.method} ${path} | Session: ${hasSession} | Role: ${userRole}`
    );
  }

  // Redirecionar usuários autenticados para longe da página de login
  if (path === "/login" && hasSession) {
    const callbackUrl =
      request.nextUrl.searchParams.get("callbackUrl") || "/dashboard";
    return NextResponse.redirect(new URL(callbackUrl, request.url));
  }

  // Verificar acesso a rotas de admin
  if (isAdminPath(path)) {
    if (!hasSession) {
      const redirectUrl = new URL("/login", request.url);
      redirectUrl.searchParams.set("callbackUrl", path);
      return NextResponse.redirect(redirectUrl);
    }

    if (userRole !== "admin") {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
  }

  // Redirecionar usuários não autenticados para login em rotas protegidas
  if (!isPublicPath(path) && !hasSession) {
    const redirectUrl = new URL("/login", request.url);
    redirectUrl.searchParams.set("callbackUrl", path);
    return NextResponse.redirect(redirectUrl);
  }

  // Criar resposta com headers de segurança
  const response = NextResponse.next();

  // Headers de segurança básicos
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-XSS-Protection", "1; mode=block");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=(), payment=()"
  );

  // Headers específicos para produção
  if (process.env.NODE_ENV === "production") {
    response.headers.set(
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains"
    );
    response.headers.set("Cross-Origin-Opener-Policy", "same-origin");
    response.headers.set("Cross-Origin-Embedder-Policy", "credentialless");

    // CSP básico para produção
    response.headers.set(
      "Content-Security-Policy",
      "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https://api.sistemacards.com;"
    );
  }

  // Headers para suporte a cross-domain cookies
  if (isPublicPath(path) || path.startsWith("/api/")) {
    response.headers.set("Access-Control-Allow-Credentials", "true");
  }

  return response;
}

export const config = {
  // Definir quais caminhos devem ser tratados por este middleware
  matcher: [
    // Corresponder a todos os caminhos que requerem autenticação
    "/dashboard/:path*",
    "/my-decks/:path*",
    "/purchases/:path*",
    "/favorites/:path*",
    "/admin/:path*",
    // Corresponder a páginas de autenticação
    "/login",
    // Excluir caminhos específicos
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
