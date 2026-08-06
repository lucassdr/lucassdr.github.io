import { Container } from "@/components/ui/Container";
import { ExternalLink } from "@/components/ui/ExternalLink";

export function SiteFooter() {
  return (
    <footer className="border-t border-subtle bg-background">
      <Container className="flex flex-col gap-4 py-10 text-sm md:flex-row md:items-center md:justify-between">
        <p className="muted">Disponível para novos projetos.</p>
        <div className="flex flex-wrap gap-4">
          <ExternalLink href="https://github.com/lucassdr">GitHub</ExternalLink>
          <ExternalLink href="https://www.linkedin.com/in/lucassdr">LinkedIn</ExternalLink>
        </div>
      </Container>
    </footer>
  );
}
