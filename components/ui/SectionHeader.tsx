import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeader({ title, description, className }: SectionHeaderProps) {
  return (
    <div className={cn("space-y-2", className)}>
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      {description ? <p className="muted max-w-2xl">{description}</p> : null}
    </div>
  );
}
