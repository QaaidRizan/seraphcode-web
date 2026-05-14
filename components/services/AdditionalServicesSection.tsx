import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionLabel } from "@/components/shared/SectionLabel";

const cards = [
  {
    title: "SeraphSuite ERP",
    description:
      "Enterprise resource planning for the entire enterprise—finance, inventory, operations, and reporting in one SeraphSuite stack with roles, approvals, and data you can trust.",
  },
  {
    title: "IoT & smart tracking",
    description:
      "Connected devices, gateways, and live dashboards for asset and fleet visibility—telemetry, geolocation, and alerts tailored to your operations.",
  },
  {
    title: "Cloud Deployment",
    description:
      "Expert deployment on AWS, Firebase, Vercel, and DigitalOcean with CI/CD pipelines.",
  },
  {
    title: "SaaS Product Development",
    description:
      "End-to-end SaaS development from MVP to full-scale product with subscription billing.",
  },
  {
    title: "CRM & ERP Systems",
    description:
      "Custom business management systems that streamline operations and centralize data.",
  },
  {
    title: "Cybersecurity Consulting",
    description:
      "Security audits, penetration testing, SSL setup, and compliance consulting.",
  },
  {
    title: "API Development & Integration",
    description:
      "Custom REST/GraphQL APIs and third-party integrations that connect your entire tech stack.",
  },
];

export function AdditionalServicesSection() {
  return (
    <section className="cyber-surface-raised border-t border-border py-20 md:py-24 cyber-grid-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionLabel text="Additional Services" />
        <SectionHeading text="Smart services to give you the edge" />
        <p className="mb-12 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
          Specialized offerings that complement our core services and help you
          stand out.
        </p>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => (
            <div
              key={c.title}
              className="cyber-chamfer border border-border bg-[color:var(--surface-card-60)] p-5 transition-all hover:border-accent hover:shadow-[var(--box-shadow-neon-sm)]"
            >
              <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-foreground">
                {c.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {c.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
