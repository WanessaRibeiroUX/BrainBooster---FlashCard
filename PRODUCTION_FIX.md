# 🚨 CORREÇÃO DO ERRO "hex string expected, got undefined"

## Problema Identificado

O erro está ocorrendo porque as variáveis de ambiente de produção não estão configuradas corretamente no servidor VPS Ubuntu. O Better Auth está tentando processar um valor `undefined` onde deveria haver uma string hexadecimal.

## ✅ Solução Imediata

### 1. No servidor VPS, navegue para o diretório do projeto:

```bash
cd /root/flash-cards  # ou onde quer que esteja o projeto
```

### 2. Crie o arquivo `.env` com as configurações de produção:

```bash
cat > apps/server/.env << 'EOF'
NODE_ENV=production
CORS_ORIGIN=https://sistemacards.com
BETTER_AUTH_SECRET=YOUR_BETTER_AUTH_SECRET
BETTER_AUTH_URL=https://api.sistemacards.com/api/auth
DATABASE_URL="postgresql://user:password@host:port/database?sslmode=require"
BUCKET_ACCESS_KEY=YOUR_BUCKET_ACCESS_KEY
BUCKET_KEY=YOUR_BUCKET_KEY
BUCKET_URL=https://flash-cards.sfo3.digitaloceanspaces.com
BUCKET_CDN=https://flash-cards.sfo3.cdn.digitaloceanspaces.com
ASAAS_API_KEY_PROD=YOUR_ASAAS_API_KEY
ASAAS_WEBHOOK_SECRET=YOUR_WEBHOOK_SECRET
ASAAS_SANDBOX=false
NEXT_PUBLIC_SERVER_URL=https://api.sistemacards.com
EOF
```

### 3. Pare o serviço atual:

```bash
pm2 stop all
```

### 4. Navegue para o diretório do servidor:

```bash
cd apps/server
```

### 5. Regenere o Prisma client:

```bash
bun run db:generate
```

### 6. Faça o build:

```bash
bun run build
```

### 7. Inicie o serviço novamente:

```bash
pm2 start ecosystem.config.cjs
```

### 8. Monitore os logs:

```bash
pm2 logs flash-cards-server
```

## 🔍 Verificação

Para verificar se tudo está funcionando:

1. **Teste a rota de health check:**

   ```bash
   curl https://api.sistemacards.com/
   ```

2. **Teste a rota de autenticação:**

   ```bash
   curl https://api.sistemacards.com/api/auth/session
   ```

3. **Verifique os logs em tempo real:**
   ```bash
   pm2 logs --follow
   ```

## 🛡️ Prevenção Futura

Para evitar este problema no futuro:

1. **Sempre use o arquivo `.env.production`** como template
2. **Execute o script de diagnóstico** antes de fazer deploy:

   ```bash
   chmod +x apps/server/diagnostic.sh
   ./apps/server/diagnostic.sh
   ```

3. **Use o script de deploy automatizado:**
   ```bash
   chmod +x deploy.sh
   ./deploy.sh
   ```

## 🔧 Debug Adicional

Se o problema persistir, verifique:

1. **Permissões do arquivo .env:**

   ```bash
   ls -la apps/server/.env
   ```

2. **Se as variáveis estão sendo carregadas:**

   ```bash
   cd apps/server && node -e "console.log(process.env.BETTER_AUTH_SECRET)"
   ```

3. **Status do PM2:**
   ```bash
   pm2 status
   pm2 info flash-cards-server
   ```

## 📝 Notas Importantes

- O erro "hex string expected, got undefined" indica que `BETTER_AUTH_SECRET` estava undefined
- Em produção, use `exec_mode: "fork"` ao invés de `"cluster"` para evitar problemas de sessão
- Certifique-se de que `CORS_ORIGIN` e `BETTER_AUTH_URL` apontem para os domínios corretos de produção
