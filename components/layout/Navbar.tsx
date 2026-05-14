"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { SiteLogo } from "@/components/layout/SiteLogo";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
  { href: "/careers", label: "Careers" },
] as const;

function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const active = pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <Link
      href={href}
      className={`font-mono text-xs uppercase tracking-[0.2em] transition-colors ${
        active
          ? "text-accent drop-shadow-[0_0_12px_rgba(0,245,212,0.45)]"
          : "text-muted-foreground hover:text-accent"
      }`}
    >
      {label}
    </Link>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative sticky top-0 z-50 overflow-visible border-b border-[color:var(--border-soft)] bg-[color:var(--surface-header)] backdrop-blur-md">
      <div className="mx-auto flex h-14 max-h-14 w-full max-w-7xl items-center justify-between gap-3 overflow-hidden px-4 sm:h-16 sm:max-h-16 sm:px-6 lg:gap-4 lg:px-8">
        <Link
          href="/"
          className="relative flex h-[34px] max-h-[34px] shrink-0 items-center overflow-hidden rounded-sm bg-white px-1.5 shadow-sm ring-1 ring-[rgba(0,0,0,0.08)] outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--surface-header)] md:h-10 md:max-h-10"
        >
          <SiteLogo
            priority
            className="navbar-logo relative z-[1] h-full w-auto max-h-full max-w-[9rem] object-contain object-left sm:max-w-[10rem] md:max-w-[11rem]"
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {links.map((l) => (
            <NavLink key={l.href} href={l.href} label={l.label} />
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-[color:var(--border-accent-faint)] bg-[rgba(0,245,212,0.06)] text-foreground transition-colors hover:bg-[rgba(0,245,212,0.12)] lg:hidden focus-cyber"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-4 w-4" strokeWidth={2.25} /> : <Menu className="h-4 w-4" strokeWidth={2.25} />}
        </button>
      </div>

      {/* right-side header glows removed */}

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-border bg-background px-4 py-3 lg:hidden"
        >
          <div className="flex flex-col gap-3">
            {links.map((l) => (
              <NavLink key={l.href} href={l.href} label={l.label} />
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
