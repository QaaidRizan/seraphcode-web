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
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-1 sm:px-6 sm:py-2 lg:px-8 lg:py-0.5">
        <Link
          href="/"
          className="relative flex min-h-[4.75rem] min-w-0 shrink items-center gap-2 overflow-visible rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background lg:min-h-0"
        >
          {/* Mobile/tablet: tall wordmark. Desktop (lg+): still prominent but fits beside horizontal nav */}
          <span className="relative inline-flex h-[4.75rem] shrink-0 items-center overflow-visible sm:h-[5.75rem] md:h-[6.75rem] lg:h-[5.5rem]">
            <span
              className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-44 w-64 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(0,245,212,0.45)_0%,rgba(0,245,212,0.14)_50%,transparent_75%)] blur-md sm:h-48 sm:w-[17rem] md:h-56 md:w-80 lg:h-52 lg:w-60"
              aria-hidden
            />
            <SiteLogo
              priority
              className="navbar-logo relative z-[1] h-[4.75rem] w-auto max-w-[min(100%,21rem)] object-contain object-left [filter:brightness(0)_invert(1)_brightness(1.18)_contrast(1.12)_saturate(1.28)_drop-shadow(0_0_14px_rgba(0,245,212,0.55))] [translate:0_0_1px] sm:h-[5.75rem] sm:max-w-[23rem] md:h-[6.75rem] md:max-w-[26rem] lg:h-[5.5rem] lg:max-w-[min(100%,28rem)]"
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
          className="inline-flex size-8 shrink-0 items-center justify-center border border-border text-foreground lg:hidden focus-cyber"
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
