#!/bin/bash

# Vercel Build Script for Flash Cards
# Handles libsql symbolic link issues

echo "🚀 Starting Flash Cards build process..."

# Set environment for better build caching
export BUN_INSTALL_CACHE_DIR="/tmp/.bun-cache"
export NEXT_TELEMETRY_DISABLED=1

# Clean any problematic cache
rm -rf node_modules/.cache
rm -rf .next/cache
rm -rf apps/*/node_modules/.cache

echo "📦 Installing dependencies..."

# Install with specific flags to avoid symlink issues
bun install --no-save --frozen-lockfile --backend=hardlink

echo "🏗️ Generating Prisma client..."
cd apps/server && bun run db:generate

echo "🔨 Building applications..."
cd ../../ && bun run build

echo "✅ Build completed successfully!"
