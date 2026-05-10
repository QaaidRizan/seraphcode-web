import { Building2, Radio, Cloud } from "lucide-react";
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
            icon={Building2}
            title="SeraphSuite ERP"
            description="Enterprise planning for the entire business finance, inventory, operations, and reporting in one SeraphSuite stack with roles, approvals, and data you can trust."
          />
          <FeatureCard
            icon={Radio}
            title="IoT & smart tracking"
            description="Sensors, gateways, and live dashboards track assets, fleets, and sites with alerts you can act on."
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
