import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { ExternalLink } from "@/components/ui/ExternalLink";

export const metadata = {
  title: "Contato — Lucas SDR",
  description: "Contato direto para conversas sobre design e produto.",
};

export default function ContactPage() {
  return (
    <Container className="space-y-10">
      <SectionHeader title="Contato" description="Fale comigo por aqui." />

      <Card className="space-y-4 p-6">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] muted">GitHub</p>
          <ExternalLink href="https://github.com/lucassdr">github.com/lucassdr</ExternalLink>
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.2em] muted">LinkedIn</p>
          <ExternalLink href="https://www.linkedin.com/in/lucassdr">linkedin.com/in/lucassdr</ExternalLink>
        </div>
      </Card>
    </Container>
  );
}
