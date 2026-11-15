export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectItem = {
  slug: string;
  title: string;
  summary: string;
  outcome: string;
  links?: ProjectLink[];
};

export const projects: ProjectItem[] = [
  {
    slug: "central-da-copa",
    title: "Central da Copa",
    summary:
      "Agenda de jogos de futebol do dia, com horários, transmissões e filtro por time, competição e canal.",
    outcome: "No ar em centraldacopa.app.br.",
    links: [{ label: "Acessar", href: "https://www.centraldacopa.app.br/" }],
  },
  {
    slug: "central-da-copa-2026",
    title: "Central da Copa 2026",
    summary:
      "Painel dedicado à Copa do Mundo 2026: jogos, horários de Brasília, classificação, mata-mata, seleções e onde assistir.",
    outcome: "No ar durante a Copa do Mundo 2026.",
    links: [{ label: "Acessar", href: "https://central-da-copa-2026.vercel.app/" }],
  },
  {
    slug: "gameslab",
    title: "GamesLab",
    summary: "Minha central de jogos para se divertir direto no navegador.",
    outcome: "No ar em lucassdr-gameslab.pages.dev.",
    links: [
      {
        label: "Acessar GamesLab",
        href: "https://lucassdr-gameslab.pages.dev/?",
      },
    ],
  },
];
