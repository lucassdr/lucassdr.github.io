export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectItem = {
  slug: string;
  title: string;
  summary: string;
  outcome: string;
  stack: string[];
  tags: string[];
  links?: ProjectLink[];
};

export const projects: ProjectItem[] = [
  {
    slug: "civic-dashboard",
    title: "Civic Dashboard",
    summary: "Organizar dados públicos dispersos para análise de impacto urbano.",
    outcome: "Painel reduziu o tempo de leitura de indicadores em 42% para equipes internas.",
    stack: ["Next.js", "TypeScript", "D3"],
    tags: ["dados", "produto"],
    links: [
      { label: "Case study", href: "https://example.com/civic-dashboard" },
      { label: "Repositório", href: "https://github.com/example/civic-dashboard" }
    ],
  },
  {
    slug: "calm-finance",
    title: "Calm Finance",
    summary: "Simplificar decisões financeiras pessoais sem jargões.",
    outcome: "Usuários relataram 35% menos dúvidas no primeiro uso.",
    stack: ["React", "TypeScript", "Tailwind"],
    tags: ["fintech", "ux"],
    links: [
      { label: "Demo", href: "https://example.com/calm-finance" }
    ],
  },
  {
    slug: "studio-archive",
    title: "Studio Archive",
    summary: "Reorganizar acervo criativo para consulta rápida e curadoria.",
    outcome: "Equipe editorial reduziu 60% do tempo de busca por referências.",
    stack: ["Next.js", "MDX", "Contentful"],
    tags: ["editorial", "conteudo"],
    links: [
      { label: "Case study", href: "https://example.com/studio-archive" }
    ],
  }
];
