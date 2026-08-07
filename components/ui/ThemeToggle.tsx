"use client";

import { useEffect, useRef, useState } from "react";
import { THEME_STORAGE_KEY } from "@/lib/theme-script";
import { cn } from "@/lib/utils";

type Theme = "light" | "dark" | "system";

const LABEL: Record<Theme, string> = {
  system: "Sistema",
  light: "Claro",
  dark: "Escuro",
};

const OPTIONS: Theme[] = ["light", "dark", "system"];

function applyTheme(theme: Theme) {
  if (theme === "system") {
    document.documentElement.removeAttribute("data-theme");
  } else {
    document.documentElement.setAttribute("data-theme", theme);
  }
}

function ThemeIcon({ theme }: { theme: Theme }) {
  if (theme === "light") {
    return (
      <svg aria-hidden="true" width="16" height="16" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="4" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M10 2v2M10 16v2M18 10h-2M4 10H2M15.5 4.5l-1.4 1.4M5.9 14.1l-1.4 1.4M15.5 15.5l-1.4-1.4M5.9 5.9L4.5 4.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (theme === "dark") {
    return (
      <svg aria-hidden="true" width="16" height="16" viewBox="0 0 20 20" fill="none">
        <path
          d="M17 11.5A7 7 0 0 1 8.5 3a7 7 0 1 0 8.5 8.5Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 20 20" fill="none">
      <rect x="2.5" y="4" width="15" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7 17h6M10 14v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

/**
 * Ícone "colapsado" de tema. Clicar abre um menu com as opções
 * Claro / Escuro / Sistema — sem texto fixo ocupando espaço no header.
 */
export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("system");
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    setTheme(stored === "light" || stored === "dark" ? stored : "system");
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  function selectTheme(next: Theme) {
    setTheme(next);
    applyTheme(next);
    if (next === "system") {
      localStorage.removeItem(THEME_STORAGE_KEY);
    } else {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    }
    setIsOpen(false);
  }

  return (
    <div ref={containerRef} className="relative inline-block">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={`Tema: ${mounted ? LABEL[theme] : ""}. Clique para escolher.`}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        className="inline-flex h-9 w-9 items-center justify-center rounded-sm border border-subtle text-foreground transition-colors hover:bg-foreground/5 focus-ring"
      >
        {mounted ? <ThemeIcon theme={theme} /> : null}
      </button>

      {isOpen ? (
        <div
          role="menu"
          className="absolute right-0 z-10 mt-2 w-36 rounded-sm border border-subtle bg-surface py-1 shadow-lg"
        >
          {OPTIONS.map((option) => (
            <button
              key={option}
              type="button"
              role="menuitemradio"
              aria-checked={theme === option}
              onClick={() => selectTheme(option)}
              className={cn(
                "flex w-full items-center gap-2 px-3 py-2 text-left text-sm transition-colors hover:bg-foreground/5",
                theme === option ? "font-semibold text-primary" : "text-foreground"
              )}
            >
              <ThemeIcon theme={option} />
              {LABEL[option]}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
