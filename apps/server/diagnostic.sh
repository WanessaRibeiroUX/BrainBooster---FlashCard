#!/bin/bash

echo "🔍 Diagnóstico do Flash Cards Server"
echo "=================================="

# Verificar se as variáveis de ambiente estão definidas
echo "📋 Verificando variáveis de ambiente..."

check_env_var() {
    if [ -z "${!1}" ]; then
        echo "❌ $1: NÃO DEFINIDA"
        return 1
    else
        echo "✅ $1: DEFINIDA"
        return 0
    fi
}

# Carregar .env se existir
if [ -f ".env" ]; then
    export $(cat .env | grep -v '^#' | xargs)
    echo "📁 Arquivo .env carregado"
else
    echo "⚠️  Arquivo .env não encontrado"
fi

# Verificar variáveis críticas
MISSING_VARS=0

check_env_var "NODE_ENV" || ((MISSING_VARS++))
check_env_var "BETTER_AUTH_SECRET" || ((MISSING_VARS++))
check_env_var "BETTER_AUTH_URL" || ((MISSING_VARS++))
check_env_var "CORS_ORIGIN" || ((MISSING_VARS++))
check_env_var "DATABASE_URL" || ((MISSING_VARS++))

echo ""
echo "🗄️  Verificando conexão com banco de dados..."
if command -v bun &> /dev/null; then
    cd apps/server
    if bun run prisma db push --dry-run &> /dev/null; then
        echo "✅ Conexão com banco: OK"
    else
        echo "❌ Conexão com banco: FALHOU"
        ((MISSING_VARS++))
    fi
    cd ../..
else
    echo "⚠️  Bun não encontrado, pulando verificação do banco"
fi

echo ""
echo "📊 Status do PM2..."
if command -v pm2 &> /dev/null; then
    pm2 list
else
    echo "⚠️  PM2 não encontrado"
fi

echo ""
echo "🏁 Resumo do diagnóstico:"
if [ $MISSING_VARS -eq 0 ]; then
    echo "✅ Todas as configurações estão corretas!"
    echo "🚀 Servidor pronto para execução"
else
    echo "❌ $MISSING_VARS problema(s) encontrado(s)"
    echo "🔧 Verifique as configurações antes de iniciar o servidor"
fi
