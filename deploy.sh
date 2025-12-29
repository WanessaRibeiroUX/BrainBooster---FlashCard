#!/bin/bash

# Script para deploy em produção no VPS Ubuntu
# Execute este script no servidor VPS

echo "🚀 Iniciando deploy em produção..."

# Verificar se estamos no diretório correto
if [ ! -f "package.json" ]; then
    echo "❌ Execute este script no diretório raiz do projeto"
    exit 1
fi

# Parar o serviço atual (se estiver rodando com PM2)
echo "🛑 Parando serviço atual..."
pm2 stop flash-cards-server || true

# Atualizar código do repositório
echo "📥 Atualizando código..."
git pull origin master

# Copiar arquivo de ambiente de produção
echo "⚙️  Configurando variáveis de ambiente..."
cp apps/server/.env.production apps/server/.env

# Instalar dependências
echo "📦 Instalando dependências..."
cd apps/server
bun install

# Gerar Prisma client
echo "🗄️  Gerando Prisma client..."
bun run db:generate

# Fazer push do schema (sem migrations)
echo "🗄️  Aplicando schema do banco..."
bun run db:push

# Fazer build da aplicação
echo "🔨 Fazendo build..."
bun run build

# Iniciar serviço com PM2
echo "🚀 Iniciando serviço..."
pm2 start ecosystem.config.cjs

# Salvar configuração do PM2
pm2 save

echo "✅ Deploy concluído!"
echo "📊 Para monitorar logs: pm2 logs flash-cards-server"
echo "📊 Para status: pm2 status"
