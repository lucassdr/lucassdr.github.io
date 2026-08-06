"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { NavLink } from "@/components/ui/NavLink";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import Link from "next/link";
import { usePathname } from "next/navigation";

const PRIVATE_PROJECTS_URL =
  process.env.NEXT_PUBLIC_PRIVATE_APP_URL ?? "https://projetos-privados.vercel.app";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isProjectsRoute = pathname?.startsWith("/projects");
  const isSectionRoute = isProjectsRoute;
  const sectionLabel = "Projetos";
  const backHref = pathname === "/projects" ? "/" : "/projects";
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        menuButtonRef.current?.focus();
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <header className="border-b border-subtle bg-background">
      <Container className="flex h-16 items-center justify-between">
        {isSectionRoute ? (
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center gap-3">
              <Link
                href={backHref}
                className="inline-flex items-center gap-2 rounded-sm border border-subtle px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-foreground transition-colors hover:bg-foreground/5 focus-ring"
                aria-label="Voltar"
              >
                <svg aria-hidden="true" width="14" height="14" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M12.5 4.5L7 10L12.5 15.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Voltar
              </Link>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground">
                {sectionLabel}
              </span>
            </div>
            <ThemeToggle />
          </div>
        ) : (
          <>
            <Link href="/" className="rounded-sm text-sm font-semibold tracking-wide focus-ring">
              Lucas SDR
            </Link>
            <nav className="hidden items-center gap-6 md:flex">
              <NavLink href="/projects">Projetos</NavLink>
              <NavLink href="/tools">Swiss Army Knife</NavLink>
              <NavLink href="/contact">Contato</NavLink>
              <a
                href={PRIVATE_PROJECTS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm text-sm font-medium muted hover:text-foreground focus-ring"
              >
                Projetos privados
                <span className="sr-only"> (abre em nova aba)</span>
              </a>
              <ThemeToggle />
            </nav>
            <div className="flex items-center gap-3 md:hidden">
              <ThemeToggle />
              <button
                ref={menuButtonRef}
                type="button"
                className="inline-flex h-9 w-9 items-center justify-center rounded-sm border border-subtle text-foreground transition-colors hover:bg-foreground/5 focus-ring"
                aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
                aria-expanded={isOpen}
                aria-controls="mobile-nav"
                onClick={() => setIsOpen((prev) => !prev)}
              >
                {isOpen ? (
                  <svg
                    aria-hidden="true"
                    width="18"
                    height="18"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M5 5L15 15M15 5L5 15"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                ) : (
                  <svg
                    aria-hidden="true"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M3 6H17M3 10H17M3 14H17"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                )}
              </button>
            </div>
          </>
        )}
      </Container>

      {!isSectionRoute && isOpen ? (
        <div id="mobile-nav" className="fixed inset-0 z-50 bg-background md:hidden">
          <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
            <Link href="/" className="rounded-sm text-sm font-semibold tracking-wide focus-ring">
              Lucas SDR
            </Link>
            <button
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center rounded-sm border border-subtle text-foreground transition-colors hover:bg-foreground/5 focus-ring"
              aria-label="Fechar menu"
              onClick={() => {
                setIsOpen(false);
                menuButtonRef.current?.focus();
              }}
            >
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 20 20" fill="none">
                <path
                  d="M5 5L15 15M15 5L5 15"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
          <nav className="mx-auto max-w-5xl px-6 pb-10 pt-6">
            <ul className="space-y-4 text-2xl font-semibold tracking-tight">
              <li>
                <Link
                  href="/projects"
                  className="rounded-sm focus-ring"
                  aria-current={pathname?.startsWith("/projects") ? "page" : undefined}
                  onClick={() => setIsOpen(false)}
                >
                  Projetos
                </Link>
              </li>
              <li>
                <Link
                  href="/tools"
                  className="rounded-sm focus-ring"
                  aria-current={pathname === "/tools" ? "page" : undefined}
                  onClick={() => setIsOpen(false)}
                >
                  Ferramentas e Apps
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="rounded-sm focus-ring"
                  aria-current={pathname === "/contact" ? "page" : undefined}
                  onClick={() => setIsOpen(false)}
                >
                  Contato
                </Link>
              </li>
              <li>
                <a
                  href={PRIVATE_PROJECTS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-sm focus-ring"
                >
                  Projetos privados
                  <span className="sr-only"> (abre em nova aba)</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
