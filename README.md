# Portfólio pessoal

Portfólio responsivo em Next.js com App Router, Tailwind CSS e Framer Motion.

## Instalação

```bash
npm install
cp .env.example .env.local
npm run dev
```

Acesse `http://localhost:3000`.

## Personalização

Edite os dados mockados em `lib/data.ts`. Configure o Resend em `.env.local` usando as variáveis descritas em `.env.example`.

## Deploy

Faça o deploy na Vercel importando o repositório. Adicione as variáveis `RESEND_API_KEY`, `RESEND_FROM_EMAIL` e `RESEND_TO_EMAIL` nas configurações do projeto.