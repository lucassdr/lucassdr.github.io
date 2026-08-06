export type ToolItem = {
  title: string;
  description: string;
  href: string;
  thumbnail?: string;
};

export const tools: ToolItem[] = [
  {
    title: "Family Bingo",
    description: "Cartelas simples para imprimir e brincar em reuniões de família.",
    href: "https://example.com/family-bingo",
    thumbnail: "/tools/family-bingo.svg",
  },
  {
    title: "Meeting Timer",
    description: "Temporizador silencioso para ritmos de workshop e entrevistas.",
    href: "https://example.com/meeting-timer",
  }
];
