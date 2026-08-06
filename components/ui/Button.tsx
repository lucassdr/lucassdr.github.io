import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

export const baseButtonStyles =
  "inline-flex items-center justify-center gap-2 rounded-sm border border-subtle text-sm font-medium transition-colors focus-ring disabled:cursor-not-allowed disabled:opacity-60";

export const buttonVariantStyles: Record<ButtonVariant, string> = {
  primary: "bg-primary text-primary-foreground hover:bg-primary/90",
  secondary: "bg-transparent text-foreground hover:bg-foreground/5",
  ghost: "border-transparent text-foreground hover:bg-foreground/5",
};

export const buttonSizeStyles: Record<ButtonSize, string> = {
  sm: "h-8 px-3",
  md: "h-10 px-4",
  lg: "h-11 px-5 text-base",
};

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
};

export function Button({
  className,
  variant = "primary",
  size = "md",
  loading = false,
  disabled,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        baseButtonStyles,
        buttonVariantStyles[variant],
        buttonSizeStyles[size],
        className
      )}
      disabled={disabled || loading}
      aria-busy={loading}
      {...props}
    >
      {loading ? "Carregando…" : children}
    </button>
  );
}
