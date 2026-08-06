"use client";

import { useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { ThemeToggle } from "@/components/ThemeToggle";

export function LoginForm() {
  const searchParams = useSearchParams();
  const next = searchParams.get("next") ?? "/projetos-privados";
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setLoading(true);
    setError("");

    const response = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      setLoading(false);
      setError("Usuário ou senha inválidos.");
      return;
    }

    window.location.href = next;
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto w-full max-w-sm space-y-4 px-6 py-24">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Entrar</h1>
        <ThemeToggle />
      </div>

      <div className="space-y-1">
        <label htmlFor="username" className="text-sm muted">
          Usuário
        </label>
        <input
          id="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          className="w-full rounded-sm border border-subtle bg-surface px-3 py-2 text-sm focus-ring"
          autoComplete="username"
          aria-invalid={Boolean(error)}
          aria-describedby={error ? "login-error" : undefined}
          required
        />
      </div>

      <div className="space-y-1">
        <label htmlFor="password" className="text-sm muted">
          Senha
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="w-full rounded-sm border border-subtle bg-surface px-3 py-2 text-sm focus-ring"
          autoComplete="current-password"
          aria-invalid={Boolean(error)}
          aria-describedby={error ? "login-error" : undefined}
          required
        />
      </div>

      {error ? (
        <p id="login-error" role="alert" className="text-sm text-danger">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={loading}
        aria-busy={loading}
        className="w-full rounded-sm bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground focus-ring disabled:opacity-60"
      >
        {loading ? "Entrando…" : "Entrar"}
      </button>
    </form>
  );
}
