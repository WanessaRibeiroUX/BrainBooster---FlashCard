#!/usr/bin/env bun
import { createClient } from "@libsql/client";

console.log("🧹 Limpando banco Turso...");

const client = createClient({
  url: process.env.TURSO_DATABASE_URL!,
  authToken: process.env.TURSO_AUTH_TOKEN!,
});

try {
  // Lista todas as tabelas
  const tables = await client.execute(
    "SELECT name FROM sqlite_master WHERE type='table'"
  );

  console.log(
    "📋 Tabelas encontradas:",
    tables.rows.map((row) => (row as any).name)
  );

  // Remove todas as tabelas
  for (const table of tables.rows) {
    const tableName = (table as any).name;
    if (tableName !== "sqlite_sequence") {
      // Preserva a tabela de sistema
      try {
        await client.execute(`DROP TABLE IF EXISTS "${tableName}"`);
        console.log(`🗑️  Tabela ${tableName} removida`);
      } catch (error) {
        console.error(`❌ Erro ao remover ${tableName}:`, error);
      }
    }
  }

  console.log("✅ Banco limpo!");
} catch (error) {
  console.error("❌ Erro ao limpar banco:", error);
} finally {
  client.close();
}
