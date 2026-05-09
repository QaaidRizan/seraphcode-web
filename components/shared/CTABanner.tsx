import { Button } from "./Button";

export function CTABanner() {
  return (
    <section className="cyber-surface-raised relative border-y border-border py-16 cyber-grid-bg">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_18%_45%,rgba(165,108,255,0.1),transparent_52%),radial-gradient(ellipse_at_82%_32%,rgba(0,245,212,0.09),transparent_46%),radial-gradient(ellipse_at_50%_100%,rgba(111,231,255,0.06),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="cyber-chamfer holographic-panel flex flex-col gap-6 p-8 md:flex-row md:items-center md:justify-between md:p-10">
          <span
            className="holographic-panel__corner holographic-panel__corner--tl max-md:hidden"
            aria-hidden
          />
          <span
            className="holographic-panel__corner holographic-panel__corner--tr max-md:hidden"
            aria-hidden
          />
          <span
            className="holographic-panel__corner holographic-panel__corner--br max-md:hidden"
            aria-hidden
          />
          <span
            className="holographic-panel__corner holographic-panel__corner--bl max-md:hidden"
            aria-hidden
          />
          <div className="relative z-10 max-w-2xl">
            <p className="font-label mb-2 text-xs uppercase tracking-[0.3em] text-accent-tertiary">
              Next step
            </p>
            <h2 className="font-heading text-2xl font-bold uppercase tracking-wide text-foreground md:text-3xl">
              Ready to accelerate your growth?
            </h2>
            <p className="mt-3 text-sm leading-relaxed tracking-wide text-muted-foreground md:text-base">
              Let&apos;s talk about how SeraphCode can build, automate, and scale
              your business.
            </p>
          </div>
          <Button variant="glitch" href="/contact" className="relative z-10 shrink-0">
            Book a Free Call
          </Button>
        </div>
      </div>
    </section>
  );
}
