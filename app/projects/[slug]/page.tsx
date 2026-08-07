import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Divider } from "@/components/ui/Divider";
import { LinkButton } from "@/components/ui/LinkButton";
import { mdxComponents } from "@/components/mdx/MDXComponents";
import { projects } from "@/content/data/projects";
import { getProjectBySlug } from "@/lib/content";

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return { title: "Projeto não encontrado" };
  }

  return {
    title: `${project.title} — Lucas Sodré`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const { content, frontmatter } = getProjectBySlug(project.slug);

  return (
    <Container className="space-y-10">
      <div className="space-y-4">
        <p className="text-xs uppercase tracking-[0.2em] muted">Projeto</p>
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
          {project.title}
        </h1>
        <p className="muted max-w-2xl">{frontmatter.description || project.summary}</p>
        {project.links?.length ? (
          <div className="flex flex-wrap gap-4">
            {project.links.map((link) => (
              <LinkButton key={link.href} href={link.href} size="lg" target="_blank">
                {link.label}
              </LinkButton>
            ))}
          </div>
        ) : null}
      </div>

      <Divider />

      <SectionHeader title="Resumo" />

      <div className="mdx max-w-3xl">
        <MDXRemote source={content} components={mdxComponents} />
      </div>
    </Container>
  );
}
