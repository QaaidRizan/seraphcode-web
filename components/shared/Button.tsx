import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

const base =
  "inline-flex min-h-11 items-center justify-center gap-2 px-6 py-2.5 font-mono text-sm font-semibold uppercase tracking-[0.15em] transition-[transform,box-shadow,background-color,border-color,color,filter] duration-150 focus-cyber cyber-chamfer-sm";

const variants = {
  primary:
    "border-2 border-accent bg-accent text-[var(--on-accent)] shadow-[var(--box-shadow-neon-sm)] hover:brightness-110",
  glitch:
    "cyber-glitch border-2 border-accent bg-accent text-[var(--on-accent)] hover:brightness-110",
  outline:
    "border-2 border-accent bg-transparent text-accent hover:bg-accent hover:text-[var(--on-accent)] hover:shadow-[var(--box-shadow-neon)]",
  secondary:
    "border-2 border-accent-secondary bg-transparent text-accent-secondary hover:bg-accent-secondary hover:text-[var(--on-accent)] hover:shadow-[var(--box-shadow-neon-secondary)]",
  ghost:
    "border-0 bg-transparent text-muted-foreground hover:bg-accent/10 hover:text-accent",
  muted:
    "border border-border bg-transparent text-foreground hover:border-accent hover:text-accent hover:shadow-[var(--box-shadow-neon-sm)]",
} as const;

type Variant = keyof typeof variants;

type ButtonProps = {
  variant?: Variant;
  href?: string;
  external?: boolean;
  className?: string;
  children: ReactNode;
} & Omit<ComponentProps<"button">, "className" | "children">;

export function Button({
  variant = "outline",
  href,
  external,
  className = "",
  children,
  type = "button",
  ...rest
}: ButtonProps) {
  const cls = `${base} ${variants[variant]} ${className}`.trim();

  if (href) {
    if (external) {
      return (
        <a
          className={cls}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }
    return (
      <Link className={cls} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button className={cls} type={type} {...rest}>
      {children}
    </button>
  );
}
