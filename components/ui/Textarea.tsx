import * as React from "react";
import { cn } from "@/lib/utils";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
  helperText?: string;
  error?: string;
};

export function Textarea({
  className,
  label,
  helperText,
  error,
  id,
  name,
  ...props
}: TextareaProps) {
  const textareaId = id ?? name;
  const helperId = helperText || error ? `${textareaId}-helper` : undefined;

  return (
    <div className="space-y-2">
      {label ? (
        <label htmlFor={textareaId} className="text-sm font-medium">
          {label}
        </label>
      ) : null}
      <textarea
        id={textareaId}
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
