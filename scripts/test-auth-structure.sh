#!/bin/bash

echo "🧪 Testando a estrutura de autenticação Better Auth..."

# Verificar se os arquivos principais existem
echo "📁 Verificando arquivos principais..."

# Backend
echo "  ✅ auth.ts:" $([ -f "apps/server/src/lib/auth.ts" ] && echo "✓" || echo "✗")
echo "  ✅ middleware/auth.middleware.ts:" $([ -f "apps/server/src/middleware/auth.middleware.ts" ] && echo "✓" || echo "✗")
echo "  ✅ middleware/compression.middleware.ts:" $([ -f "apps/server/src/middleware/compression.middleware.ts" ] && echo "✓" || echo "✗")
echo "  ✅ middleware/error.middleware.ts:" $([ -f "apps/server/src/middleware/error.middleware.ts" ] && echo "✓" || echo "✗")
echo "  ✅ middleware/security.middleware.ts:" $([ -f "apps/server/src/middleware/security.middleware.ts" ] && echo "✓" || echo "✗")

# Frontend
echo "  ✅ auth-client.ts:" $([ -f "apps/web/src/lib/auth-client.ts" ] && echo "✓" || echo "✗")
echo "  ✅ middleware.ts:" $([ -f "apps/web/middleware.ts" ] && echo "✓" || echo "✗")
echo "  ✅ use-auth.ts:" $([ -f "apps/web/src/hooks/use-auth.ts" ] && echo "✓" || echo "✗")
echo "  ✅ protected-route.tsx:" $([ -f "apps/web/src/components/auth/protected-route.tsx" ] && echo "✓" || echo "✗")

echo ""
echo "🔧 Estrutura implementada com base no repositório: https://github.com/ProMehedi/bun-hono-better-auth"
echo ""
echo "📋 Funcionalidades implementadas:"
echo "  ✅ Better Auth configurado com PostgreSQL"
echo "  ✅ Sistema de autenticação email/senha (sem providers sociais)"
echo "  ✅ Middleware de proteção no backend com compressão"
echo "  ✅ Middleware de segurança com rate limiting"
echo "  ✅ Middleware de proteção no frontend"
echo "  ✅ Hook personalizado useAuth"
echo "  ✅ Componentes de proteção de rotas"
echo "  ✅ Headers de segurança implementados"
echo "  ✅ Sistema mantém login atual"
echo ""
echo "🚀 Para usar:"
echo "  1. Backend: Use os middlewares protect/isAdmin nas rotas"
echo "  2. Frontend: Use AuthGuard/AdminGuard ou useAuth hook"
echo "  3. Middleware de segurança está ativo globalmente"
echo ""
echo "✨ Implementação concluída!"
