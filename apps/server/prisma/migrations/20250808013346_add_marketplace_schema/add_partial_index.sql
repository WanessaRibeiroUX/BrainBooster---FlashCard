-- Add partial unique index for paid purchases per user/deck
CREATE UNIQUE INDEX IF NOT EXISTS ux_paid_purchase_per_user_deck
ON purchases(user_id, deck_id)
WHERE status = 'paid';
