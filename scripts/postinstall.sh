#!/bin/bash
# Post-install script to handle libsql issues

echo "🔧 Running post-install fixes..."

# Remove problematic symlinks if they exist
find node_modules -type l -name "*libsql*" -delete 2>/dev/null || true

# Ensure prisma client is generated
if [ -d "apps/server" ]; then
  cd apps/server
  echo "📦 Generating Prisma client..."
  bun run db:generate || npx prisma generate
  cd ../..
fi

echo "✅ Post-install completed"
