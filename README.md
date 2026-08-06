# Lucas SDR — Portfolio

## Como rodar localmente

1. Instale as dependências:
   ```bash
   yarn
   ```
   ou
   ```bash
   npm install
   ```
2. Inicie o ambiente local:
   ```bash
   yarn dev
   ```
3. Acesse `http://localhost:3000`.

## Como adicionar conteúdo

### Projetos

- Dados estruturados em `content/data/projects.ts`.
- Conteúdo longo em MDX dentro de `content/projects`.

Exemplo:

1. Adicione um novo item em `content/data/projects.ts`:
   ```ts
   {
     slug: "novo-projeto",
     title: "Novo Projeto",
     summary: "Problema resumido.",
     outcome: "Resultado principal.",
     stack: ["Next.js", "TypeScript"],
     tags: ["produto"],
     links: [{ label: "Case study", href: "https://..." }],
   }
   ```
2. Crie o MDX correspondente em `content/projects/novo-projeto.mdx` com as seções:
   - Context
   - Role
   - Constraints
   - Solution
   - Results
   - Learnings (opcional)

### Tools

- Dados estruturados em `content/data/tools.ts`.
- Miniaturas opcionais em `public/tools`.

### Projetos privados

Não ficam neste app. É um app Next.js separado em `private-app/`, com login
(usuário/senha em env var) e deploy próprio na Vercel — veja `private-app/README.md`.
O link "Projetos privados" no menu aponta para a URL definida em
`NEXT_PUBLIC_PRIVATE_APP_URL`.

## Como ajustar a paleta (máximo 2–3 cores)

As cores estão centralizadas em `app/globals.css`:

```css
:root {
  --color-background: #f7f5f2;
  --color-foreground: #1c1c1c;
  --color-primary: #2f6b58;
}
```

- Use **apenas** essas variáveis e mantenha o total em 2–3 cores.
- Evite adicionar novas cores no Tailwind.

## Deploy

Este app é estático (`output: "export"` em `next.config.mjs`) para publicar no GitHub
Pages. `npm run build` gera a pasta `out/`.

## Estrutura geral

- `app/` rotas e layout
- `components/ui/` UI kit
- `content/` conteúdo e dados
- `lib/` utilitários e carregamento de MDX
- `private-app/` app separado (área de projetos privados, deploy na Vercel)

