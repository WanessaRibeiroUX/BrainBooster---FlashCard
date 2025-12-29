#!/usr/bin/env bun
import { createClient } from "@libsql/client";
import fs from "fs";

console.log("🚀 Aplicando schema no Turso...");

const client = createClient({
  url: process.env.TURSO_DATABASE_URL!,
  authToken: process.env.TURSO_AUTH_TOKEN!,
});

try {
  // Lê o arquivo de schema
  const schema = fs.readFileSync("turso-schema.sql", "utf-8");

  // Divide as instruções SQL
  const allStatements = schema
    .split(";")
    .map((stmt) => stmt.trim())
    .filter((stmt) => stmt.length > 0 && !stmt.startsWith("--"));

  // Separa CREATE TABLE dos CREATE INDEX
  const createTableStatements = allStatements.filter((stmt) =>
    stmt.toUpperCase().startsWith("CREATE TABLE")
  );

  const createIndexStatements = allStatements.filter(
    (stmt) =>
      stmt.toUpperCase().startsWith("CREATE INDEX") ||
      stmt.toUpperCase().startsWith("CREATE UNIQUE INDEX")
  );

  console.log(
    `📝 Executando ${createTableStatements.length} tabelas primeiro...`
  );

  // Executa as tabelas primeiro
  for (let i = 0; i < createTableStatements.length; i++) {
    const stmt = createTableStatements[i];
    try {
      await client.execute(stmt);
      console.log(`✅ Tabela ${i + 1}/${createTableStatements.length} criada`);
    } catch (error) {
      console.error(
        `❌ Erro na tabela ${i + 1}:`,
        stmt.substring(0, 50) + "..."
      );
      console.error("Erro:", error);
    }
  }

  console.log(`📝 Executando ${createIndexStatements.length} índices...`);

  // Depois executa os índices
  for (let i = 0; i < createIndexStatements.length; i++) {
    const stmt = createIndexStatements[i];
    try {
      await client.execute(stmt);
      console.log(`✅ Índice ${i + 1}/${createIndexStatements.length} criado`);
    } catch (error) {
      console.error(
        `❌ Erro no índice ${i + 1}:`,
        stmt.substring(0, 50) + "..."
      );
      console.error("Erro:", error);
    }
  }

  // Verifica se as tabelas foram criadas
  const tables = await client.execute(
    "SELECT name FROM sqlite_master WHERE type='table'"
  );
  console.log("🎉 Schema aplicado com sucesso!");
  console.log(
    "📋 Tabelas criadas:",
    tables.rows.map((row) => (row as any).name)
  );
} catch (error) {
  console.error("❌ Erro ao aplicar schema:", error);
} finally {
  client.close();
}
