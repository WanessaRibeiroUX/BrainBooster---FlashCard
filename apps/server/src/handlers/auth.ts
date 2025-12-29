import { auth } from "@/lib/auth";
import type { Context } from "hono";

export async function authHandler(c: Context) {
  let body: ArrayBuffer | undefined;

  // Só ler o body se não for GET ou HEAD
  if (c.req.method !== "GET" && c.req.method !== "HEAD") {
    try {
      body = await c.req.arrayBuffer();
    } catch (error) {
      console.error("Erro ao ler body:", error);
      body = undefined;
    }
  }

  const request = new Request(c.req.url, {
    method: c.req.method,
    headers: c.req.header(),
    body,
  });

  const response = await auth.handler(request);
  console.log("Auth response status:", response);
  // Convert headers to a plain object for Hono
  const headers: Record<string, string> = {};
  response.headers.forEach((value, key) => {
    headers[key] = value;
  });

  const responseBody = await response.arrayBuffer();
  return new Response(responseBody, {
    status: response.status,
    headers: headers,
  });
}
