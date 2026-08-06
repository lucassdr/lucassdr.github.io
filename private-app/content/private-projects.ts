export type PrivateProjectItem = {
  title: string;
  description: string;
  href?: string;
};

export const privateProjects: PrivateProjectItem[] = [
  {
    title: "Calendário de Conta",
    description: "Calendário mensal de contas pessoais",
    href: "https://calendario-de-contas-pessoal.vercel.app/",
  },
  {
    title: "F1 Race Monitor",
    description: "Monitor das sessões de F1 ao vivo",
    href: "https://f1-race-monitor-private.vercel.app/",
  }
];
