"use client";

import { useActionState } from "react";
import { submitContact } from "@/app/contact/actions";

const services = [
  "Web Development",
  "Mobile App Development",
  "AI & Automation",
  "UI/UX Design & Branding",
  "Cloud Solutions / SaaS",
  "Other / Not Sure",
];

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContact, {
    ok: false,
    message: "",
  });

  return (
    <section className="cyber-surface-deep border-t border-border py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-2xl font-bold uppercase tracking-wide text-foreground md:text-3xl">
          Send us a message
        </h2>
        <form action={formAction} className="mt-8 space-y-5">
          <div>
            <label
              htmlFor="name"
              className="font-mono text-xs uppercase tracking-widest text-accent"
            >
              &gt; Full Name *
            </label>
            <input
              id="name"
              name="name"
              required
              autoComplete="name"
              className="cyber-chamfer-sm mt-2 w-full border border-border bg-input px-4 py-3 pl-8 font-mono text-sm text-accent placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:shadow-[var(--box-shadow-neon-sm)]"
              placeholder="Jane Citizen"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="font-mono text-xs uppercase tracking-widest text-accent"
            >
              &gt; Email Address *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className="cyber-chamfer-sm mt-2 w-full border border-border bg-input px-4 py-3 pl-8 font-mono text-sm text-accent placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:shadow-[var(--box-shadow-neon-sm)]"
              placeholder="you@company.com"
            />
          </div>
          <div>
            <label
              htmlFor="company"
              className="font-mono text-xs uppercase tracking-widest text-accent"
            >
              &gt; Company
            </label>
            <input
              id="company"
              name="company"
              autoComplete="organization"
              className="cyber-chamfer-sm mt-2 w-full border border-border bg-input px-4 py-3 pl-8 font-mono text-sm text-accent placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:shadow-[var(--box-shadow-neon-sm)]"
              placeholder="Optional"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="font-mono text-xs uppercase tracking-widest text-accent"
            >
              &gt; Phone Number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              className="cyber-chamfer-sm mt-2 w-full border border-border bg-input px-4 py-3 pl-8 font-mono text-sm text-accent placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:shadow-[var(--box-shadow-neon-sm)]"
              placeholder="Optional"
            />
          </div>
          <div>
            <label
              htmlFor="service"
              className="font-mono text-xs uppercase tracking-widest text-accent"
            >
              &gt; Service Interested In
            </label>
            <select
              id="service"
              name="service"
              className="cyber-chamfer-sm mt-2 w-full border border-border bg-input px-4 py-3 pl-8 font-mono text-sm text-accent focus:border-accent focus:outline-none focus:shadow-[var(--box-shadow-neon-sm)]"
              defaultValue=""
            >
              <option value="" disabled>
                Select…
              </option>
              {services.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label
              htmlFor="message"
              className="font-mono text-xs uppercase tracking-widest text-accent"
            >
              &gt; Message *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="cyber-chamfer-sm mt-2 w-full border border-border bg-input px-4 py-3 pl-8 font-mono text-sm text-accent placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:shadow-[var(--box-shadow-neon-sm)]"
              placeholder="Tell us about your project…"
            />
          </div>

          {state?.message ? (
            <p
              className={
                state.ok ? "text-accent" : "text-destructive"
              }
              role="status"
            >
              {state.message}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={pending}
            className="cyber-chamfer-sm inline-flex min-h-11 items-center justify-center border-2 border-accent bg-accent px-8 py-2.5 font-mono text-sm font-semibold uppercase tracking-[0.15em] text-[var(--on-accent)] shadow-[var(--box-shadow-neon-sm)] transition hover:brightness-110 disabled:opacity-60 focus-cyber"
          >
            {pending ? "Sending…" : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
