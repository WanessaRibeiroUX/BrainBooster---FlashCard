-- CreateTable
CREATE TABLE "user" (
    "_id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "emailVerified" BOOLEAN NOT NULL,
    "image" TEXT,
    "asaas_customer_id" TEXT,
    "createdAt" DATETIME NOT NULL,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "session" (
    "_id" TEXT NOT NULL PRIMARY KEY,
    "expiresAt" DATETIME NOT NULL,
    "token" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL,
    "updatedAt" DATETIME NOT NULL,
    "ipAddress" TEXT,
    "userAgent" TEXT,
    "userId" TEXT NOT NULL,
    CONSTRAINT "session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user" ("_id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "account" (
    "_id" TEXT NOT NULL PRIMARY KEY,
    "accountId" TEXT NOT NULL,
    "providerId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "accessToken" TEXT,
    "refreshToken" TEXT,
    "idToken" TEXT,
    "accessTokenExpiresAt" DATETIME,
    "refreshTokenExpiresAt" DATETIME,
    "scope" TEXT,
    "password" TEXT,
    "createdAt" DATETIME NOT NULL,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user" ("_id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "verification" (
    "_id" TEXT NOT NULL PRIMARY KEY,
    "identifier" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "expiresAt" DATETIME NOT NULL,
    "createdAt" DATETIME,
    "updatedAt" DATETIME
);

-- CreateTable
CREATE TABLE "decks" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "user_id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "cover_url" TEXT,
    "is_public" BOOLEAN NOT NULL DEFAULT false,
    "price_cents" INTEGER NOT NULL DEFAULT 0,
    "deleted_at" DATETIME,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "decks_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user" ("_id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "flashcards" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "deck_id" INTEGER NOT NULL,
    "front_text" TEXT NOT NULL,
    "back_text" TEXT NOT NULL,
    "order_index" INTEGER NOT NULL DEFAULT 0,
    "deleted_at" DATETIME,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "flashcards_deck_id_fkey" FOREIGN KEY ("deck_id") REFERENCES "decks" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "purchases" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "user_id" TEXT NOT NULL,
    "deck_id" INTEGER NOT NULL,
    "amount_cents" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "payment_method" TEXT,
    "asaas_payment_id" TEXT,
    "asaas_invoice_id" TEXT,
    "asaas_payload" TEXT,
    "confirmed_at" DATETIME,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "purchases_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user" ("_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "purchases_deck_id_fkey" FOREIGN KEY ("deck_id") REFERENCES "decks" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "subscriptions" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "user_id" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "plan_name" TEXT NOT NULL,
    "price_cents" INTEGER NOT NULL,
    "asaas_subscription_id" TEXT NOT NULL,
    "next_due_date" DATETIME,
    "last_payment_date" DATETIME,
    "current_period_end" DATETIME,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "subscriptions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user" ("_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "favorites" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "user_id" TEXT NOT NULL,
    "deck_id" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "favorites_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user" ("_id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "favorites_deck_id_fkey" FOREIGN KEY ("deck_id") REFERENCES "decks" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "user_asaas_customer_id_key" ON "user"("asaas_customer_id");

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "session_token_key" ON "session"("token");

-- CreateIndex
CREATE INDEX "idx_decks_user" ON "decks"("user_id");

-- CreateIndex
CREATE INDEX "idx_decks_public" ON "decks"("is_public");

-- CreateIndex
CREATE INDEX "idx_decks_price" ON "decks"("price_cents");

-- CreateIndex
CREATE INDEX "idx_flashcards_deck" ON "flashcards"("deck_id", "order_index");

-- CreateIndex
CREATE UNIQUE INDEX "purchases_asaas_payment_id_key" ON "purchases"("asaas_payment_id");

-- CreateIndex
CREATE INDEX "idx_purchases_user" ON "purchases"("user_id");

-- CreateIndex
CREATE INDEX "idx_purchases_deck" ON "purchases"("deck_id");

-- CreateIndex
CREATE INDEX "idx_purchases_status" ON "purchases"("status");

-- CreateIndex
CREATE UNIQUE INDEX "subscriptions_asaas_subscription_id_key" ON "subscriptions"("asaas_subscription_id");

-- CreateIndex
CREATE INDEX "idx_subscriptions_user" ON "subscriptions"("user_id");

-- CreateIndex
CREATE INDEX "idx_subscriptions_status" ON "subscriptions"("status");

-- CreateIndex
CREATE INDEX "idx_favorites_deck" ON "favorites"("deck_id");

-- CreateIndex
CREATE UNIQUE INDEX "favorites_user_id_deck_id_key" ON "favorites"("user_id", "deck_id");
