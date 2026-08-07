import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { LinkButton } from "@/components/ui/LinkButton";
import { projects } from "@/content/data/projects";
import { linkifyDomainMention } from "@/lib/linkify";

export default function HomePage() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <Container className="space-y-16">
      <section className="space-y-6">
        <p className="text-sm uppercase tracking-[0.2em] muted">Desenvolvedor de software</p>
        <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
          Construo aplicações web, APIs e integrações que resolvem problemas reais de negócio.
        </h1>
        <p className="muted max-w-2xl text-lg">
          Vou além de implementar tarefas: entendo o problema, o contexto e os riscos técnicos
          antes de propor solução. Abaixo, alguns projetos.
        </p>
        <LinkButton href="/projects" variant="accent" size="lg">
          Ver projetos
        </LinkButton>
      </section>

      <section className="space-y-6">
        <SectionHeader title="Projetos" description="Problema, solução e resultado, resumidos." />
        <div className="space-y-4">
          {featuredProjects.map((project) => (
            <Card key={project.slug} className="p-6">
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="muted">{project.summary}</p>
                  <p className="text-sm">
                    {linkifyDomainMention(project.outcome, project.links?.[0]?.href)}
                  </p>
                </div>
                <LinkButton href={`/projects/${project.slug}`} variant="secondary" size="sm">
                  Ver detalhes
                </LinkButton>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </Container>
  );
}
