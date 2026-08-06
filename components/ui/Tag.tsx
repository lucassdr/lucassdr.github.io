import { cn } from "@/lib/utils";

export type TagProps = {
  children: React.ReactNode;
  className?: string;
};

export function Tag({ children, className }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-sm border border-subtle px-2 py-0.5 text-xs text-foreground",
        className
      )}
    >
      {children}
    </span>
  );
}
