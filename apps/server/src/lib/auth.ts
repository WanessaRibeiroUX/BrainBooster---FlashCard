import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "../../prisma";
import "../types/auth";

const isProduction = process.env.NODE_ENV === "production";

// Verificar variáveis de ambiente obrigatórias
const requiredEnvVars = {
  BETTER_AUTH_SECRET: process.env.BETTER_AUTH_SECRET,
  BETTER_AUTH_URL: process.env.BETTER_AUTH_URL,
  CORS_ORIGIN: process.env.CORS_ORIGIN,
};

for (const [key, value] of Object.entries(requiredEnvVars)) {
  if (!value) {
    throw new Error(`Variável de ambiente obrigatória não encontrada: ${key}`);
  }
}

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "sqlite",
  }),
  baseURL: process.env.BETTER_AUTH_URL!,
  secret: process.env.BETTER_AUTH_SECRET!,
  trustedOrigins: [
    process.env.CORS_ORIGIN!,
    "https://sistemacards.com",
    "https://www.sistemacards.com",
    ...(isProduction ? [] : ["http://localhost:3001"]), // Desenvolvimento apenas
  ],
  user: {
    modelName: "User", // Usar o modelo Prisma existente
    additionalFields: {
      role: {
        type: "string",
        defaultValue: "user",
        required: false,
      },
    },
  },
  session: {
    modelName: "Session", // Usar o modelo Prisma existente
    cookieCache: {
      enabled: true,
      maxAge: 60 * 60 * 24 * 7, // 7 days
    },
  },
  account: {
    modelName: "Account", // Usar o modelo Prisma existente
    accountLinking: {
      enabled: false, // Desabilitar linking de contas sociais
    },
  },
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: false, // Sem verificação de email
    minPasswordLength: 8,
    maxPasswordLength: 128,
    autoSignIn: true,
    // Hash de senha usando Bun (se disponível) ou Node.js
    password: {
      hash: async (password) => {
        // Usar bcrypt nativo se disponível ou fallback
        if (typeof Bun !== "undefined" && Bun.password) {
          return await Bun.password.hash(password, {
            algorithm: "bcrypt",
            cost: 10,
          });
        } else {
          // Fallback para Node.js com bcrypt
          const bcrypt = await import("bcryptjs");
          return await bcrypt.hash(password, 10);
        }
      },
      verify: async ({ password, hash }) => {
        if (typeof Bun !== "undefined" && Bun.password) {
          return await Bun.password.verify(password, hash);
        } else {
          const bcrypt = await import("bcryptjs");
          return await bcrypt.compare(password, hash);
        }
      },
    },
  },
  advanced: {
    crossSubDomainCookies: {
      enabled: isProduction,
      domain: isProduction ? "sistemacards.com" : undefined,
    },
    ...(isProduction && {
      defaultCookieAttributes: {
        sameSite: "none",
        secure: true,
        partitioned: true,
      },
    }),
  },
});
