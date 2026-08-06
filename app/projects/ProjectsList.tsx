"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";
import { projects } from "@/content/data/projects";

export function ProjectsList() {
  const searchParams = useSearchParams();
  const tag = searchParams.get("tag") ?? undefined;
  const tags = Array.from(new Set(projects.flatMap((project) => project.tags))).sort();
  const filteredProjects = tag ? projects.filter((project) => project.tags.includes(tag)) : projects;

  return (
    <>
      <div className="flex flex-wrap gap-2">
        <Link
          href="/projects"
          aria-current={!tag ? "true" : undefined}
          className={`rounded-sm border border-subtle px-3 py-1 text-xs font-medium focus-ring ${
            !tag ? "bg-primary text-primary-foreground" : "text-foreground"
          }`}
        >
          Todos
        </Link>
        {tags.map((item) => (
          <Link
            key={item}
            href={`/projects?tag=${item}`}
            aria-current={tag === item ? "true" : undefined}
            className={`rounded-sm border border-subtle px-3 py-1 text-xs font-medium focus-ring ${
              tag === item ? "bg-primary text-primary-foreground" : "text-foreground"
            }`}
          >
            {item}
          </Link>
        ))}
      </div>

      <div className="mt-4 space-y-4">
        {filteredProjects.map((project) => (
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
    </>
  );
}
