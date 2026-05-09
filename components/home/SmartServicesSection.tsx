import { Palette, PenTool, Cloud } from "lucide-react";
import { FeatureCard } from "@/components/shared/FeatureCard";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionLabel } from "@/components/shared/SectionLabel";

export function SmartServicesSection() {
  return (
    <section className="cyber-surface-deep relative border-y border-border py-24 md:py-28 cyber-grid-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionLabel text="STANDING OUT" />
        <SectionHeading text="Smart Services to Give You the Edge" />
        <p className="mb-12 max-w-3xl text-base leading-relaxed tracking-wide text-muted-foreground md:text-lg">
          Beyond development and marketing, specialized services that set your
          business apart from the competition.
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            icon={Palette}
            title="UI/UX Design"
            description="Beautiful, intuitive interfaces that convert visitors into customers."
          />
          <FeatureCard
            icon={PenTool}
            title="Branding & Logo"
            description="Complete brand identity that makes your business unforgettable."
          />
          <FeatureCard
            icon={Cloud}
            title="Cloud Deployment"
            description="AWS, Firebase, Vercel, we deploy and manage your infrastructure."
          />
        </div>
      </div>
    </section>
  );
}
