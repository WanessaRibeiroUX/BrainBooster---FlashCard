import { Context, Next } from "hono";

// Middleware de rate limiting simples baseado em IP
const requestCounts = new Map<string, { count: number; resetTime: number }>();

export const rateLimitMiddleware = (
  maxRequests = 100,
  windowMs = 15 * 60 * 1000
) => {
  return async (c: Context, next: Next) => {
    const ip =
      c.req.header("x-forwarded-for") || c.req.header("x-real-ip") || "unknown";
    const now = Date.now();

    const clientData = requestCounts.get(ip);

    if (!clientData || now > clientData.resetTime) {
      // Reset or initialize counter
      requestCounts.set(ip, { count: 1, resetTime: now + windowMs });
    } else {
      // Increment counter
      clientData.count++;

      if (clientData.count > maxRequests) {
        return c.json(
          {
            success: false,
            message: "Too Many Requests",
            error: `Rate limit exceeded. Try again in ${Math.ceil(
              (clientData.resetTime - now) / 1000
            )} seconds.`,
          },
          429
        );
      }
    }

    await next();
  };
};

// Middleware de timeout para requisições
export const timeoutMiddleware = (timeoutMs = 30000) => {
  return async (c: Context, next: Next) => {
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject(new Error("Request timeout")), timeoutMs);
    });

    try {
      await Promise.race([next(), timeoutPromise]);
    } catch (error) {
      if (error instanceof Error && error.message === "Request timeout") {
        return c.json(
          {
            success: false,
            message: "Request Timeout",
            error: "The request took too long to process",
          },
          408
        );
      }
      throw error;
    }
  };
};

// Middleware de validação de Content-Type para POST/PUT
export const contentTypeMiddleware = (requiredTypes = ["application/json"]) => {
  return async (c: Context, next: Next) => {
    const method = c.req.method;

    if (["POST", "PUT", "PATCH"].includes(method)) {
      const contentType = c.req.header("content-type");

      if (
        !contentType ||
        !requiredTypes.some((type) => contentType.includes(type))
      ) {
        return c.json(
          {
            success: false,
            message: "Invalid Content-Type",
            error: `Expected one of: ${requiredTypes.join(", ")}`,
          },
          400
        );
      }
    }

    await next();
  };
};

// Middleware de segurança básica
export const securityMiddleware = async (c: Context, next: Next) => {
  // Security headers
  c.res.headers.set("X-Content-Type-Options", "nosniff");
  c.res.headers.set("X-Frame-Options", "DENY");
  c.res.headers.set("X-XSS-Protection", "1; mode=block");
  c.res.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");

  // Remove server header for security
  c.res.headers.delete("Server");

  await next();
};
