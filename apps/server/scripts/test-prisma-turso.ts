#!/usr/bin/env bun
import prisma from "../prisma/index";

console.log("🧪 Testando Prisma com Turso...");

try {
  // Testa uma query simples
  const userCount = await prisma.user.count();
  console.log("✅ Conexão Prisma-Turso funcionando!");
  console.log("👥 Usuários no banco:", userCount);

  // Lista algumas tabelas através do Prisma
  const deckCount = await prisma.deck.count();
  console.log("📚 Decks no banco:", deckCount);

  console.log("🎉 Tudo funcionando corretamente!");
} catch (error) {
  console.error("❌ Erro ao testar Prisma:", error);
} finally {
  await prisma.$disconnect();
}
