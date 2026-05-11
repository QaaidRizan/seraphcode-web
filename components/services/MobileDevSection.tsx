import Image from "next/image";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { SectionHeading } from "@/components/shared/SectionHeading";

const items = [
  {
    title: "Android & iOS Apps",
    description:
      "Native mobile applications optimized for each platform with smooth performance and great UX.",
  },
  {
    title: "Cross-Platform Apps",
    description:
      "Flutter and React Native apps that work on both platforms from a single codebase, making development faster and more cost-effective.",
  },
  {
    title: "Business Apps",
    description:
      "Internal tools, employee management, field reporting, and operational apps for your team.",
  },
  {
    title: "App Maintenance",
    description:
      "Bug fixes, feature updates, app store management, and performance monitoring post-launch.",
  },
];

export function MobileDevSection() {
  return (
    <section
      id="mobile-dev"
      className="cyber-surface-deep scroll-mt-28 border-y border-border py-20 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <SectionLabel text="Core Development" />
            <SectionHeading text="Mobile App Development" />
            <p className="mb-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Native and cross-platform mobile apps built for performance,
              whether it&apos;s a booking system, on-demand service, or business
              tool.
            </p>
            <ul className="space-y-4">
              {items.map((item) => (
                <li
                  key={item.title}
                  className="cyber-chamfer border border-border bg-card/50 p-4"
                >
                  <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-accent">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="cyber-chamfer overflow-hidden border border-border">
            <Image
              src="/assets/images/appdevelopment.jpg"
              alt=""
              width={900}
              height={700}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
