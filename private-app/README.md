# Projetos privados

App Next.js separado do site principal (que roda estático no GitHub Pages). Este aqui
precisa de servidor (middleware + API routes), por isso é deployado à parte, na Vercel.

## Rodar localmente

1. Copie `.env.example` para `.env.local` e preencha:
   - `AUTH_USER` / `AUTH_PASSWORD`: credenciais de login.
   - `AUTH_SECRET`: string aleatória usada para assinar o cookie de sessão (ex: `openssl rand -hex 32`).
2. `npm install`
3. `npm run dev` e acesse `http://localhost:3000`.

## Como funciona o login

- `/login` mostra o formulário e envia para `POST /api/login`.
- `/api/login` compara usuário/senha com as env vars e, se baterem, seta um cookie
  httpOnly assinado (HMAC-SHA256, ver `lib/session.ts`) com validade de 7 dias.
- `middleware.ts` protege todas as rotas em `/projetos-privados/*`: sem cookie válido,
  redireciona para `/login`.
- `/api/logout` limpa o cookie.

Sem banco de dados, sem lib externa de auth — só cookie assinado com um segredo.

## Adicionar projetos privados

Edite `content/private-projects.ts`, adicionando itens com `title`, `description` e
`href` opcional.

## Deploy na Vercel

1. Importe este repositório na Vercel, apontando o **Root Directory** para `private-app/`.
2. Configure as env vars `AUTH_USER`, `AUTH_PASSWORD` e `AUTH_SECRET` no projeto da Vercel.
3. Depois do primeiro deploy, copie a URL gerada (ex: `https://xxxxx.vercel.app`) e
   defina `NEXT_PUBLIC_PRIVATE_APP_URL` nas env vars do site principal (build do GitHub
   Pages) para que o link "Projetos privados" no menu aponte para ela.
