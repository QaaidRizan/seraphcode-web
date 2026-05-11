import { Globe, Smartphone, Bot } from "lucide-react";
import Link from "next/link";
import { FeatureCard } from "@/components/shared/FeatureCard";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionLabel } from "@/components/shared/SectionLabel";

export function WhatWeDoSection() {
  return (
    <section className="relative z-0 pt-8 py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionLabel text="WHAT WE DO" />
        <SectionHeading text="Full Spectrum Technology Solutions" />
        <div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={Globe}
              title="Web Development"
              description="Business websites, e-commerce platforms, SaaS applications, and CMS solutions built for performance."
              href="/services"
            />
            <FeatureCard
              icon={Smartphone}
              title="Mobile App Development"
              description="Native Android and iOS, cross-platform Flutter and React Native apps, booking systems to on demand services."
              href="/services"
            />
            <FeatureCard
              icon={Bot}
              title="AI & Automation"
              description="AI chatbots, workflow automation, CRM systems, intelligent lead generation, and compliance process automation."
              href="/services"
            />
          </div>
        </div>
        <div className="mt-10">
          <Link
            href="/services"
            className="font-mono text-sm uppercase tracking-[0.25em] text-accent hover:text-accent-tertiary"
          >
            View all services →
          </Link>
        </div>
      </div>
    </section>
  );
}
