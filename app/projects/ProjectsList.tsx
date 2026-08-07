import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";
import { projects } from "@/content/data/projects";

export function ProjectsList() {
  return (
    <div className="space-y-4">
      {projects.map((project) => (
        <Card key={project.slug} className="p-6">
          <div className="space-y-3">
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <Link
                href={`/projects/${project.slug}`}
                className="rounded-sm text-sm text-primary focus-ring"
              >
                Ver detalhes
              </Link>
            </div>
            <p className="muted">{project.summary}</p>
            <p className="text-sm">{project.outcome}</p>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
