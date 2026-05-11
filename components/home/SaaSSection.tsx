import Image from "next/image";
import Link from "next/link";
import {
  Layers,
  Zap,
  LineChart,
  ShieldCheck,
} from "lucide-react";
import { FeatureCard } from "@/components/shared/FeatureCard";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionLabel } from "@/components/shared/SectionLabel";

export function SaaSSection() {
  return (
    <section className="relative py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionLabel text="SaaS Development" />
        <SectionHeading
          text={"Why We're the Best Choice for Your SaaS Product"}
        />
        <p className="mb-12 max-w-3xl text-base leading-relaxed tracking-wide text-muted-foreground md:text-lg">
          We specialize in building scalable, secure, and revenue-optimized
          SaaS products that grow with your business. From MVP to enterprise,
          we&apos;ve got you covered.
        </p>
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div className="grid gap-6 sm:grid-cols-2">
            <FeatureCard
              icon={Layers}
              title="Scalable Architecture"
              description="Built from the ground up to handle growth, from startup to enterprise scale with cloud-native infrastructure."
            />
            <FeatureCard
              icon={Zap}
              title="Rapid Development"
              description="Faster time to market with our proven SaaS development process and reusable component libraries."
            />
            <FeatureCard
              icon={LineChart}
              title="Revenue Optimization"
              description="Built-in subscription management, billing systems, and analytics to maximize your SaaS revenue potential."
            />
            <FeatureCard
              icon={ShieldCheck}
              title="Enterprise Security"
              description="Bank-level security, compliance, and data protection built into every SaaS product we develop."
            />
          </div>
          <div className="cyber-chamfer relative overflow-hidden border border-border shadow-[var(--box-shadow-neon-sm)]">
            <Image
              src="/assets/images/saas.jpg"
              alt=""
              width={900}
              height={700}
              className="h-full w-full object-cover opacity-90"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </div>
        </div>
        <div className="mt-10">
          <Link
            href="/services"
            className="font-mono text-sm uppercase tracking-[0.25em] text-accent hover:text-accent-tertiary"
          >
            Learn more about our SaaS development →
          </Link>
        </div>
      </div>
    </section>
  );
}
