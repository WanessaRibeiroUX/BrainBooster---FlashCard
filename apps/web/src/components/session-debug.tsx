"use client";
import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";

export default function SessionDebug() {
  const { data: session, isPending, error } = authClient.useSession();
  const [cookies, setCookies] = useState<string>("");
  const [serverUrl, setServerUrl] = useState<string>("");

  useEffect(() => {
    // Verificar cookies do navegador
    setCookies(document.cookie);

    // Verificar URL do servidor
    setServerUrl(process.env.NEXT_PUBLIC_SERVER_URL || "não definido");
  }, []);

  const testSession = async () => {
    try {
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
      console.log("Teste de sessão:", data);
      alert(`Teste de sessão: ${JSON.stringify(data, null, 2)}`);
    } catch (error) {
      console.error("Erro ao testar sessão:", error);
      alert(`Erro: ${error}`);
    }
  };

  if (process.env.NODE_ENV === "production") {
    return null; // Não mostrar em produção
  }

  return (
    <div className="fixed bottom-4 right-4 p-4 bg-gray-100 border rounded-lg max-w-sm text-xs">
      <h3 className="font-bold mb-2">Session Debug</h3>

      <div className="mb-2">
        <strong>Loading:</strong> {isPending ? "Sim" : "Não"}
      </div>

      <div className="mb-2">
        <strong>Error:</strong> {error ? JSON.stringify(error) : "Nenhum"}
      </div>

      <div className="mb-2">
        <strong>Session:</strong> {session ? JSON.stringify(session) : "null"}
      </div>

      <div className="mb-2">
        <strong>Server URL:</strong> {serverUrl}
      </div>

      <div className="mb-2">
        <strong>Cookies:</strong>
        <div className="break-all">{cookies || "Nenhum"}</div>
      </div>

      <button
        onClick={testSession}
        className="bg-blue-500 text-white px-2 py-1 rounded text-xs"
      >
        Testar Sessão
      </button>
    </div>
  );
}
