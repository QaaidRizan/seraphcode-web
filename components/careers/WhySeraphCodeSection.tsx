import { Home, TrendingUp, Clock, Heart, BookOpen, Users } from "lucide-react";
import { FeatureCard } from "@/components/shared/FeatureCard";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionLabel } from "@/components/shared/SectionLabel";

const perks = [
  {
    icon: Home,
    title: "Remote-First",
    description:
      "Work from anywhere. We believe great talent isn't limited by geography.",
  },
  {
    icon: TrendingUp,
    title: "Growth Opportunities",
    description:
      "Clear career paths, skill development budgets, and mentorship from senior leads.",
  },
  {
    icon: Clock,
    title: "Flexible Hours",
    description:
      "We focus on output, not hours. Design your schedule around your life.",
  },
  {
    icon: Heart,
    title: "Health & Wellness",
    description:
      "Health insurance, mental wellness support, and paid time off from day one.",
  },
  {
    icon: BookOpen,
    title: "Learning Budget",
    description:
      "Annual allowance for courses, conferences, certifications, and books.",
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    description:
      "Small, tight-knit teams where your ideas are heard and your impact is real.",
  },
];

export function WhySeraphCodeSection() {
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionLabel text="Why SeraphCode" />
        <SectionHeading text={"More than a job — a career you'll love."} />
        <p className="mb-12 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
          We&apos;re building a company where talented people do their best work,
          grow fast, and actually enjoy it.
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {perks.map((p) => (
            <FeatureCard
              key={p.title}
              icon={p.icon}
              title={p.title}
              description={p.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
