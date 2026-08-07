import { Container } from "@/components/ui/Container";
import { ExternalLink } from "@/components/ui/ExternalLink";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <Container className="flex flex-col gap-4 py-10 text-sm md:flex-row md:items-center md:justify-between">
        <p className="site-footer__status"><span aria-hidden="true" />Disponível para novos projetos.</p>
        <div className="site-footer__links flex flex-wrap gap-4">
          <ExternalLink href="https://github.com/lucassdr">GitHub</ExternalLink>
          <ExternalLink href="https://www.linkedin.com/in/lucassdr">LinkedIn</ExternalLink>
        </div>
      </Container>
    </footer>
  );
}
