import { Target, Heart, Eye, Globe2 } from "lucide-react";
import { FeatureCard } from "@/components/shared/FeatureCard";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionLabel } from "@/components/shared/SectionLabel";

export function OurValuesSection() {
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionLabel text="OUR VALUES" />
        <SectionHeading text="What drives us every day" />
        <p className="mb-12 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
          These aren&apos;t just words on a wall. They guide every decision we
          make.
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <FeatureCard
            icon={Target}
            title="Our Mission"
            description="To empower businesses with innovative technology solutions that drive growth and success."
          />
          <FeatureCard
            icon={Heart}
            title="Our Values"
            description="Integrity, innovation, and excellence guide everything we do."
          />
          <FeatureCard
            icon={Eye}
            title="Our Vision"
            description="To be the leading technology partner for businesses worldwide."
          />
          <FeatureCard
            icon={Globe2}
            title="Global Reach"
            description="Based in Melbourne, Australia, serving clients worldwide with a distributed team model."
          />
        </div>
      </div>
    </section>
  );
}
