import * as React from "react";
import { cn } from "@/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  helperText?: string;
  error?: string;
};

export function Input({
  className,
  label,
  helperText,
  error,
  id,
  name,
  ...props
}: InputProps) {
  const inputId = id ?? name;
  const helperId = helperText || error ? `${inputId}-helper` : undefined;

  return (
    <div className="space-y-2">
      {label ? (
        <label htmlFor={inputId} className="text-sm font-medium">
          {label}
        </label>
      ) : null}
      <input
        id={inputId}
        name={name}
        className={cn(
          "w-full rounded-sm border border-subtle bg-surface px-3 py-2 text-sm transition-colors focus-ring",
          error ? "border-primary" : "",
          className
        )}
        aria-invalid={Boolean(error)}
        aria-describedby={helperId}
        {...props}
      />
      {error ? (
        <p id={helperId} className="text-xs text-primary">
          {error}
        </p>
      ) : helperText ? (
        <p id={helperId} className="text-xs muted">
          {helperText}
        </p>
      ) : null}
    </div>
  );
}
