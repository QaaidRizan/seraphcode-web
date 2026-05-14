import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionLabel } from "@/components/shared/SectionLabel";

const steps = [
  {
    n: "01",
    title: "Discovery Call",
    description:
      "We learn about your business, understand your goals, and identify the best approach for your project.",
  },
  {
    n: "02",
    title: "Strategy & Design",
    description:
      "Our team creates wireframes, architecture, and a detailed project blueprint tailored to your vision.",
  },
  {
    n: "03",
    title: "Build & Deploy",
    description:
      "Agile development with regular demos. We build, test, and launch with minimal disruption.",
  },
  {
    n: "04",
    title: "Support & Scale",
    description:
      "Ongoing maintenance, performance monitoring, and continuous improvements as your business grows.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionLabel text="How It Works" />
        <SectionHeading text="From idea to launch and beyond" />
        <p className="mb-12 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
          Our proven 4-step process delivers results fast, whether it&apos;s a
          website, app, or automation system.
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div
              key={s.n}
              className="cyber-chamfer relative border border-border bg-[color:var(--surface-card-40)] p-6"
            >
              <span className="font-heading text-3xl font-black text-[color:var(--text-accent-soft)]">
                {s.n}
              </span>
              <h3 className="font-heading mt-3 text-sm font-semibold uppercase tracking-wide text-foreground">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
