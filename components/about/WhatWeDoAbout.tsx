import Image from "next/image";
import Link from "next/link";
import { Code2, Bot, Building2, Smartphone } from "lucide-react";
import { FeatureCard } from "@/components/shared/FeatureCard";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionLabel } from "@/components/shared/SectionLabel";

export function WhatWeDoAbout() {
  return (
    <section className="cyber-surface-deep border-y border-border py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionLabel text="WHAT WE DO" />
        <SectionHeading text="A full-spectrum technology partner" />
        <p className="mb-12 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
          We cover every aspect of your digital journey, from concept to launch
          and beyond.
        </p>
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div className="grid gap-6 sm:grid-cols-2">
            <FeatureCard
              icon={Code2}
              title="Web & App Development"
              description="Business websites, e-commerce platforms, SaaS applications, and CMS solutions built for performance."
            />
            <FeatureCard
              icon={Bot}
              title="AI & Automation"
              description="AI chatbots, workflow automation, CRM systems, and intelligent lead generation engines."
            />
            <FeatureCard
              icon={Building2}
              title="Enterprise Solutions"
              description="Custom enterprise software, scalable platforms, and comprehensive technology solutions for large-scale operations."
            />
            <FeatureCard
              icon={Smartphone}
              title="Mobile Development"
              description="Native Android & iOS, cross-platform Flutter/React Native apps including booking systems and on-demand services."
            />
          </div>
          <div className="cyber-chamfer overflow-hidden border border-border">
            <Image
              src="/assets/1213.jpg"
              alt=""
              width={900}
              height={700}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="mt-10">
          <Link
            href="/services"
            className="font-mono text-sm uppercase tracking-[0.25em] text-accent"
          >
            View all services →
          </Link>
        </div>
      </div>
    </section>
  );
}
