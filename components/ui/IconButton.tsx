import * as React from "react";
import { cn } from "@/lib/utils";

export type IconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
};

export function IconButton({ className, label, children, ...props }: IconButtonProps) {
  return (
    <button
      type="button"
      className={cn(
        "inline-flex h-9 w-9 items-center justify-center rounded-sm border border-subtle text-foreground transition-colors hover:bg-foreground/5 focus-ring",
        className
      )}
      aria-label={label}
      {...props}
    >
      {children}
    </button>
  );
}
