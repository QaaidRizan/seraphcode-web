import Image from "next/image";
import { Button } from "@/components/shared/Button";
import { SectionLabel } from "@/components/shared/SectionLabel";

export function CareersHero() {
  return (
    <section className="relative border-b border-border py-16 md:py-24 cyber-grid-bg">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <SectionLabel text={"We're Hiring"} />
          <h1 className="font-heading text-4xl font-black uppercase tracking-wide text-foreground md:text-5xl lg:text-6xl">
            Build the future with us.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Join a team of passionate developers, designers, and marketers
            building real products for real businesses across the globe.
          </p>
          <div className="mt-8">
            <Button variant="glitch" href="#openings">
              View Open Positions
            </Button>
          </div>
        </div>
        <div className="cyber-chamfer overflow-hidden border border-border">
          <Image
            src="/assets/images/carear.jpg"
            alt=""
            width={900}
            height={560}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
