import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  baseButtonStyles,
  buttonSizeStyles,
  buttonVariantStyles,
} from "@/components/ui/Button";

type LinkButtonVariant = "primary" | "secondary" | "ghost";
type LinkButtonSize = "sm" | "md" | "lg";

type LinkButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: LinkButtonVariant;
  size?: LinkButtonSize;
  className?: string;
};

export function LinkButton({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
}: LinkButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        baseButtonStyles,
        buttonVariantStyles[variant],
        buttonSizeStyles[size],
        className
      )}
    >
      {children}
    </Link>
  );
}
