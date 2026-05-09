import { SectionLabel } from "@/components/shared/SectionLabel";

export function ServicesHero() {
  return (
    <section className="relative border-b border-border py-16 md:py-24 cyber-grid-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionLabel text="Our Services" />
        <h1 className="font-heading max-w-4xl text-4xl font-black uppercase tracking-wide text-foreground md:text-5xl lg:text-6xl">
          Everything your business needs to thrive digitally.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed tracking-wide text-muted-foreground md:text-lg">
          From building your website and mobile app, to automating with AI and
          scaling with enterprise solutions. We handle it all.
        </p>
      </div>
    </section>
  );
}
