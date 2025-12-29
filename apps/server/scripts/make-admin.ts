import prisma from "../prisma/index";

async function makeUserAdmin(userEmail: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { email: userEmail },
    });

    if (!user) {
      console.error(`Usuário com email ${userEmail} não encontrado.`);
      return;
    }

    await prisma.user.update({
      where: { id: user.id },
      data: { role: "admin" },
    });

    console.log(
      `✅ Usuário ${user.name} (${user.email}) agora é administrador!`
    );
  } catch (error) {
    console.error("Erro ao tornar usuário admin:", error);
  } finally {
    await prisma.$disconnect();
  }
}

// Substitua pelo email do usuário que você quer tornar admin
const userEmail = process.argv[2];

if (!userEmail) {
  console.log("Uso: bun run make-admin.ts <email-do-usuario>");
  process.exit(1);
}

makeUserAdmin(userEmail);
