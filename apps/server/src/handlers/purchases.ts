import type { Context } from "hono";
import prisma from "../../prisma";
import { auth } from "@/lib/auth";

export async function purchasesHandler(c: Context) {
  try {
    // Verificar autenticação
    const request = new Request(c.req.url, {
      method: c.req.method,
      headers: c.req.header(),
    });

    const session = await auth.api.getSession({ headers: request.headers });

    if (!session?.user) {
      return c.json({ error: "Unauthorized" }, 401);
    }

    const body = await c.req.json();
    const { deckId, amountCents } = body;

    if (!deckId || !amountCents) {
      return c.json({ error: "deckId e amountCents são obrigatórios" }, 400);
    }

    // Verificar se o deck existe
    const deck = await prisma.deck.findFirst({
      where: {
        id: deckId,
        deletedAt: null,
      },
    });

    if (!deck) {
      return c.json({ error: "Deck não encontrado" }, 404);
    }

    // Verificar se o usuário já possui o deck
    if (deck.userId === session.user.id) {
      return c.json({ error: "Você já possui este deck" }, 400);
    }

    // Verificar se já existe uma compra paga para este deck
    const existingPurchase = await prisma.purchase.findFirst({
      where: {
        userId: session.user.id,
        deckId,
        status: "paid",
      },
    });

    if (existingPurchase) {
      return c.json({ error: "Você já comprou este deck" }, 400);
    }

    // Criar a compra
    const purchase = await prisma.purchase.create({
      data: {
        userId: session.user.id,
        deckId,
        amountCents,
        status: "pending",
        paymentMethod: null,
      },
      include: {
        deck: {
          select: {
            title: true,
            priceCents: true,
          },
        },
      },
    });

    return c.json(purchase);
  } catch (error) {
    console.error("Error creating purchase:", error);
    return c.json({ error: "Internal server error" }, 500);
  }
}
