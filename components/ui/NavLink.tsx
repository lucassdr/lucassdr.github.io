"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export function NavLink({ href, children, className }: NavLinkProps) {
  const pathname = usePathname();
  // Normaliza a barra final: com trailingSlash (export estático), o
  // pathname real vem como "/projects/", nunca igual ao href "/projects".
  const normalizedPath = pathname?.replace(/\/+$/, "") || "/";
  const normalizedHref = href.replace(/\/+$/, "") || "/";
  const isActive = normalizedPath === normalizedHref;

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "rounded-sm text-sm font-medium transition-colors hover:text-primary focus-ring",
        isActive ? "text-primary" : "text-foreground",
        className
      )}
    >
      {children}
    </Link>
  );
}
