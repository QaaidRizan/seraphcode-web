import { Button } from "@/components/shared/Button";
import { Badge } from "@/components/shared/Badge";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { SITE } from "@/lib/constants";

type Job = {
  title: string;
  department: string;
  type: string;
  location: string;
  description: string;
  requirements: string[];
};

const jobs: Job[] = [
  {
    title: "Software Engineer",
    department: "Engineering",
    type: "Full-time",
    location: "Melbourne, Australia / Remote",
    description:
      "We're looking for a talented Software Engineer to join our development team. You'll work on cutting-edge web and mobile applications, collaborating with cross-functional teams to deliver high-quality software solutions that drive business success.",
    requirements: [
      "Proficient in Java for backend development and enterprise applications",
      "Experience with React & Next.js for modern frontend development",
      "Understanding of software engineering principles: clean code, design patterns, testing, and agile methodologies",
      "Strong communication and collaboration skills",
    ],
  },
  {
    title: "UI/UX Designer",
    department: "Design",
    type: "Full-time / Contract",
    location: "Melbourne, Australia / Remote",
    description:
      "We're seeking a creative UI/UX Designer to shape user experiences and interfaces for our digital products. You'll work closely with developers and stakeholders to create intuitive, visually appealing, and user-centered designs that solve real problems.",
    requirements: [
      "Proficiency in Figma (or similar design tools)",
      "Strong portfolio showcasing web and mobile design work",
      "Understanding of design systems and component-based design",
      "Ability to conduct user research and usability testing",
    ],
  },
  {
    title: "Cold Calling Specialist",
    department: "Sales",
    type: "Commission-Based",
    location: "Remote",
    description:
      "We're looking for a confident and results-driven Cold Calling Specialist to join our sales team. This is a commission-based role with unlimited earning potential, targeting direct Australian clients during Australian business hours.",
    requirements: [
      "Fluent English (near-native level)",
      "Strong communication and persuasion skills",
      "Confident in handling outbound sales calls",
      "Previous cold-calling or sales experience is an advantage",
      "Ability to work independently and achieve targets",
    ],
  },
];

function applyHref(jobTitle: string) {
  const subject = encodeURIComponent(`Application: ${jobTitle}`);
  return `mailto:${SITE.email}?subject=${subject}`;
}

export function JobListSection() {
  return (
    <section
      id="openings"
      className="cyber-surface-deep scroll-mt-28 border-y border-border py-20 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionLabel text="Open Positions" />
        <SectionHeading text="Find your role." />
        <p className="mb-12 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
          We&apos;re looking for driven individuals who want to make a real
          impact. Don&apos;t see your role? Reach out anyway — we&apos;re always
          looking for great people.
        </p>
        <div className="space-y-6">
          {jobs.map((job) => (
            <article
              key={job.title}
              className="cyber-chamfer border border-border bg-card/50 p-6 md:p-8"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="font-heading text-xl font-bold uppercase tracking-wide text-foreground">
                    {job.title}
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <Badge text={job.department} />
                    <Badge text={job.type} />
                  </div>
                  <p className="mt-2 font-mono text-xs text-muted-foreground">
                    {job.location}
                  </p>
                </div>
                <Button variant="primary" href={applyHref(job.title)} external>
                  Apply Now
                </Button>
              </div>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                {job.description}
              </p>
              <p className="mt-4 font-mono text-[10px] uppercase tracking-widest text-accent">
                Requirements
              </p>
              <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
                {job.requirements.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
