import { ErrorHandler, NotFoundHandler } from "hono";
import { ContentfulStatusCode, StatusCode } from "hono/utils/http-status";

// Error Handler
export const errorHandler: ErrorHandler = (err, c) => {
  const currentStatus =
    "status" in err ? err.status : c.newResponse(null).status;

  const statusCode =
    currentStatus !== 200 ? (currentStatus as StatusCode) : 500;
  const env = c.env?.NODE_ENV || process.env?.NODE_ENV;

  console.error("Application Error:", {
    message: err?.message,
    status: statusCode,
    stack: err?.stack,
    url: c.req.url,
    method: c.req.method,
  });

  return c.json(
    {
      success: false,
      message: err?.message || "Internal Server Error",
      ...(env === "development" && { stack: err?.stack }),
    },
    statusCode as ContentfulStatusCode
  );
};

// Not Found Handler
export const notFound: NotFoundHandler = (c) => {
  return c.json(
    {
      success: false,
      message: `Not Found - [${c.req.method}]:[${c.req.url}]`,
    },
    404
  );
};
