import prisma from "../prisma";

async function createTestUser() {
  const email = "user@gmail.com";
  const password = "user1234";

  // Hash da senha usando Bun
  const hashedPassword = await Bun.password.hash(password, {
    algorithm: "bcrypt",
    cost: 10,
  });

  try {
    // Verificar se usuário já existe
    const existing = await prisma.user.findUnique({
      where: { email },
    });

    if (existing) {
      console.log("❌ Usuário já existe!");
      console.log(`Email: ${email}`);
      console.log(`ID: ${existing.id}`);
      return;
    }

    // Criar usuário
    const user = await prisma.user.create({
      data: {
        id: crypto.randomUUID(),
        email,
        name: "Usuário Teste",
        emailVerified: true,
        role: "user", // Pode ser alterado para "admin" depois
        createdAt: new Date(),
        updatedAt: new Date(),
        accounts: {
          create: {
            id: crypto.randomUUID(),
            accountId: email,
            providerId: "credential",
            password: hashedPassword,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        },
      },
    });

    console.log("✅ Usuário criado com sucesso!");
    console.log(`Email: ${email}`);
    console.log(`Senha: ${password}`);
    console.log(`ID: ${user.id}`);
    console.log(`Role: ${user.role}`);
    console.log("\n💡 Para tornar admin, execute:");
    console.log(`bun run make-admin ${email}`);
  } catch (error) {
    console.error("❌ Erro ao criar usuário:", error);
  } finally {
    await prisma.$disconnect();
  }
}

createTestUser();
