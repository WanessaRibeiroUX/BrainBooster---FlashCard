import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const res = NextResponse.next();

  // Lista de origens permitidas
  const allowedOrigins = [
    process.env.CORS_ORIGIN,
    "https://flash-cards-web-beryl.vercel.app",
    "http://localhost:3001", // Para desenvolvimento
  ].filter(Boolean);

  const origin = request.headers.get("origin");

  // Verifica se a origem está na lista de permitidas
  if (origin && allowedOrigins.includes(origin)) {
    res.headers.set("Access-Control-Allow-Origin", origin);
  }

  res.headers.set("Access-Control-Allow-Credentials", "true");
  res.headers.set(
    "Access-Control-Allow-Methods",
    "GET,POST,OPTIONS,PUT,DELETE"
  );
  res.headers.set(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, x-trpc-source"
  );

  // Handle preflight requests
  if (request.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: res.headers });
  }

  return res;
}

export const config = {
  matcher: "/:path*",
};
