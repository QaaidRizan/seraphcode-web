import Link from "next/link";
import type { LucideIcon } from "lucide-react";

export function FeatureCard({
  icon: Icon,
  title,
  description,
  href,
  variant = "default",
}: {
  icon?: LucideIcon;
  title: string;
  description: string;
  href?: string;
  variant?: "default" | "terminal";
}) {
  const inner = (
    <>
      {Icon ? (
        <div className="mb-4 inline-flex h-11 w-11 items-center justify-center border border-border text-accent shadow-[var(--box-shadow-neon-sm)]">
          <Icon
            className="icon-cyber-glow h-5 w-5"
            strokeWidth={1.5}
            aria-hidden
          />
        </div>
      ) : null}
      <h3 className="font-heading mb-2 text-lg font-semibold uppercase tracking-wide text-foreground">
        {title}
      </h3>
      <p className="text-sm leading-relaxed tracking-wide text-muted-foreground">
        {description}
      </p>
      {href ? (
        <span className="mt-4 inline-block font-mono text-xs uppercase tracking-widest text-accent">
          View →
        </span>
      ) : null}
    </>
  );

  const shell =
    variant === "terminal" ? (
      <div className="cyber-chamfer cyber-interactive-card border border-border bg-background hover:-translate-y-px hover:border-accent hover:shadow-[var(--box-shadow-neon-sm)]">
        <div className="flex items-center gap-2 border-b border-border bg-card px-4 py-2">
          <span className="h-2 w-2 rounded-full bg-destructive/90" />
          <span className="h-2 w-2 rounded-full bg-[#fbbf24]/90" />
          <span className="h-2 w-2 rounded-full bg-accent/90" />
          <span className="ml-auto font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            session
          </span>
        </div>
        <div className="p-6">{inner}</div>
      </div>
    ) : (
      <div className="cyber-chamfer cyber-interactive-card h-full border border-border bg-card p-6 hover:-translate-y-px hover:border-accent hover:shadow-[var(--box-shadow-neon-sm)]">
        {inner}
      </div>
    );

  if (href) {
    return (
      <Link href={href} className="group block h-full">
        {shell}
      </Link>
    );
  }

  return shell;
}
