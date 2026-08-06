export type PrivateProjectItem = {
  title: string;
  description: string;
  href?: string;
};

export const privateProjects: PrivateProjectItem[] = [
  {
    title: "Calendário de Contas",
    description: "Gerenciador pessoal de contas recorrentes mensais.",
    href: "https://calendario-de-contas-pessoal.vercel.app/",
  },
  {
    title: "F1 Pessoal",
    description: "Live timing pessoal para acompanhar sessões de Fórmula 1 com dados da OpenF1.",
    href: "https://f1-race-monitor-private.vercel.app/",
  },
];
