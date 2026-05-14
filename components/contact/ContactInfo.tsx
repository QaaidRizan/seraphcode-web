import { Mail, Phone, Clock } from "lucide-react";
import { SITE } from "@/lib/constants";

const cards = [
  {
    icon: Mail,
    label: "Email",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: SITE.phone,
    href: `tel:${SITE.phone.replace(/\s/g, "")}`,
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: SITE.hours,
  },
];

export function ContactInfo() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-2xl font-bold uppercase tracking-wide text-foreground md:text-3xl">
          Get in touch
        </h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Reach out to us through any of these channels. We typically respond
          within a few hours during business days.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {cards.map((c) => (
            <div
              key={c.label}
              className="cyber-chamfer border border-border bg-[color:var(--surface-card-50)] p-5"
            >
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center border border-border text-accent">
                <c.icon className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent-tertiary">
                {c.label}
              </p>
              {c.href ? (
                <a
                  href={c.href}
                  className="mt-2 block text-sm text-foreground hover:text-accent"
                >
                  {c.value}
                </a>
              ) : (
                <p className="mt-2 text-sm text-foreground">{c.value}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
