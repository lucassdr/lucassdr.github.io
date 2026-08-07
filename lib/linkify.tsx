import type { ReactNode } from "react";

/**
 * Se `text` menciona o domínio de `href` (ex.: "No ar em centraldacopa.app.br."
 * e href="https://www.centraldacopa.app.br/"), transforma esse trecho em link
 * clicável. Caso o texto não mencione o domínio, retorna o texto original —
 * não força um link onde não há nada reconhecível para ancorar.
 */
export function linkifyDomainMention(text: string, href?: string): ReactNode {
  if (!href) return text;

  let hostname: string;
  try {
    hostname = new URL(href).hostname.replace(/^www\./, "");
  } catch {
    return text;
  }

  const index = text.toLowerCase().indexOf(hostname.toLowerCase());
  if (index === -1) return text;

  const before = text.slice(0, index);
  const match = text.slice(index, index + hostname.length);
  const after = text.slice(index + hostname.length);

  return (
    <>
      {before}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary underline focus-ring"
      >
        {match}
        <span className="sr-only"> (abre em nova aba)</span>
      </a>
      {after}
    </>
  );
}
