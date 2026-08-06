import { cn } from "@/lib/utils";

type ExternalLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export function ExternalLink({ href, children, className }: ExternalLinkProps) {
  return (
    <a
      href={href}
      className={cn("rounded-sm text-sm font-medium text-foreground underline focus-ring", className)}
      target="_blank"
      rel="noreferrer"
    >
      {children}
      <span className="sr-only"> (abre em nova aba)</span>
    </a>
  );
}
