#!/usr/bin/env bun
import { createClient } from "@libsql/client";

console.log("🧪 Testando conexão com o Turso...");

const client = createClient({
  url: process.env.TURSO_DATABASE_URL!,
  authToken: process.env.TURSO_AUTH_TOKEN!,
});

try {
  // Testa a conexão básica
  const result = await client.execute("SELECT 1 as test");
  console.log("✅ Conexão com Turso estabelecida!");
  console.log("📊 Resultado do teste:", result);

  // Lista as tabelas existentes
  const tables = await client.execute(
    "SELECT name FROM sqlite_master WHERE type='table'"
  );
  console.log("📋 Tabelas no banco:", tables.rows);

  // Se não há tabelas, sugere aplicar o schema
  if (tables.rows.length === 0) {
    console.log("⚠️  Banco está vazio. Você pode aplicar o schema usando:");
    console.log("   turso db shell [database-name] < turso-schema.sql");
  }
} catch (error) {
  console.error("❌ Erro ao conectar com Turso:", error);
} finally {
  client.close();
}
