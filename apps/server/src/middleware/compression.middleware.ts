import { Context, Next } from "hono";

// Middleware simples sem compressão - apenas passa adiante
export const compressionMiddleware = async (c: Context, next: Next) => {
  await next();
};
