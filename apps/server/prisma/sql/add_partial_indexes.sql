-- Partial index to ensure only one paid purchase per user/deck combination
-- This prevents duplicate paid purchases for the same deck by the same user
-- SQLite supports partial indexes with WHERE clauses
CREATE UNIQUE INDEX IF NOT EXISTS ux_paid_purchase_per_user_deck
ON purchases(user_id, deck_id)
WHERE status = 'paid';

-- Note: This index should be applied manually after migrations
-- as Prisma doesn't support partial indexes natively
