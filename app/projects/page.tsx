import { Suspense } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectsList } from "./ProjectsList";

export const metadata = {
  title: "Projetos — Lucas SDR",
  description: "Seleção de projetos com contexto, solução e impacto.",
};

export default function ProjectsPage() {
  return (
    <Container className="space-y-10">
      <SectionHeader title="Projetos" description="Problema, solução e resultado, por projeto." />
      <Suspense fallback={null}>
        <ProjectsList />
      </Suspense>
    </Container>
  );
}
