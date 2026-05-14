import Link from "next/link";
import { Share2 } from "lucide-react";
import { BrandLogoHomeLockup } from "@/components/layout/BrandLogoHomeLockup";
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
              className="relative inline-flex items-center overflow-visible rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              aria-label="SeraphCode — Home"
            >
              <BrandLogoHomeLockup />
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
