import { privateProjects } from "@/content/private-projects";
import { LogoutButton } from "@/components/LogoutButton";
import { ThemeToggle } from "@/components/ThemeToggle";

export const metadata = {
  title: "Projetos privados",
  robots: { index: false, follow: false },
};

export default function PrivateProjectsPage() {
  return (
    <main className="mx-auto max-w-3xl space-y-8 px-6 py-16">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Projetos privados</h1>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <LogoutButton />
        </div>
      </div>

      <div className="space-y-4">
        {privateProjects.map((project) => (
          <div key={project.title} className="rounded-sm border border-subtle bg-surface p-6">
            <h2 className="text-lg font-semibold">{project.title}</h2>
            <p className="muted mt-1">{project.description}</p>
            {project.href ? (
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-block text-sm underline"
              >
                Abrir
              </a>
            ) : null}
          </div>
        ))}
      </div>
    </main>
  );
}
