import { Card } from "@/components/ui/Card";
import { LinkButton } from "@/components/ui/LinkButton";
import { projects } from "@/content/data/projects";

export function ProjectsList() {
  return (
    <div className="space-y-4">
      {projects.map((project) => (
        <Card key={project.slug} className="p-6">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="muted">{project.summary}</p>
              <p className="text-sm">{project.outcome}</p>
            </div>
            <LinkButton href={`/projects/${project.slug}`} variant="secondary" size="sm">
              Ver detalhes
            </LinkButton>
          </div>
        </Card>
      ))}
    </div>
  );
}
