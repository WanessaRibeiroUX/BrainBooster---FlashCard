import type { Context } from "hono";
import { auth } from "@/lib/auth";

export async function debugSessionHandler(c: Context) {
  try {
    const request = new Request(c.req.url, {
      method: c.req.method,
      headers: c.req.header(),
    });

    const session = await auth.api.getSession({
      headers: request.headers,
    });

    return c.json({
      success: true,
      session: session || null,
      headers: Object.fromEntries(request.headers.entries()),
      url: request.url,
    });
  } catch (error) {
    return c.json({
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
      headers: c.req.header(),
      url: c.req.url,
    });
  }
}
