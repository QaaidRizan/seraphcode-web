import { Badge } from "@/components/shared/Badge";

export function ComplianceHero() {
  return (
    <section className="relative border-b border-border py-16 md:py-24 cyber-grid-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Badge text="Australian Company" emoji="🇦🇺" />
        <h1 className="font-heading mt-6 max-w-4xl text-4xl font-black uppercase tracking-wide text-foreground md:text-5xl lg:text-6xl">
          Security, Compliance &amp; Trust
        </h1>
        <p className="mt-4 font-heading text-lg uppercase tracking-[0.2em] text-accent-tertiary md:text-xl">
          Built for Australian Businesses
        </p>
        <div className="mt-8 max-w-3xl space-y-4 text-base leading-relaxed text-muted-foreground">
          <p>We build compliance into the workflow, not as an afterthought.</p>
          <p>
            Seraph Code PTY LTD is an Australian-owned software company. Our
            platforms are designed for Australian industries with security,
            privacy, and compliance as first-class priorities.
          </p>
        </div>
      </div>
    </section>
  );
}
