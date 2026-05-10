import { SectionLabel } from "@/components/shared/SectionLabel";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Badge } from "@/components/shared/Badge";

export function ServiceSection({
  id,
  label,
  heading,
  subtext,
  items,
  badge,
  sectionClassName = "",
}: {
  id: string;
  label: string;
  heading: string;
  subtext: string;
  items: { title: string; description: string }[];
  badge?: string;
  /** e.g. cyber-surface-deep border-y border-border */
  sectionClassName?: string;
}) {
  return (
    <section
      id={id}
      className={["scroll-mt-28 py-20 md:py-24", sectionClassName]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionLabel text={label} />
        <SectionHeading text={heading} />
        <p className="mb-10 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
          {subtext}
        </p>
        {badge ? (
          <div className="mb-8">
            <Badge text={badge} />
          </div>
        ) : null}
        <ul className="grid gap-4 md:grid-cols-2">
          {items.map((item) => (
            <li
              key={item.title}
              className="cyber-chamfer border border-border bg-card/50 p-5"
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
    </section>
  );
}
