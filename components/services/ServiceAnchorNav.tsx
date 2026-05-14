"use client";

import Link from "next/link";

const items = [
  { href: "#web-dev", label: "Web Development" },
  { href: "#mobile-dev", label: "Mobile Apps" },
  { href: "#ai-automation", label: "AI & Automation" },
  { href: "#cloud-solutions", label: "Cloud Solutions" },
  { href: "#cybersecurity", label: "Cybersecurity" },
  { href: "#seraphsuite-erp", label: "SeraphSuite ERP" },
] as const;

export function ServiceAnchorNav() {
  return (
    <div className="sticky top-[3.75rem] z-40 border-b border-border bg-[color:var(--surface-subnav)] backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 py-3 sm:px-6 lg:px-8">
        {items.map((i) => (
          <Link
            key={i.href}
            href={i.href}
            className="shrink-0 whitespace-nowrap border border-border bg-card px-3 py-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground transition-colors hover:border-accent hover:text-accent sm:text-xs"
          >
            {i.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
