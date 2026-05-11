import Image from "next/image";
import { Button } from "@/components/shared/Button";
import { SectionLabel } from "@/components/shared/SectionLabel";

export function AboutHero() {
  return (
    <section className="relative border-b border-border py-16 md:py-24 cyber-grid-bg">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <SectionLabel text="ABOUT SERAPHCODE" />
          <h1 className="font-heading cyber-glitch max-w-3xl text-4xl font-black uppercase tracking-wide text-foreground md:text-5xl lg:text-6xl">
            We transform ideas into powerful software solutions.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed tracking-wide text-muted-foreground md:text-lg">
            Founded in 2022, we&apos;re a full-service technology company that
            builds, automates, and scales businesses through development, AI,
            and enterprise solutions.
          </p>
          <div className="mt-8">
            <Button variant="glitch" href="/contact">
              Work With Us
            </Button>
          </div>
        </div>
        <div className="cyber-chamfer overflow-hidden border border-border shadow-[var(--box-shadow-neon-sm)]">
          <Image
            src="/assets/images/aboutseraphcode.jpg"
            alt=""
            width={900}
            height={640}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
