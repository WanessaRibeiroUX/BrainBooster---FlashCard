import {
  protectedProcedure,
  publicProcedure,
  router,
  adminProcedure,
} from "../lib/trpc";
import { z } from "zod";
import prisma from "../../prisma";
import { AsaasService } from "../lib/asaas/service";
import { AsaasApiError } from "../lib/asaas/client";
import {
  createPaymentSchema,
  createSubscriptionSchema,
  updateSubscriptionSchema,
  updateCustomerSchema,
  listPaymentsSchema,
  listSubscriptionsSchema,
} from "../lib/asaas/schemas";
import { importApkgToPostgres } from "../lib/new-anki-import";
export const appRouter = router({
  healthCheck: publicProcedure.query(() => {
    return "OK";
  }),
  adminAnkiImport: adminProcedure
    .input(
      z.object({
        fileBuffer: z.array(z.number()), // Array de bytes
        fileName: z.string().min(1),
        title: z.string().min(1).max(100).optional(),
        description: z.string().max(500).optional(),
        isPublic: z.boolean().default(true),
        priceCents: z.number().min(0).default(0),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { user } = ctx.session;

      // Verificação adicional de segurança (adminProcedure já garante isso)
      if (user.role !== "admin") {
        throw new Error(
          "Acesso negado. Apenas administradores podem importar decks do Anki."
        );
      }

      try {
        console.log(
          `📦 Iniciando importação Anki - arquivo: ${input.fileName}`
        );
        console.log(`📏 Tamanho do buffer: ${input.fileBuffer.length} bytes`);

        // Converter array de bytes para Buffer
        const buffer = Buffer.from(input.fileBuffer);

        console.log(`💾 Buffer criado com tamanho: ${buffer.length} bytes`);

        // Validações básicas do arquivo
        if (buffer.length === 0) {
          throw new Error("❌ Arquivo vazio ou corrompido");
        }

        if (buffer.length > 100 * 1024 * 1024) {
          // 100MB
          console.warn(
            `⚠️  Arquivo muito grande: ${(buffer.length / 1024 / 1024).toFixed(
              2
            )}MB`
          );
          console.warn("   Isto pode causar problemas de memória ou timeout");
        }

        // Importar usando a nova abordagem
        const result = await importApkgToPostgres(
          buffer,
          user.id,
          input.title,
          input.description,
          input.isPublic,
          input.priceCents
        );

        // Buscar o deck criado com informações completas
        const createdDeck = await prisma.deck.findUnique({
          where: { id: result.deckId },
          include: {
            _count: { select: { flashcards: true } },
          },
        });

        console.log(`✅ Importação concluída com sucesso:
          - Deck: "${result.deckTitle}"
          - Cards: ${result.flashcardsCreated}
          - Mídia: ${result.mediaProcessed}
          - Deck ID: ${result.deckId}`);

        return {
          success: true,
          deck: createdDeck,
          cardsImported: result.flashcardsCreated,
          mediaProcessed: result.mediaProcessed,
          originalDeckName: result.originalDeckName,
        };
      } catch (error) {
        console.error("❌ Erro ao importar deck do Anki:", error);
        console.error("❌ Tipo do erro:", typeof error);
        console.error(
          "❌ Stack trace:",
          error instanceof Error ? error.stack : "N/A"
        );

        if (error instanceof Error) {
          console.error("❌ Mensagem completa do erro:", error.message);

          // Se a mensagem já tem formato amigável (começa com ❌), mantém como está
          if (error.message.startsWith("❌")) {
            throw error;
          }

          // Verificar se é um erro conhecido e fornecer mensagem mais específica
          if (
            error.message.includes("JSON Parse error") ||
            error.message.includes("Unexpected token")
          ) {
            throw new Error(
              "❌ Arquivo Anki com formato inválido. Tente exportar novamente do Anki Desktop."
            );
          }

          if (
            error.message.includes("collection.anki2") ||
            error.message.includes("collection.anki21")
          ) {
            throw new Error(
              "❌ Arquivo APKG inválido. Certifique-se de que é um arquivo válido exportado do Anki."
            );
          }

          throw new Error(`❌ Erro ao importar deck do Anki: ${error.message}`);
        }

        throw new Error(
          "❌ Falha ao importar deck do Anki. Verifique se o arquivo é válido."
        );
      }
    }),
  privateData: protectedProcedure.query(({ ctx }) => {
    return {
      message: "This is private",
      user: ctx.session.user,
    };
  }),

  // Deck procedures
  decks: router({
    // Listar decks públicos (marketplace)
    getPublic: publicProcedure
      .input(
        z.object({
          limit: z.number().min(1).max(100).default(20),
          offset: z.number().min(0).default(0),
          search: z.string().optional(),
        })
      )
      .query(async ({ input }) => {
        const where = {
          isPublic: true,
          deletedAt: null,
          ...(input.search && {
            OR: [
              { title: { contains: input.search } },
              { description: { contains: input.search } },
            ],
          }),
        };

        const [decks, total] = await Promise.all([
          prisma.deck.findMany({
            where,
            include: {
              user: { select: { name: true } },
              _count: { select: { flashcards: true } },
            },
            orderBy: { createdAt: "desc" },
            take: input.limit,
            skip: input.offset,
          }),
          prisma.deck.count({ where }),
        ]);

        return { decks, total };
      }),

    // Listar decks do usuário (criados e comprados)
    getMine: protectedProcedure
      .input(
        z.object({
          limit: z.number().min(1).max(100).default(20),
          offset: z.number().min(0).default(0),
        })
      )
      .query(async ({ ctx, input }) => {
        // Buscar decks criados pelo usuário
        const ownedDecks = await prisma.deck.findMany({
          where: {
            userId: ctx.session.user.id,
            deletedAt: null,
          },
          include: {
            _count: { select: { flashcards: true } },
            user: { select: { name: true } },
          },
          orderBy: { createdAt: "desc" },
        });

        // Buscar decks comprados pelo usuário
        const purchasedDecks = await prisma.purchase.findMany({
          where: {
            userId: ctx.session.user.id,
            status: "paid",
          },
          include: {
            deck: {
              include: {
                _count: { select: { flashcards: true } },
                user: { select: { name: true } },
              },
            },
          },
          orderBy: { createdAt: "desc" },
        });

        // Combinar os resultados, adicionando flag para identificar se é próprio ou comprado
        const allDecks = [
          ...ownedDecks.map((deck) => ({
            ...deck,
            isOwned: true,
            isPurchased: false,
          })),
          ...purchasedDecks
            .filter((purchase) => purchase.deck) // Garantir que o deck existe
            .map((purchase) => ({
              ...purchase.deck!,
              isOwned: false,
              isPurchased: true,
              purchaseDate: purchase.createdAt,
            })),
        ];

        // Ordenar por data de criação/compra (mais recente primeiro)
        allDecks.sort((a, b) => {
          const dateA = a.isPurchased ? (a as any).purchaseDate : a.createdAt;
          const dateB = b.isPurchased ? (b as any).purchaseDate : b.createdAt;
          return new Date(dateB).getTime() - new Date(dateA).getTime();
        });

        // Aplicar paginação
        const paginatedDecks = allDecks.slice(
          input.offset,
          input.offset + input.limit
        );
        const total = allDecks.length;

        return { decks: paginatedDecks, total };
      }),

    // Obter deck específico
    getById: publicProcedure
      .input(z.object({ id: z.number() }))
      .query(async ({ input, ctx }) => {
        const deck = await prisma.deck.findFirst({
          where: {
            id: input.id,
            deletedAt: null,
          },
          include: {
            user: { select: { name: true } },
            flashcards: {
              where: { deletedAt: null },
              orderBy: { orderIndex: "asc" },
            },
            _count: { select: { flashcards: true, favorites: true } },
          },
        });

        if (!deck) {
          throw new Error("Deck não encontrado");
        }

        // Se o deck não é público, verificar se o usuário tem acesso
        if (!deck.isPublic) {
          if (!ctx?.session?.user?.id) {
            throw new Error("Acesso negado");
          }

          const isOwner = deck.userId === ctx.session.user.id;

          if (!isOwner) {
            // Verificar se o usuário comprou o deck
            const purchase = await prisma.purchase.findFirst({
              where: {
                userId: ctx.session.user.id,
                deckId: input.id,
                status: "paid",
              },
            });

            if (!purchase) {
              throw new Error("Você precisa comprar este deck para acessá-lo");
            }
          }
        }

        return deck;
      }),

    // Criar deck (usuário autenticado - sempre privado)
    create: protectedProcedure
      .input(
        z.object({
          title: z.string().min(1).max(100),
          description: z.string().max(500).optional(),
          coverUrl: z.string().url().optional(),
          priceCents: z.number().min(0).default(0),
        })
      )
      .mutation(async ({ ctx, input }) => {
        const deck = await prisma.deck.create({
          data: {
            userId: ctx.session.user.id,
            title: input.title,
            description: input.description,
            coverUrl: input.coverUrl,
            priceCents: input.priceCents,
            // Força deck privado para usuários
            isPublic: false,
          },
        });

        return deck;
      }),

    // Atualizar deck (admin ou proprietário)
    update: protectedProcedure
      .input(
        z.object({
          id: z.number(),
          title: z.string().min(1).max(100).optional(),
          description: z.string().max(500).optional(),
          coverUrl: z.string().url().optional(),
          isPublic: z.boolean().optional(),
          priceCents: z.number().min(0).optional(),
        })
      )
      .mutation(async ({ ctx, input }) => {
        const { id, ...data } = input;

        // Verificar se o deck pertence ao usuário ou se é admin
        const existingDeck = await prisma.deck.findFirst({
          where: {
            id,
            deletedAt: null,
          },
        });

        if (!existingDeck) {
          throw new Error("Deck não encontrado");
        }

        const isOwner = existingDeck.userId === ctx.session.user.id;
        const isAdmin = ctx.session.user.role === "admin";

        if (!isOwner && !isAdmin) {
          throw new Error("Você não tem permissão para editar este deck");
        }

        const deck = await prisma.deck.update({
          where: { id },
          data,
        });

        return deck;
      }),

    // Deletar deck (admin ou proprietário)
    delete: protectedProcedure
      .input(z.object({ id: z.number() }))
      .mutation(async ({ ctx, input }) => {
        // Verificar se o deck pertence ao usuário ou se é admin
        const existingDeck = await prisma.deck.findFirst({
          where: {
            id: input.id,
            deletedAt: null,
          },
        });

        if (!existingDeck) {
          throw new Error("Deck não encontrado");
        }

        const isOwner = existingDeck.userId === ctx.session.user.id;
        const isAdmin = ctx.session.user.role === "admin";

        if (!isOwner && !isAdmin) {
          throw new Error("Você não tem permissão para deletar este deck");
        }

        await prisma.deck.update({
          where: { id: input.id },
          data: { deletedAt: new Date() },
        });

        return { success: true };
      }),
  }),

  // Flashcard procedures
  flashcards: router({
    // Criar flashcard
    create: protectedProcedure
      .input(
        z.object({
          deckId: z.number(),
          frontText: z.string().min(1),
          backText: z.string().min(1),
          orderIndex: z.number().min(0).optional(),
        })
      )
      .mutation(async ({ ctx, input }) => {
        // Verificar se o deck pertence ao usuário
        const deck = await prisma.deck.findFirst({
          where: {
            id: input.deckId,
            userId: ctx.session.user.id,
            deletedAt: null,
          },
        });

        if (!deck) {
          throw new Error(
            "Deck não encontrado ou você não tem permissão para editá-lo"
          );
        }

        // Se orderIndex não foi fornecido, colocar no final
        let orderIndex = input.orderIndex;
        if (orderIndex === undefined) {
          const lastCard = await prisma.flashcard.findFirst({
            where: { deckId: input.deckId, deletedAt: null },
            orderBy: { orderIndex: "desc" },
          });
          orderIndex = (lastCard?.orderIndex ?? -1) + 1;
        }

        const flashcard = await prisma.flashcard.create({
          data: {
            deckId: input.deckId,
            frontText: input.frontText,
            backText: input.backText,
            orderIndex,
          },
        });

        return flashcard;
      }),

    // Atualizar flashcard
    update: protectedProcedure
      .input(
        z.object({
          id: z.number(),
          frontText: z.string().min(1).optional(),
          backText: z.string().min(1).optional(),
          orderIndex: z.number().min(0).optional(),
        })
      )
      .mutation(async ({ ctx, input }) => {
        const { id, ...data } = input;

        // Verificar se o flashcard pertence a um deck do usuário
        const existingFlashcard = await prisma.flashcard.findFirst({
          where: {
            id,
            deletedAt: null,
            deck: {
              userId: ctx.session.user.id,
              deletedAt: null,
            },
          },
        });

        if (!existingFlashcard) {
          throw new Error(
            "Flashcard não encontrado ou você não tem permissão para editá-lo"
          );
        }

        const flashcard = await prisma.flashcard.update({
          where: { id },
          data,
        });

        return flashcard;
      }),

    // Deletar flashcard (soft delete)
    delete: protectedProcedure
      .input(z.object({ id: z.number() }))
      .mutation(async ({ ctx, input }) => {
        // Verificar se o flashcard pertence a um deck do usuário
        const existingFlashcard = await prisma.flashcard.findFirst({
          where: {
            id: input.id,
            deletedAt: null,
            deck: {
              userId: ctx.session.user.id,
              deletedAt: null,
            },
          },
        });

        if (!existingFlashcard) {
          throw new Error(
            "Flashcard não encontrado ou você não tem permissão para deletá-lo"
          );
        }

        await prisma.flashcard.update({
          where: { id: input.id },
          data: { deletedAt: new Date() },
        });

        return { success: true };
      }),
  }),

  // Purchase procedures
  purchases: router({
    // Criar uma nova compra
    create: protectedProcedure
      .input(z.object({ deckId: z.number() }))
      .mutation(async ({ ctx, input }) => {
        console.log("=== SERVIDOR PURCHASES.CREATE ===");
        console.log("input completo:", JSON.stringify(input, null, 2));
        console.log("deckId:", input.deckId, typeof input.deckId);
        console.log("ctx.session.user:", ctx.session?.user?.id);

        // Verificar se o deck existe e está disponível
        const deck = await prisma.deck.findFirst({
          where: {
            id: input.deckId,
            deletedAt: null,
            isPublic: true,
          },
        });

        if (!deck) {
          throw new Error("Deck não encontrado ou não está disponível");
        }

        // Verificar se é gratuito
        if (deck.priceCents === 0) {
          throw new Error("Este deck é gratuito, não precisa ser comprado");
        }

        // Verificar se o usuário é o proprietário
        if (deck.userId === ctx.session.user.id) {
          throw new Error("Você não pode comprar seu próprio deck");
        }

        // Verificar se já não comprou
        const existingPurchase = await prisma.purchase.findFirst({
          where: {
            userId: ctx.session.user.id,
            deckId: input.deckId,
            status: "paid",
          },
        });

        if (existingPurchase) {
          throw new Error("Você já possui este deck");
        }

        // Criar a compra
        const purchase = await prisma.purchase.create({
          data: {
            userId: ctx.session.user.id,
            deckId: input.deckId,
            amountCents: deck.priceCents,
            status: "pending",
          },
          include: {
            deck: {
              select: {
                title: true,
                coverUrl: true,
                priceCents: true,
                user: { select: { name: true } },
              },
            },
          },
        });

        return purchase;
      }),

    // Listar compras do usuário
    getMine: protectedProcedure
      .input(
        z.object({
          limit: z.number().min(1).max(100).default(20),
          offset: z.number().min(0).default(0),
        })
      )
      .query(async ({ ctx, input }) => {
        const [purchases, total] = await Promise.all([
          prisma.purchase.findMany({
            where: { userId: ctx.session.user.id },
            include: {
              deck: {
                select: {
                  title: true,
                  coverUrl: true,
                  user: { select: { name: true } },
                },
              },
            },
            orderBy: { createdAt: "desc" },
            take: input.limit,
            skip: input.offset,
          }),
          prisma.purchase.count({ where: { userId: ctx.session.user.id } }),
        ]);

        return { purchases, total };
      }),

    // Verificar se o usuário pode acessar um deck
    canAccess: protectedProcedure
      .input(z.object({ deckId: z.number() }))
      .query(async ({ ctx, input }) => {
        const deck = await prisma.deck.findFirst({
          where: {
            id: input.deckId,
            deletedAt: null,
          },
        });

        if (!deck) {
          return { canAccess: false, reason: "Deck não encontrado" };
        }

        // Se é público e gratuito, pode acessar
        if (deck.isPublic && deck.priceCents === 0) {
          return { canAccess: true };
        }

        // Se é o proprietário
        if (deck.userId === ctx.session.user.id) {
          return { canAccess: true };
        }

        // Se não é público, não pode acessar sem compra
        if (!deck.isPublic) {
          return { canAccess: false, reason: "Deck privado" };
        }

        // Verificar se comprou
        const purchase = await prisma.purchase.findFirst({
          where: {
            userId: ctx.session.user.id,
            deckId: input.deckId,
            status: "paid",
          },
        });

        if (purchase) {
          return { canAccess: true };
        }

        return {
          canAccess: false,
          reason: "Compra necessária",
          priceCents: deck.priceCents,
        };
      }),
  }),

  // Favorites procedures
  favorites: router({
    // Listar favoritos do usuário
    getMine: protectedProcedure
      .input(
        z.object({
          limit: z.number().min(1).max(100).default(20),
          offset: z.number().min(0).default(0),
        })
      )
      .query(async ({ ctx, input }) => {
        const [favorites, total] = await Promise.all([
          prisma.favorite.findMany({
            where: { userId: ctx.session.user.id },
            include: {
              deck: {
                include: {
                  user: { select: { name: true } },
                  _count: { select: { flashcards: true } },
                },
              },
            },
            orderBy: { createdAt: "desc" },
            take: input.limit,
            skip: input.offset,
          }),
          prisma.favorite.count({ where: { userId: ctx.session.user.id } }),
        ]);

        return { favorites, total };
      }),

    // Adicionar aos favoritos
    add: protectedProcedure
      .input(z.object({ deckId: z.number() }))
      .mutation(async ({ ctx, input }) => {
        // Verificar se o deck existe
        const deck = await prisma.deck.findFirst({
          where: {
            id: input.deckId,
            deletedAt: null,
          },
        });

        if (!deck) {
          throw new Error("Deck não encontrado");
        }

        try {
          const favorite = await prisma.favorite.create({
            data: {
              userId: ctx.session.user.id,
              deckId: input.deckId,
            },
          });

          return favorite;
        } catch (error) {
          // Se já existe, ignorar erro
          return { message: "Já está nos favoritos" };
        }
      }),

    // Remover dos favoritos
    remove: protectedProcedure
      .input(z.object({ deckId: z.number() }))
      .mutation(async ({ ctx, input }) => {
        await prisma.favorite.deleteMany({
          where: {
            userId: ctx.session.user.id,
            deckId: input.deckId,
          },
        });

        return { success: true };
      }),

    // Verificar se está nos favoritos
    isLiked: protectedProcedure
      .input(z.object({ deckId: z.number() }))
      .query(async ({ ctx, input }) => {
        const favorite = await prisma.favorite.findFirst({
          where: {
            userId: ctx.session.user.id,
            deckId: input.deckId,
          },
        });

        return { isLiked: !!favorite };
      }),
  }),

  // Admin procedures
  admin: router({
    // Listar todos os decks para administração
    getAllDecks: adminProcedure
      .input(
        z.object({
          limit: z.number().min(1).max(100).default(20),
          offset: z.number().min(0).default(0),
          search: z.string().optional(),
          isPublic: z.boolean().optional(),
        })
      )
      .query(async ({ input }) => {
        const where = {
          deletedAt: null,
          ...(input.search && {
            OR: [
              { title: { contains: input.search } },
              { description: { contains: input.search } },
            ],
          }),
          ...(input.isPublic !== undefined && {
            isPublic: input.isPublic,
          }),
        };

        const [decks, total] = await Promise.all([
          prisma.deck.findMany({
            where,
            include: {
              user: { select: { id: true, name: true, email: true } },
              _count: {
                select: {
                  flashcards: true,
                  purchases: true,
                  favorites: true,
                },
              },
            },
            orderBy: { createdAt: "desc" },
            take: input.limit,
            skip: input.offset,
          }),
          prisma.deck.count({ where }),
        ]);

        return { decks, total };
      }),

    // Criar deck como admin (para o marketplace)
    createDeck: adminProcedure
      .input(
        z.object({
          title: z.string().min(1).max(100),
          description: z.string().max(500).optional(),
          coverUrl: z.string().url().optional(),
          isPublic: z.boolean().default(true),
          priceCents: z.number().min(0).default(0),
          userId: z.string().optional(), // Se não fornecido, usa o admin atual
        })
      )
      .mutation(async ({ ctx, input }) => {
        const deck = await prisma.deck.create({
          data: {
            userId: input.userId || ctx.session.user.id,
            title: input.title,
            description: input.description,
            coverUrl: input.coverUrl,
            isPublic: input.isPublic,
            priceCents: input.priceCents,
          },
          include: {
            user: { select: { name: true, email: true } },
            _count: { select: { flashcards: true } },
          },
        });

        return deck;
      }),

    // Atualizar qualquer deck
    updateDeck: adminProcedure
      .input(
        z.object({
          id: z.number(),
          title: z.string().min(1).max(100).optional(),
          description: z.string().max(500).optional(),
          coverUrl: z.string().url().optional(),
          isPublic: z.boolean().optional(),
          priceCents: z.number().min(0).optional(),
        })
      )
      .mutation(async ({ input }) => {
        const { id, ...data } = input;

        const deck = await prisma.deck.update({
          where: { id },
          data,
          include: {
            user: { select: { name: true, email: true } },
            _count: { select: { flashcards: true } },
          },
        });

        return deck;
      }),

    // Deletar qualquer deck
    deleteDeck: adminProcedure
      .input(z.object({ id: z.number() }))
      .mutation(async ({ input }) => {
        await prisma.deck.update({
          where: { id: input.id },
          data: { deletedAt: new Date() },
        });

        return { success: true };
      }),

    // Listar todos os usuários
    getAllUsers: adminProcedure
      .input(
        z.object({
          limit: z.number().min(1).max(100).default(20),
          offset: z.number().min(0).default(0),
          search: z.string().optional(),
        })
      )
      .query(async ({ input }) => {
        const where = {
          ...(input.search && {
            OR: [
              { name: { contains: input.search } },
              { email: { contains: input.search } },
            ],
          }),
        };

        const [users, total] = await Promise.all([
          prisma.user.findMany({
            where,
            select: {
              id: true,
              name: true,
              email: true,
              role: true,
              createdAt: true,
              _count: {
                select: {
                  decks: true,
                  purchases: true,
                  favorites: true,
                },
              },
            },
            orderBy: { createdAt: "desc" },
            take: input.limit,
            skip: input.offset,
          }),
          prisma.user.count({ where }),
        ]);

        return { users, total };
      }),

    // Atualizar role do usuário
    updateUserRole: adminProcedure
      .input(
        z.object({
          userId: z.string(),
          role: z.enum(["user", "admin"]),
        })
      )
      .mutation(async ({ input }) => {
        const user = await prisma.user.update({
          where: { id: input.userId },
          data: { role: input.role },
          select: {
            id: true,
            name: true,
            email: true,
            role: true,
          },
        });

        return user;
      }),

    // Obter dados de um usuário específico
    getUser: adminProcedure
      .input(z.object({ userId: z.string() }))
      .query(async ({ input }) => {
        const user = await prisma.user.findUnique({
          where: { id: input.userId },
          select: {
            id: true,
            name: true,
            email: true,
            emailVerified: true,
            image: true,
            role: true,
            asaasCustomerId: true,
            createdAt: true,
            updatedAt: true,
            _count: {
              select: {
                decks: { where: { deletedAt: null } },
                purchases: true,
                favorites: true,
                sessions: true,
                accounts: true,
              },
            },
            asaasCustomer: {
              select: {
                name: true,
                cpfCnpj: true,
                phone: true,
                mobilePhone: true,
                address: true,
                createdAt: true,
              },
            },
          },
        });

        if (!user) {
          throw new Error("Usuário não encontrado");
        }

        return user;
      }),

    // Criar usuário (admin)
    createUser: adminProcedure
      .input(
        z.object({
          name: z.string().min(1).max(100),
          email: z.string().email(),
          role: z.enum(["user", "admin"]).default("user"),
          emailVerified: z.boolean().default(false),
          image: z.string().url().optional(),
        })
      )
      .mutation(async ({ input }) => {
        // Verificar se o email já existe
        const existingUser = await prisma.user.findUnique({
          where: { email: input.email },
        });

        if (existingUser) {
          throw new Error("Email já está em uso");
        }

        const user = await prisma.user.create({
          data: {
            id: `usr_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
            name: input.name,
            email: input.email,
            emailVerified: input.emailVerified,
            image: input.image,
            role: input.role,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          select: {
            id: true,
            name: true,
            email: true,
            emailVerified: true,
            image: true,
            role: true,
            createdAt: true,
            updatedAt: true,
          },
        });

        return user;
      }),

    // Atualizar dados do usuário
    updateUser: adminProcedure
      .input(
        z.object({
          userId: z.string(),
          name: z.string().min(1).max(100).optional(),
          email: z.string().email().optional(),
          role: z.enum(["user", "admin"]).optional(),
          emailVerified: z.boolean().optional(),
          image: z.string().url().optional(),
        })
      )
      .mutation(async ({ input }) => {
        const { userId, ...data } = input;

        // Se estiver alterando o email, verificar se não existe outro usuário com esse email
        if (data.email) {
          const existingUser = await prisma.user.findUnique({
            where: { email: data.email },
          });

          if (existingUser && existingUser.id !== userId) {
            throw new Error("Email já está em uso por outro usuário");
          }
        }

        const user = await prisma.user.update({
          where: { id: userId },
          data: {
            ...data,
            updatedAt: new Date(),
          },
          select: {
            id: true,
            name: true,
            email: true,
            emailVerified: true,
            image: true,
            role: true,
            createdAt: true,
            updatedAt: true,
            _count: {
              select: {
                decks: { where: { deletedAt: null } },
                purchases: true,
                favorites: true,
              },
            },
          },
        });

        return user;
      }),

    // Deletar usuário
    deleteUser: adminProcedure
      .input(z.object({ userId: z.string() }))
      .mutation(async ({ input, ctx }) => {
        // Não permitir que admin delete a si mesmo
        if (input.userId === ctx.session.user.id) {
          throw new Error("Você não pode deletar sua própria conta");
        }

        // Verificar se o usuário existe
        const user = await prisma.user.findUnique({
          where: { id: input.userId },
          include: {
            _count: {
              select: {
                decks: { where: { deletedAt: null } },
                purchases: true,
              },
            },
          },
        });

        if (!user) {
          throw new Error("Usuário não encontrado");
        }

        // Soft delete nos decks do usuário antes de deletar o usuário
        await prisma.deck.updateMany({
          where: {
            userId: input.userId,
            deletedAt: null,
          },
          data: {
            deletedAt: new Date(),
          },
        });

        // Deletar relacionamentos que podem ser deletados
        await prisma.favorite.deleteMany({
          where: { userId: input.userId },
        });

        await prisma.session.deleteMany({
          where: { userId: input.userId },
        });

        await prisma.account.deleteMany({
          where: { userId: input.userId },
        });

        // Deletar o usuário (as compras ficam preservadas devido ao onDelete: Restrict)
        await prisma.user.delete({
          where: { id: input.userId },
        });

        return { success: true };
      }),

    // Obter estatísticas de um usuário
    getUserStats: adminProcedure
      .input(z.object({ userId: z.string() }))
      .query(async ({ input }) => {
        const user = await prisma.user.findUnique({
          where: { id: input.userId },
        });

        if (!user) {
          throw new Error("Usuário não encontrado");
        }

        const [
          totalDecks,
          totalPurchases,
          totalFavorites,
          recentPurchases,
          activeSessions,
          totalSpent,
        ] = await Promise.all([
          prisma.deck.count({
            where: { userId: input.userId, deletedAt: null },
          }),
          prisma.purchase.count({
            where: { userId: input.userId, status: "paid" },
          }),
          prisma.favorite.count({
            where: { userId: input.userId },
          }),
          prisma.purchase.findMany({
            where: { userId: input.userId },
            include: {
              deck: { select: { title: true } },
            },
            orderBy: { createdAt: "desc" },
            take: 5,
          }),
          prisma.session.count({
            where: {
              userId: input.userId,
              expiresAt: { gt: new Date() },
            },
          }),
          prisma.purchase.aggregate({
            where: { userId: input.userId, status: "paid" },
            _sum: { amountCents: true },
          }),
        ]);

        return {
          totalDecks,
          totalPurchases,
          totalFavorites,
          activeSessions,
          totalSpent: totalSpent._sum.amountCents || 0,
          recentPurchases,
        };
      }),

    // Estatísticas gerais
    getStats: adminProcedure.query(async () => {
      const [
        totalUsers,
        totalDecks,
        totalFlashcards,
        totalPurchases,
        publicDecks,
        paidDecks,
      ] = await Promise.all([
        prisma.user.count(),
        prisma.deck.count({ where: { deletedAt: null } }),
        prisma.flashcard.count({ where: { deletedAt: null } }),
        prisma.purchase.count({ where: { status: "paid" } }),
        prisma.deck.count({ where: { isPublic: true, deletedAt: null } }),
        prisma.deck.count({
          where: { priceCents: { gt: 0 }, deletedAt: null },
        }),
      ]);

      return {
        totalUsers,
        totalDecks,
        totalFlashcards,
        totalPurchases,
        publicDecks,
        paidDecks,
      };
    }),

    // Verificar se o usuário atual é admin
    isAdmin: protectedProcedure.query(({ ctx }) => {
      return { isAdmin: ctx.session.user.role === "admin" };
    }),
  }),

  // Asaas integration procedures
  asaas: router({
    // Criar pagamento para uma compra
    createPayment: protectedProcedure
      .input(createPaymentSchema)
      .mutation(async ({ ctx, input }) => {
        try {
          const asaasService = new AsaasService();

          // Verifica se a compra existe e pertence ao usuário
          const purchase = await prisma.purchase.findFirst({
            where: {
              id: input.purchaseId,
              userId: ctx.session.user.id,
            },
            include: { deck: true },
          });

          if (!purchase) {
            throw new Error("Compra não encontrada");
          }

          if (purchase.status === "paid") {
            throw new Error("Esta compra já foi paga");
          }

          const paymentId = await asaasService.createPaymentForPurchase(
            input.purchaseId,
            {
              billingType: input.billingType,
              dueDate: input.dueDate,
              description: input.description,
              discount: input.discount,
              fine: input.fine,
              interest: input.interest,
              creditCard: input.creditCard,
              creditCardHolderInfo: input.creditCardHolderInfo,
            }
          );

          const asaasPayment = await prisma.asaasPayment.findUnique({
            where: { id: paymentId },
            include: {
              purchase: {
                include: { deck: true },
              },
            },
          });

          return {
            paymentId,
            asaasPaymentId: asaasPayment?.asaasId,
            invoiceUrl: asaasPayment?.invoiceUrl,
            bankSlipUrl: asaasPayment?.bankSlipUrl,
            pixQrCode: asaasPayment?.pixQrCode,
            status: asaasPayment?.status,
          };
        } catch (error) {
          if (error instanceof AsaasApiError) {
            throw new Error(`Erro na API Asaas: ${error.message}`);
          }
          throw error;
        }
      }),

    // Criar assinatura
    createSubscription: protectedProcedure
      .input(createSubscriptionSchema)
      .mutation(async ({ ctx, input }) => {
        try {
          const asaasService = new AsaasService();

          const subscriptionId = await asaasService.createSubscription(
            ctx.session.user.id,
            input
          );

          const subscription = await prisma.subscription.findUnique({
            where: { id: parseInt(subscriptionId) },
            include: { asaasSubscription: true },
          });

          return {
            subscriptionId: parseInt(subscriptionId),
            asaasSubscriptionId: subscription?.asaasSubscription?.asaasId,
            status: subscription?.status,
            nextDueDate: subscription?.nextDueDate,
            value: subscription?.priceCents ? subscription.priceCents / 100 : 0,
          };
        } catch (error) {
          if (error instanceof AsaasApiError) {
            throw new Error(`Erro na API Asaas: ${error.message}`);
          }
          throw error;
        }
      }),

    // Atualizar assinatura
    updateSubscription: protectedProcedure
      .input(updateSubscriptionSchema)
      .mutation(async ({ ctx, input }) => {
        try {
          // Verifica se a assinatura pertence ao usuário
          const subscription = await prisma.subscription.findFirst({
            where: {
              id: input.subscriptionId,
              userId: ctx.session.user.id,
            },
          });

          if (!subscription) {
            throw new Error("Assinatura não encontrada");
          }

          const asaasService = new AsaasService();
          await asaasService.updateSubscription(input.subscriptionId, input);

          const updatedSubscription = await prisma.subscription.findUnique({
            where: { id: input.subscriptionId },
            include: { asaasSubscription: true },
          });

          return {
            subscriptionId: input.subscriptionId,
            status: updatedSubscription?.status,
            nextDueDate: updatedSubscription?.nextDueDate,
            value: updatedSubscription?.priceCents
              ? updatedSubscription.priceCents / 100
              : 0,
          };
        } catch (error) {
          if (error instanceof AsaasApiError) {
            throw new Error(`Erro na API Asaas: ${error.message}`);
          }
          throw error;
        }
      }),

    // Cancelar assinatura
    cancelSubscription: protectedProcedure
      .input(z.object({ subscriptionId: z.number().int().positive() }))
      .mutation(async ({ ctx, input }) => {
        try {
          // Verifica se a assinatura pertence ao usuário
          const subscription = await prisma.subscription.findFirst({
            where: {
              id: input.subscriptionId,
              userId: ctx.session.user.id,
            },
          });

          if (!subscription) {
            throw new Error("Assinatura não encontrada");
          }

          if (subscription.status === "canceled") {
            throw new Error("Assinatura já está cancelada");
          }

          const asaasService = new AsaasService();
          await asaasService.cancelSubscription(input.subscriptionId);

          return { success: true };
        } catch (error) {
          if (error instanceof AsaasApiError) {
            throw new Error(`Erro na API Asaas: ${error.message}`);
          }
          throw error;
        }
      }),

    // Atualizar dados do cliente
    updateCustomer: protectedProcedure
      .input(updateCustomerSchema)
      .mutation(async ({ ctx, input }) => {
        try {
          const asaasService = new AsaasService();
          await asaasService.updateCustomer(ctx.session.user.id, input);

          return { success: true };
        } catch (error) {
          if (error instanceof AsaasApiError) {
            throw new Error(`Erro na API Asaas: ${error.message}`);
          }
          throw error;
        }
      }),

    // Listar pagamentos do usuário
    getPayments: protectedProcedure
      .input(listPaymentsSchema.optional())
      .query(async ({ ctx, input }) => {
        const where = {
          customer: {
            userId: ctx.session.user.id,
          },
          ...(input?.status && { status: input.status }),
          ...(input?.billingType && { billingType: input.billingType }),
        };

        const [payments, total] = await Promise.all([
          prisma.asaasPayment.findMany({
            where,
            include: {
              purchase: {
                include: {
                  deck: {
                    select: { title: true, coverUrl: true },
                  },
                },
              },
            },
            orderBy: { createdAt: "desc" },
            take: input?.limit || 20,
            skip: input?.offset || 0,
          }),
          prisma.asaasPayment.count({ where }),
        ]);

        return {
          payments: payments.map((payment) => ({
            id: payment.id,
            asaasId: payment.asaasId,
            status: payment.status,
            billingType: payment.billingType,
            value: payment.value,
            dueDate: payment.dueDate,
            description: payment.description,
            invoiceUrl: payment.invoiceUrl,
            bankSlipUrl: payment.bankSlipUrl,
            pixQrCode: payment.pixQrCode,
            paymentDate: payment.paymentDate,
            purchase: payment.purchase
              ? {
                  id: payment.purchase.id,
                  deck: payment.purchase.deck,
                }
              : null,
            createdAt: payment.createdAt,
          })),
          total,
        };
      }),

    // Listar assinaturas do usuário
    getSubscriptions: protectedProcedure
      .input(listSubscriptionsSchema.optional())
      .query(async ({ ctx, input }) => {
        const where = {
          userId: ctx.session.user.id,
          ...(input?.status && { status: input.status.toLowerCase() }),
        };

        const [subscriptions, total] = await Promise.all([
          prisma.subscription.findMany({
            where,
            include: {
              asaasSubscription: true,
            },
            orderBy: { createdAt: "desc" },
            take: input?.limit || 20,
            skip: input?.offset || 0,
          }),
          prisma.subscription.count({ where }),
        ]);

        return {
          subscriptions: subscriptions.map((sub) => ({
            id: sub.id,
            asaasId: sub.asaasSubscription?.asaasId,
            status: sub.status,
            planName: sub.planName,
            value: sub.priceCents / 100,
            billingType: sub.asaasSubscription?.billingType,
            cycle: sub.asaasSubscription?.cycle,
            nextDueDate: sub.nextDueDate,
            currentPeriodEnd: sub.currentPeriodEnd,
            createdAt: sub.createdAt,
          })),
          total,
        };
      }),

    // Obter status de um pagamento específico
    getPaymentStatus: protectedProcedure
      .input(z.object({ paymentId: z.string() }))
      .query(async ({ ctx, input }) => {
        const payment = await prisma.asaasPayment.findFirst({
          where: {
            id: input.paymentId,
            customer: {
              userId: ctx.session.user.id,
            },
          },
          include: {
            purchase: {
              include: {
                deck: {
                  select: { title: true },
                },
              },
            },
          },
        });

        if (!payment) {
          throw new Error("Pagamento não encontrado");
        }

        return {
          id: payment.id,
          asaasId: payment.asaasId,
          status: payment.status,
          value: payment.value,
          dueDate: payment.dueDate,
          paymentDate: payment.paymentDate,
          invoiceUrl: payment.invoiceUrl,
          bankSlipUrl: payment.bankSlipUrl,
          pixQrCode: payment.pixQrCode,
          purchase: payment.purchase,
        };
      }),

    // Sincronizar status de um pagamento
    syncPaymentStatus: protectedProcedure
      .input(z.object({ asaasPaymentId: z.string() }))
      .mutation(async ({ ctx, input }) => {
        try {
          const asaasService = new AsaasService();
          await asaasService.syncPaymentStatus(input.asaasPaymentId);

          return { success: true };
        } catch (error) {
          if (error instanceof AsaasApiError) {
            throw new Error(`Erro na API Asaas: ${error.message}`);
          }
          throw error;
        }
      }),

    // Criar checkout para compra de deck
    createCheckoutForDeck: protectedProcedure
      .input(
        z.object({
          deckId: z.number().int().positive(),
        })
      )
      .mutation(async ({ ctx, input }) => {
        try {
          const asaasService = new AsaasService();
          const result = await asaasService.createCheckoutForDeck(
            input.deckId,
            ctx.session.user.id
          );

          return result;
        } catch (error) {
          if (error instanceof AsaasApiError) {
            throw new Error(`Erro na API Asaas: ${error.message}`);
          }
          throw error;
        }
      }),

    // Verificar se usuário já comprou um deck
    hasUserPurchasedDeck: protectedProcedure
      .input(
        z.object({
          deckId: z.number().int().positive(),
        })
      )
      .query(async ({ ctx, input }) => {
        try {
          const asaasService = new AsaasService();
          const hasPurchased = await asaasService.hasUserPurchasedDeck(
            ctx.session.user.id,
            input.deckId
          );

          return { hasPurchased };
        } catch (error) {
          console.error("Erro ao verificar compra do deck:", error);
          throw new Error("Erro interno do servidor");
        }
      }),

    // Criar checkout para assinatura
    createCheckoutForSubscription: protectedProcedure
      .input(
        z.object({
          planName: z.string().min(1).max(100),
          description: z.string().max(500).optional(),
          priceCents: z.number().int().positive(),
          cycle: z.enum(["MONTHLY", "YEARLY"]),
          billingTypes: z.array(z.enum(["CREDIT_CARD"])).min(1),
          nextDueDate: z.string().refine((date) => {
            return !isNaN(Date.parse(date));
          }, "Data inválida"),
          endDate: z
            .string()
            .refine((date) => {
              return !isNaN(Date.parse(date));
            }, "Data inválida")
            .optional(),
          minutesToExpire: z.number().int().positive().max(1440).optional(),
          successUrl: z.string().url(),
          cancelUrl: z.string().url(),
          expiredUrl: z.string().url().optional(),
        })
      )
      .mutation(async ({ ctx, input }) => {
        try {
          const asaasService = new AsaasService();
          const result = await asaasService.createCheckoutForSubscription(
            ctx.session.user.id,
            {
              planName: input.planName,
              description: input.description,
              priceCents: input.priceCents,
              cycle: input.cycle,
              billingTypes: input.billingTypes,
              nextDueDate: input.nextDueDate,
              endDate: input.endDate,
              minutesToExpire: input.minutesToExpire,
              successUrl: input.successUrl,
              cancelUrl: input.cancelUrl,
              expiredUrl: input.expiredUrl,
            }
          );

          return result;
        } catch (error) {
          if (error instanceof AsaasApiError) {
            throw new Error(`Erro na API Asaas: ${error.message}`);
          }
          throw error;
        }
      }),
  }),
});

export type AppRouter = typeof appRouter;
