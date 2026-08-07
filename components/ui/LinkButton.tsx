import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  baseButtonStyles,
  buttonSizeStyles,
  buttonVariantStyles,
} from "@/components/ui/Button";

type LinkButtonVariant = "primary" | "secondary" | "ghost" | "accent";
type LinkButtonSize = "sm" | "md" | "lg";

type LinkButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: LinkButtonVariant;
  size?: LinkButtonSize;
  className?: string;
  target?: "_blank";
};

export function LinkButton({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  target,
}: LinkButtonProps) {
  const isExternal = target === "_blank";

  return (
    <Link
      href={href}
      target={target}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={cn(
        baseButtonStyles,
        buttonVariantStyles[variant],
        buttonSizeStyles[size],
        className
      )}
    >
      {children}
      {isExternal ? <span className="sr-only"> (abre em nova aba)</span> : null}
    </Link>
  );
}
