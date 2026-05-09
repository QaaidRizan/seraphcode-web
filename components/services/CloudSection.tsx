import Image from "next/image";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { SectionHeading } from "@/components/shared/SectionHeading";

const items = [
  {
    title: "Cloud Migration",
    description:
      "Seamless migration to AWS, Azure, or Google Cloud with minimal downtime and data loss.",
  },
  {
    title: "DevOps & CI/CD",
    description:
      "Automated deployment pipelines, containerization, and infrastructure as code for scalable systems.",
  },
  {
    title: "Serverless Architecture",
    description:
      "Build scalable applications using serverless technologies for cost-effective operations.",
  },
  {
    title: "Cloud Cost Optimization",
    description:
      "Reduce cloud costs through resource optimization, right-sizing, and efficient architecture.",
  },
];

export function CloudSection() {
  return (
    <section
      id="cloud-solutions"
      className="cyber-surface-deep scroll-mt-28 border-y border-border py-20 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div className="cyber-chamfer order-2 overflow-hidden border border-border lg:order-1">
            <Image
              src="/assets/1213.jpg"
              alt=""
              width={900}
              height={700}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <SectionLabel text="Infrastructure" />
            <SectionHeading text="Cloud Solutions" />
            <p className="mb-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Harness the power of cloud computing with our expert solutions.
              We help you migrate, optimize, and manage your cloud infrastructure.
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
        </div>
      </div>
    </section>
  );
}
