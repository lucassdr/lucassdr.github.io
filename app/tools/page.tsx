import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { tools } from "@/content/data/tools";

export const metadata = {
  title: "Swiss Army Knife — Lucas Sodré",
  description: "Pequenas ferramentas e utilidades públicas construídas por curiosidade.",
};

export default function ToolsPage() {
  return (
    <Container className="space-y-10 py-14">
      <SectionHeader title="Swiss Army Knife" description="Ferramentas pequenas que uso no dia a dia." />

      <div className="space-y-4">
        {tools.map((tool) => (
          <Card key={tool.title} className="p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex items-start gap-4">
                {tool.thumbnail ? (
                  <div className="relative h-16 w-24 overflow-hidden rounded-sm border border-subtle">
                    <Image
                      src={tool.thumbnail}
                      alt={tool.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : null}
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">{tool.title}</h3>
                  <p className="muted">{tool.description}</p>
                </div>
              </div>
              <ExternalLink href={tool.href}>Abrir</ExternalLink>
            </div>
          </Card>
        ))}
      </div>
    </Container>
  );
}
