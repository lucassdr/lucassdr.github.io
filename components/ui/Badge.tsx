import { cn } from "@/lib/utils";

export type BadgeProps = {
  children: React.ReactNode;
  className?: string;
};

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-sm border border-subtle bg-surface px-2.5 py-1 text-xs font-medium text-foreground",
        className
      )}
    >
      {children}
    </span>
  );
}
