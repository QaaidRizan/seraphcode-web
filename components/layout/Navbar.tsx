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
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="relative flex items-center gap-2 overflow-visible rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          {/* Fixed layout height; scale enlarges only the drawn SVG without growing the bar much */}
          <span className="relative inline-flex h-9 shrink-0 items-center overflow-visible">
            <span
              className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[4.5rem] w-[7.5rem] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(0,245,212,0.4)_0%,rgba(0,245,212,0.12)_48%,transparent_72%)] blur-md"
              aria-hidden
            />
            {/* right-side logo glow removed */}
            <SiteLogo
              priority
              className="navbar-logo relative z-[1] h-9 w-auto max-w-[10rem] origin-left scale-[1.85] object-contain object-left sm:max-w-[11rem] sm:scale-[2.08] [filter:brightness(0)_invert(1)_brightness(1.15)_contrast(1.1)_saturate(1.25)_drop-shadow(0_0_14px_rgba(0,245,212,0.5))] md:scale-[2.24]"
            />
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {links.map((l) => (
            <NavLink key={l.href} href={l.href} label={l.label} />
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center border border-border text-foreground lg:hidden focus-cyber"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* right-side header glows removed */}

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-border bg-background px-4 py-4 lg:hidden"
        >
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <NavLink key={l.href} href={l.href} label={l.label} />
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
