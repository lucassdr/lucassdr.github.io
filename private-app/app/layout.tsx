import type { Metadata } from "next";
import "./globals.css";
import { themeInitScript } from "@/lib/theme-script";

export const metadata: Metadata = {
  title: "Projetos privados — Lucas Sodré",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
