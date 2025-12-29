import { Hono } from "hono";
import { serve } from "@hono/node-server";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { appRouter } from "./routers";
import { createContext } from "./lib/context";
import { authHandler } from "./handlers/auth";
import { purchasesHandler } from "./handlers/purchases";
import { asaasWebhookHandler } from "./handlers/webhooks";
import { debugSessionHandler } from "./handlers/debug";
import { errorHandler, notFound } from "./middleware/error.middleware";
import {
  rateLimitMiddleware,
  timeoutMiddleware,
  securityMiddleware,
} from "./middleware/security.middleware";
import type { Context } from "hono";
import { auth } from "./lib/auth";

// Inicializar a aplicação Hono com tipos das variáveis
const app = new Hono<{
  Variables: {
    user: typeof auth.$Infer.Session.user | null;
    session: typeof auth.$Infer.Session.session | null;
  };
}>();

// Configuração CORS
const isProduction = process.env.NODE_ENV === "production";

const allowedOrigins = [
  process.env.CORS_ORIGIN,
  ...(isProduction
    ? ["https://sistemacards.com", "https://www.sistemacards.com"]
    : [
        "https://sistemacards.com",
        "https://www.sistemacards.com",
        "https://flash-cards-web-beryl.vercel.app",
        "http://localhost:3001", // Para desenvolvimento
      ]),
].filter(Boolean) as string[];

console.log("Allowed Origins:", allowedOrigins);

// Middleware de logging
app.use("*", logger());

// Middleware de segurança
app.use("*", securityMiddleware);

// Middleware de rate limiting (100 requests por 15 minutos)
app.use("*", rateLimitMiddleware(100, 15 * 60 * 1000));

// Middleware de timeout (30 segundos)
app.use("*", timeoutMiddleware(30000));

// Note: Removido o middleware compress nativo do Hono devido a incompatibilidade com Node.js
// O compressionMiddleware acima adiciona os headers apropriados

// Configuração CORS
app.use(
  "*",
  cors({
    origin: allowedOrigins,
    credentials: true,
    allowMethods: ["GET", "POST", "OPTIONS", "PUT", "DELETE"],
    allowHeaders: [
      "Content-Type",
      "Authorization",
      "x-trpc-source",
      "Cookie",
      "Set-Cookie",
    ],
    exposeHeaders: ["Set-Cookie"],
    maxAge: 86400, // Cache preflight por 1 dia
  })
);

// Health check route
app.get("/", (c: Context) => {
  return c.json({
    message: "Flash Cards API",
    timestamp: new Date().toISOString(),
    version: "1.0.0",
  });
});

// Better Auth routes - usando handler nativo do Hono
app.all("/api/auth/*", async (c) => {
  return await auth.handler(c.req.raw);
});

// tRPC routes
app.all("/trpc/*", async (c: Context) => {
  const request = new Request(c.req.url, {
    method: c.req.method,
    headers: c.req.header(),
    body:
      c.req.method !== "GET" && c.req.method !== "HEAD"
        ? await c.req.arrayBuffer()
        : undefined,
  });

  return fetchRequestHandler({
    req: request,
    router: appRouter,
    createContext: () => createContext(request),
    endpoint: "/trpc",
  });
});

// API Routes - usando handlers nativos do Hono
app.post("/api/purchases", purchasesHandler);
app.post("/webhook/asaas", asaasWebhookHandler);
app.get("/api/debug/session", debugSessionHandler);

// Error handlers (devem vir por último)
app.onError(errorHandler);
app.notFound(notFound);

const port = parseInt(process.env.PORT || "3000");

console.log(`🚀 Flash Cards Server running on port ${port}`);
console.log(
  `📱 Better Auth URL: ${
    process.env.BETTER_AUTH_URL || "http://localhost:3000/api/auth"
  }`
);
console.log(`🌐 CORS Origins: ${allowedOrigins.join(", ")}`);

serve({
  fetch: app.fetch,
  port,
});
