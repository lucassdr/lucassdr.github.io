import Link from "next/link";
import { Container } from "@/components/ui/Container";

type FeaturedProject = {
  slug: string;
  title: string;
  filename: string;
  status: string;
  statusVariant: "live" | "seasonal";
  problem: string;
  solution: string;
  result: React.ReactNode;
  tags?: string[];
};

const featuredProjects: FeaturedProject[] = [
  {
    slug: "central-da-copa",
    title: "Central da Copa",
    filename: "central-da-copa.feature",
    status: "no ar",
    statusVariant: "live",
    problem: "Achar onde e quando assistir aos jogos do dia significa checar vários apps e sites diferentes.",
    solution: "Agenda dos jogos do dia, com horários, transmissões e filtro por time, competição e canal.",
    result: (
      <>
        No ar em{" "}
        <a href="https://www.centraldacopa.app.br/" target="_blank" rel="noopener noreferrer">
          centraldacopa.app.br<span className="sr-only"> (abre em nova aba)</span>
        </a>
      </>
    ),
    tags: ["React", "Vite", "TypeScript"],
  },
  {
    slug: "central-da-copa-2026",
    title: "Central da Copa 2026",
    filename: "central-da-copa-2026.feature",
    status: "sazonal · copa 2026",
    statusVariant: "seasonal",
    problem: "Durante a Copa, jogos, tabela e transmissão ficam espalhados em fontes diferentes.",
    solution: "Painel dedicado à Copa do Mundo 2026: horários de Brasília, classificação, mata-mata, seleções e onde assistir.",
    result: "No ar durante a Copa do Mundo 2026.",
  },
  {
    slug: "bingo-virtual",
    title: "Bingo Virtual",
    filename: "bingo-virtual.feature",
    status: "publicado",
    statusVariant: "live",
    problem: "Jogar bingo em grupo geralmente exige imprimir e organizar cartelas.",
    solution: "Cartela de bingo virtual, pronta para jogar em grupo direto do navegador.",
    result: "Publicado como Claude Artifact.",
  },
];

function WindowDots() {
  return (
    <span className="terminal-dots" aria-hidden="true">
      <span className="terminal-dot terminal-dot--red" />
      <span className="terminal-dot terminal-dot--amber" />
      <span className="terminal-dot terminal-dot--green" />
    </span>
  );
}

export default function HomePage() {
  return (
    <div className="homepage">
      <section className="homepage-hero" aria-labelledby="home-title">
        <Container className="homepage-hero__grid">
          <div>
            <p className="terminal-eyebrow">Desenvolvedor de software</p>
            <h1 id="home-title">
              Construo aplicações web, APIs e integrações que resolvem problemas reais de negócio.
            </h1>
            <p className="homepage-hero__lead">
              Vou além de implementar tarefas: entendo o problema, o contexto e os riscos técnicos
              antes de propor solução. Abaixo, alguns projetos.
            </p>
            <Link className="terminal-button" href="/projects">
              Ver projetos <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="terminal-window" aria-hidden="true">
            <div className="terminal-window__bar">
              <WindowDots />
              <span>abordagem.feature</span>
            </div>
            <div className="terminal-window__body">
              <p><strong>Cenário:</strong> <b>Novo projeto</b></p>
              <p><strong>Dado</strong> um problema real de negócio</p>
              <p><strong>Quando</strong> entendo o contexto e os riscos técnicos</p>
              <p><strong>Então</strong> proponho uma solução — não só uma tarefa</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="homepage-projects" aria-labelledby="featured-projects-title">
        <Container>
          <div className="homepage-projects__heading">
            <p className="terminal-eyebrow">Projetos</p>
            <h2 id="featured-projects-title">Problema, solução e resultado, resumidos.</h2>
          </div>

          <ul className="project-file-list">
            {featuredProjects.map((project) => (
              <li className="project-file" key={project.slug}>
                <div className="project-file__bar">
                  <WindowDots />
                  <span className="project-file__filename">{project.filename}</span>
                  <span className={`project-status project-status--${project.statusVariant}`}>
                    <span aria-hidden="true" />
                    {project.status}
                  </span>
                </div>
                <div className="project-file__body">
                  <h3>{project.title}</h3>
                  <dl className="project-diff">
                    <div className="project-diff__line project-diff__line--problem">
                      <dt><span aria-hidden="true">−</span> Problema</dt>
                      <dd>{project.problem}</dd>
                    </div>
                    <div className="project-diff__line project-diff__line--solution">
                      <dt><span aria-hidden="true">+</span> Solução</dt>
                      <dd>{project.solution}</dd>
                    </div>
                    <div className="project-diff__line project-diff__line--result">
                      <dt><span aria-hidden="true">→</span> Resultado</dt>
                      <dd>{project.result}</dd>
                    </div>
                  </dl>
                  {project.tags ? (
                    <ul className="project-tags" aria-label={`Tecnologias usadas em ${project.title}`}>
                      {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
                    </ul>
                  ) : null}
                  <Link className="project-file__link" href={`/projects/${project.slug}`}>
                    Ver detalhes <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </div>
  );
}
