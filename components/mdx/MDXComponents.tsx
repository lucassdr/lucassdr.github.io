import Link from "next/link";
import type { ComponentType } from "react";

type MDXComponents = Record<string, ComponentType<any>>;

function MDXLink({ href = "", children }: { href?: string; children: React.ReactNode }) {
  const isExternal = href.startsWith("http");

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className="underline">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className="underline">
      {children}
    </Link>
  );
}

export const mdxComponents: MDXComponents = {
  a: MDXLink,
};
