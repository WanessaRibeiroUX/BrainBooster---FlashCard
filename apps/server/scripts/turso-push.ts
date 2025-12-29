#!/usr/bin/env bun
import { execSync } from "child_process";
import fs from "fs";
import path from "path";

// Lê todos os arquivos SQL do schema
const schemaDir = path.join(__dirname, "../prisma/schema");
const sqlFiles = fs
  .readdirSync(schemaDir)
  .filter((file) => file.endsWith(".sql"));

console.log("🚀 Sincronizando schema com Turso...");

// Para cada arquivo SQL, executa no Turso
for (const sqlFile of sqlFiles) {
  const sqlPath = path.join(schemaDir, sqlFile);
  const sqlContent = fs.readFileSync(sqlPath, "utf-8");

  console.log(`📄 Executando ${sqlFile}...`);

  try {
    // Executa o SQL no Turso usando o CLI
    execSync(
      `turso db shell database-blue-flower-vercel-icfg-m8pls5nevioe3acy0fww8bnl < ${sqlPath}`,
      {
        stdio: "inherit",
        env: {
          ...process.env,
          TURSO_AUTH_TOKEN: process.env.TURSO_AUTH_TOKEN,
        },
      }
    );
    console.log(`✅ ${sqlFile} executado com sucesso`);
  } catch (error) {
    console.error(`❌ Erro ao executar ${sqlFile}:`, error);
  }
}

console.log("🎉 Sincronização concluída!");
