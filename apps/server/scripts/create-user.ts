import prisma from "../prisma";

const email = "teste@gmail.com";
const password = "teste123";
const name = "Usuário Teste";

async function createUser() {
  try {
    // Hash da senha usando Bun.password
    const hashedPassword = await Bun.password.hash(password, {
      algorithm: "bcrypt",
      cost: 10,
    });

    // Criar usuário
    const user = await prisma.user.create({
      data: {
        email,
        name,
        emailVerified: true,
        role: "user",
      },
    });

    // Criar account com senha
    await prisma.account.create({
      data: {
        userId: user.id,
        accountId: user.id,
        providerId: "credential",
        password: hashedPassword,
      },
    });

    console.log("✅ Usuário criado com sucesso!");
    console.log(`📧 Email: ${email}`);
    console.log(`🔑 Senha: ${password}`);
    console.log(`👤 ID: ${user.id}`);
  } catch (error: any) {
    if (error.code === "P2002") {
      console.log("⚠️  Usuário já existe!");
    } else {
      console.error("❌ Erro ao criar usuário:", error.message);
    }
  } finally {
    await prisma.$disconnect();
  }
}

createUser();
