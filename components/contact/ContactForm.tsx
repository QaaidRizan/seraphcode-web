"use client";

import { useState, type FormEvent } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

const services = [
  "Web Development",
  "Mobile App Development",
  "AI & Automation",
  "UI/UX Design & Branding",
  "Cloud Solutions / SaaS",
  "Other / Not Sure",
];

export function ContactForm() {
  const [status, setStatus] = useState<{ ok: boolean; message: string } | null>(
    null,
  );
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);

    const name = String(fd.get("name") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const company = String(fd.get("company") ?? "").trim();
    const phone = String(fd.get("phone") ?? "").trim();
    const service = String(fd.get("service") ?? "").trim();
    const message = String(fd.get("message") ?? "").trim();

    if (!name || !email || !message) {
      setStatus({
        ok: false,
        message: "Please fill in all required fields.",
      });
      return;
    }

    setIsSubmitting(true);
    setStatus(null);

    try {
      await addDoc(collection(db, "Enquiries"), {
        name,
        email,
        company,
        phone,
        service,
        message,
        createdAt: serverTimestamp(),
        status: "new",
      });

      setStatus({
        ok: true,
        message: "Your message has been received. We'll be in touch soon!",
      });
      form.reset();
    } catch (error) {
      console.error("Error submitting form: ", error);
      setStatus({
        ok: false,
        message: "Something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="cyber-surface-deep border-t border-border py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-2xl font-bold uppercase tracking-wide text-foreground md:text-3xl">
          Send us a message
        </h2>
        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
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

          {status?.message ? (
            <p
              className={
                status.ok ? "text-accent" : "text-destructive"
              }
              role="status"
            >
              {status.message}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={isSubmitting}
            className="cyber-chamfer-sm inline-flex min-h-11 items-center justify-center border-2 border-accent bg-accent px-8 py-2.5 font-mono text-sm font-semibold uppercase tracking-[0.15em] text-[var(--on-accent)] shadow-[var(--box-shadow-neon-sm)] transition hover:brightness-110 disabled:opacity-60 focus-cyber"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
