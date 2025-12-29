# 🧠 BrainBooster - Flashcards Inteligentes

![Status do Projeto](https://img.shields.io/badge/Status-Em%20Desenvolvimento-yellow)
![Next.js](https://img.shields.io/badge/Next.js-15-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Prisma](https://img.shields.io/badge/Prisma-ORM-green)
![Hono](https://img.shields.io/badge/Hono-API-orange)

## 📋 Sobre o Projeto

O **BrainBooster** é uma plataforma moderna de Flashcards projetada para otimizar o aprendizado através da técnica de repetição espaçada. O projeto visa oferecer uma experiência de usuário fluida e intuitiva, permitindo que estudantes criem, organizem e estudem seus decks de forma eficiente.

Este projeto foi desenvolvido com foco em performance, escalabilidade e melhores práticas de engenharia de software, utilizando uma arquitetura **Monorepo** com **TurboRepo**.

## ✨ Funcionalidades Principais

- **📚 Gestão de Decks e Flashcards:** Criação, edição e organização de baralhos e cartões de estudo.
- **🔄 Importação do Anki:** Capacidade de importar decks existentes do Anki (`.apkg`), facilitando a migração de usuários.
- **🧠 Algoritmo de Repetição Espaçada:** Sistema inteligente que agenda revisões com base no desempenho do usuário para maximizar a retenção.
- **🛒 Marketplace (Em breve):** Plataforma para compartilhamento e venda de decks de alta qualidade.
- **💳 Integração de Pagamentos:** Sistema de assinaturas e compras integrado com **Asaas**.
- **🔐 Autenticação Segura:** Sistema robusto de login e registro utilizando **Better Auth**.
- **📝 Editor Rico:** Criação de flashcards com suporte a formatação avançada (WYSIWYG) usando **TipTap**.

## 🛠️ Tecnologias Utilizadas

O projeto utiliza uma stack moderna e robusta:

### Frontend (`apps/web`)

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS, Shadcn/ui
- **Gerenciamento de Estado:** TanStack Query (React Query)
- **Comunicação API:** tRPC (Type-safe APIs)
- **Editor de Texto:** TipTap
- **Drag & Drop:** dnd-kit

### Backend (`apps/server`)

- **Runtime:** [Bun](https://bun.sh/) (Alta performance)
- **Framework:** [Hono](https://hono.dev/) (Leve e rápido)
- **ORM:** Prisma
- **Banco de Dados:** PostgreSQL (Produção) / SQLite (Dev)
- **Autenticação:** Better Auth
- **Armazenamento:** AWS S3 Compatible (DigitalOcean Spaces)

### DevOps & Ferramentas

- **Monorepo:** TurboRepo
- **Deploy:** Vercel (Frontend) / DigitalOcean (Backend/Database)
- **Linting/Formatting:** ESLint, Prettier

## 🚀 Como Executar Localmente

### Pré-requisitos

- Node.js (v20+)
- Bun (v1.0+)
- Git

### Passo a Passo

1.  **Clone o repositório:**

    ```bash
    git clone https://github.com/WanessaRibeiroUX/BrainBooster---FlashCard.git
    cd BrainBooster---FlashCard
    ```

2.  **Instale as dependências:**

    ```bash
    bun install
    ```

3.  **Configure as variáveis de ambiente:**
    Crie um arquivo `.env` na raiz de `apps/server` e `apps/web` baseando-se nos arquivos `.env.example`.

4.  **Configure o Banco de Dados:**

    ```bash
    turbo run db:generate
    turbo run db:push
    ```

5.  **Inicie o servidor de desenvolvimento:**

    ```bash
    turbo dev
    ```

    - O Frontend estará disponível em: `http://localhost:3001`
    - O Backend estará disponível em: `http://localhost:3000`

## 📂 Estrutura do Projeto

```
.
├── apps/
│   ├── web/          # Aplicação Frontend (Next.js)
│   └── server/       # API Backend (Hono + Bun)
├── packages/         # Pacotes compartilhados (UI, Configs, etc.)
├── turbo.json        # Configuração do TurboRepo
└── package.json      # Dependências raiz
```

## 👤 Autora

**Wanessa Ribeiro**

- [LinkedIn](https://www.linkedin.com/in/wanessaribeiroux/)
- [GitHub](https://github.com/WanessaRibeiroUX)

---

_Desenvolvido com ❤️ e muito café._
