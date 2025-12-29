"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "./ui/button";
import { useState } from "react";

export default function AuthDebug() {
  const { data: session, isPending } = authClient.useSession();
  const [debugInfo, setDebugInfo] = useState<any>(null);

  const checkSession = async () => {
    try {
      // Fazer uma requisição direta para o endpoint de debug
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/debug/session`,
        {
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();
      setDebugInfo(data);
    } catch (error) {
      setDebugInfo({
        error: error instanceof Error ? error.message : "Erro desconhecido",
      });
    }
  };

  const checkCookies = () => {
    const cookies = document.cookie;
    console.log("Cookies:", cookies);
    setDebugInfo({ cookies });
  };

  if (isPending) {
    return <div>Carregando sessão...</div>;
  }

  return (
    <div className="space-y-4 p-4 border rounded">
      <h3 className="font-bold">Debug de Autenticação</h3>

      <div>
        <strong>Sessão do Cliente:</strong>
        <pre className="text-xs  p-2 rounded">
          {JSON.stringify(session, null, 2)}
        </pre>
      </div>

      <div className="space-x-2">
        <Button onClick={checkSession} size="sm">
          Verificar Sessão no Servidor
        </Button>
        <Button onClick={checkCookies} size="sm" variant="outline">
          Ver Cookies
        </Button>
      </div>

      {debugInfo && (
        <div>
          <strong>Info do Servidor:</strong>
          <pre className="text-xs  p-2 rounded">
            {JSON.stringify(debugInfo, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}
