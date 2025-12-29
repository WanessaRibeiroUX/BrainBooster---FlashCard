#!/usr/bin/env bun
import { createClient } from "@libsql/client";

console.log("🔧 Criando tabelas faltantes...");

const client = createClient({
  url: process.env.TURSO_DATABASE_URL!,
  authToken: process.env.TURSO_AUTH_TOKEN!,
});

const missingTables = [
  `CREATE TABLE "user" (
    "_id" TEXT PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "emailVerified" INTEGER NOT NULL,
    "image" TEXT,
    "role" TEXT NOT NULL DEFAULT 'user',
    "asaas_customer_id" TEXT,
    "createdAt" DATETIME NOT NULL,
    "updatedAt" DATETIME NOT NULL
  )`,

  `CREATE TABLE "decks" (
    "id" INTEGER PRIMARY KEY AUTOINCREMENT,
    "user_id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "cover_url" TEXT,
    "is_public" INTEGER NOT NULL DEFAULT 0,
    "price_cents" INTEGER NOT NULL DEFAULT 0,
    "deleted_at" DATETIME,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    FOREIGN KEY ("user_id") REFERENCES "user" ("_id") ON DELETE CASCADE ON UPDATE CASCADE
  )`,

  `CREATE TABLE "asaas_customers" (
    "_id" TEXT PRIMARY KEY,
    "user_id" TEXT NOT NULL,
    "asaas_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "cpf_cnpj" TEXT,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "mobile_phone" TEXT,
    "postal_code" TEXT,
    "address" TEXT,
    "address_number" TEXT,
    "complement" TEXT,
    "province" TEXT,
    "external_reference" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    FOREIGN KEY ("user_id") REFERENCES "user" ("_id") ON DELETE CASCADE ON UPDATE CASCADE
  )`,
];

try {
  for (let i = 0; i < missingTables.length; i++) {
    const stmt = missingTables[i];
    try {
      await client.execute(stmt);
      console.log(`✅ Tabela ${i + 1}/${missingTables.length} criada`);
    } catch (error) {
      console.error(`❌ Erro na tabela ${i + 1}:`, error);
    }
  }

  // Agora cria os índices faltantes
  const missingIndexes = [
    'CREATE UNIQUE INDEX "user_email_key" ON "user"("email")',
    'CREATE UNIQUE INDEX "user_asaas_customer_id_key" ON "user"("asaas_customer_id")',
    'CREATE INDEX "idx_decks_user" ON "decks"("user_id")',
    'CREATE INDEX "idx_decks_public" ON "decks"("is_public")',
    'CREATE INDEX "idx_decks_price" ON "decks"("price_cents")',
    'CREATE UNIQUE INDEX "asaas_customers_user_id_key" ON "asaas_customers"("user_id")',
    'CREATE UNIQUE INDEX "asaas_customers_asaas_id_key" ON "asaas_customers"("asaas_id")',
  ];

  for (let i = 0; i < missingIndexes.length; i++) {
    const stmt = missingIndexes[i];
    try {
      await client.execute(stmt);
      console.log(`✅ Índice ${i + 1}/${missingIndexes.length} criado`);
    } catch (error) {
      console.error(`❌ Erro no índice ${i + 1}:`, error);
    }
  }

  // Verifica o resultado final
  const tables = await client.execute(
    "SELECT name FROM sqlite_master WHERE type='table'"
  );
  console.log(
    "🎉 Tabelas finais:",
    tables.rows.map((row) => (row as any).name)
  );
} catch (error) {
  console.error("❌ Erro:", error);
} finally {
  client.close();
}
