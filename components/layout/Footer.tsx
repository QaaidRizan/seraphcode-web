import Link from "next/link";
import { Share2 } from "lucide-react";
import { SiteLogo } from "@/components/layout/SiteLogo";
import { FOOTER_TAGLINE, SITE } from "@/lib/constants";

const columns = [
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/services", label: "Services" },
      { href: "/careers", label: "Careers" },
    ],
  },
  {
    title: "Support",
    links: [
      { href: "/contact", label: "Contact" },
      { href: "/compliance", label: "Compliance" },
    ],
  },
  {
    title: "Blog",
    links: [{ href: "/blog", label: "All Posts" }],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy-policy", label: "Privacy Policy" },
      { href: "/data-storage", label: "Data Storage" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="cyber-surface-deep border-t border-border">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_repeat(4,1fr)]">
          <div>
            <Link
              href="/"
              className="relative inline-block overflow-visible rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              {/* Match header: layout box stays compact; visual size from scale */}
              <span className="relative inline-flex h-10 items-center overflow-visible sm:h-11">
                <span
                  className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[5.5rem] w-48 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(0,245,212,0.32)_0%,rgba(0,245,212,0.08)_45%,transparent_72%)] blur-lg"
                  aria-hidden
                />
                <SiteLogo className="navbar-logo relative z-[1] h-10 w-auto max-w-[11rem] origin-left scale-[1.68] object-contain object-left sm:h-11 sm:max-w-[12rem] sm:scale-[1.86] [filter:brightness(0)_invert(1)_brightness(1.15)_contrast(1.1)_saturate(1.25)_drop-shadow(0_0_16px_rgba(0,245,212,0.45))] md:scale-[2.05]"
                />
              </span>
            </Link>
            <p className="mt-4 max-w-md text-sm leading-relaxed tracking-wide text-muted-foreground">
              {FOOTER_TAGLINE}
            </p>
            <a
              href={SITE.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent hover:text-accent-tertiary"
            >
              <Share2 className="h-4 w-4" strokeWidth={1.5} aria-hidden />
              Facebook
            </a>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-foreground">
                {col.title}
              </p>
              <ul className="mt-4 space-y-2">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-accent"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-border pt-8 text-sm text-muted-foreground">
          <p>{SITE.address}</p>
          <p className="mt-1">
            <a
              href={`mailto:${SITE.email}`}
              className="text-accent hover:underline"
            >
              {SITE.email}
            </a>
            {" · "}
            <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="hover:text-accent">
              {SITE.phone}
            </a>
          </p>
          <p className="mt-6 font-mono text-xs text-[color:var(--text-muted-soft)]">
            ACN - {SITE.acn} | ABN - {SITE.abn}
          </p>
          <p className="mt-1 font-mono text-xs text-[color:var(--text-muted-soft)]">
            © {new Date().getFullYear()} SeraphCode. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
