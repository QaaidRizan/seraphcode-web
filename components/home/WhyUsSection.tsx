import Image from "next/image";
import {
  Award,
  Shield,
  Workflow,
  Database,
  Rocket,
  Users,
} from "lucide-react";
import { FeatureCard } from "@/components/shared/FeatureCard";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionLabel } from "@/components/shared/SectionLabel";

export function WhyUsSection() {
  return (
    <section className="relative py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionLabel text="Why SeraphCode" />
        <SectionHeading text="Why Choose Us for Your Next Project" />
        <p className="mb-12 max-w-3xl text-base leading-relaxed tracking-wide text-muted-foreground md:text-lg">
          We combine technical expertise with business understanding to deliver
          solutions that drive real results.
        </p>
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div className="cyber-chamfer relative order-2 overflow-hidden border border-border shadow-[var(--box-shadow-neon-sm)] lg:order-1">
            <Image
              src="/assets/1213.jpg"
              alt=""
              width={900}
              height={700}
              className="h-full w-full object-cover opacity-90"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-background/80 via-transparent to-transparent" />
          </div>
          <div className="order-1 grid gap-6 sm:grid-cols-2 lg:order-2">
            <FeatureCard
              icon={Award}
              title="Proven Track Record"
              description="Successfully delivered projects for businesses of all sizes, from startups to enterprise clients across Australia and beyond."
            />
            <FeatureCard
              icon={Shield}
              title="Compliance-First Approach"
              description="We understand Australian regulations and build solutions that meet local compliance requirements, including data storage and privacy laws."
            />
            <FeatureCard
              icon={Workflow}
              title="End-to-End Solutions"
              description="From initial concept to deployment and ongoing support, we handle every aspect of your project with a single point of contact."
            />
            <FeatureCard
              icon={Database}
              title="Australian Data Storage"
              description="All data is stored securely in Australia, ensuring compliance with Australian Privacy Principles and data sovereignty requirements."
            />
            <FeatureCard
              icon={Rocket}
              title="Rapid Development"
              description="Agile methodology and modern tech stack enable faster time-to-market without compromising on quality or security."
            />
            <FeatureCard
              icon={Users}
              title="Expert Team"
              description="Our distributed team brings together top talent from around the world, ensuring access to the best skills and expertise."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
