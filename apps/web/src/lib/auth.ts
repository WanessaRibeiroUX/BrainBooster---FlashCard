import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL
    ? `${process.env.NEXT_PUBLIC_SERVER_URL}/api/auth`
    : "http://localhost:3000/api/auth",
  // Configuração de credenciais para cross-domain cookies
  fetchOptions: {
    credentials: "include",
  },
});

export const { signIn, signUp, signOut, useSession, getSession } = authClient;
