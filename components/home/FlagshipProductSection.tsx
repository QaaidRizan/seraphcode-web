import { BadgeCheck, Users, MapPin, Server } from "lucide-react";
import { Button } from "@/components/shared/Button";
import { FeatureCard } from "@/components/shared/FeatureCard";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { SITE } from "@/lib/constants";

export function FlagshipProductSection() {
  return (
    <section className="cyber-surface-raised relative border-y border-border py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionLabel text="Our Flagship Product" />
        <SectionHeading
          text="PostieMate — Logistics & Contractor Management Platform"
        />
        <p className="mb-12 max-w-3xl text-base leading-relaxed tracking-wide text-muted-foreground md:text-lg">
          A comprehensive logistics and contractor management solution built
          for Australian delivery operations. Developed in close collaboration
          with Australia Post contractors, PostieMate streamlines contractor management,
          route optimization, and compliance tracking while ensuring all data
          is stored securely in Australia.
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <FeatureCard
            icon={BadgeCheck}
            title="Compliance-First Design"
            description="Built with Australian compliance requirements, including WHS record-keeping and audit-ready activity logs."
          />
          <FeatureCard
            icon={Users}
            title="Contractor Management"
            description="Comprehensive system for managing contractors, routes, and deliveries with role-based access controls."
          />
          <FeatureCard
            icon={MapPin}
            title="Real-Time Tracking"
            description="Live tracking and reporting capabilities for better operational visibility and decision-making."
          />
          <FeatureCard
            icon={Server}
            title="Secure & Scalable"
            description="Enterprise-grade security with Australian data storage and scalable architecture for growth."
          />
        </div>
        <div className="mt-10">
          <Button variant="primary" href={SITE.postiemate} external>
            Visit PostieMate
          </Button>
        </div>
      </div>
    </section>
  );
}
