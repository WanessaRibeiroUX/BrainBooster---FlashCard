#!/usr/bin/env bun
import Database from "bun:sqlite";
import fs from "fs";
import path from "path";

// Tenta localizar o banco dev.db
const dbPaths = [
  "dev.db",
  "prisma/schema/dev.db",
  path.join(process.cwd(), "dev.db"),
  path.join(process.cwd(), "prisma", "schema", "dev.db"),
];

let dbPath = "";
for (const testPath of dbPaths) {
  if (fs.existsSync(testPath)) {
    dbPath = testPath;
    break;
  }
}

if (!dbPath) {
  console.error("❌ Banco dev.db não encontrado!");
  console.log("Caminhos testados:", dbPaths);
  process.exit(1);
}

console.log("✅ Banco encontrado em:", dbPath);

const db = new Database(dbPath);

console.log("🔍 Verificando tabelas no banco...");

// Lista todas as tabelas
const allTables = db
  .query("SELECT name FROM sqlite_master WHERE type='table';")
  .all();
console.log("Tabelas encontradas:", allTables);

// Extrai o schema SQL
const tables = db
  .query(
    "SELECT sql FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%';"
  )
  .all();

console.log("Schemas encontrados:", tables);

let schemaSQL = "";
for (const table of tables) {
  if ((table as any).sql) {
    schemaSQL += (table as any).sql + ";\n\n";
  }
}

// Extrai os índices
const indexes = db
  .query(
    "SELECT sql FROM sqlite_master WHERE type='index' AND name NOT LIKE 'sqlite_%';"
  )
  .all();

for (const index of indexes) {
  if ((index as any).sql) {
    schemaSQL += (index as any).sql + ";\n\n";
  }
}

// Salva o schema
fs.writeFileSync("turso-schema.sql", schemaSQL);

console.log("📄 Schema extraído para turso-schema.sql");
console.log("Conteúdo do schema:", schemaSQL.substring(0, 500) + "...");

db.close();
