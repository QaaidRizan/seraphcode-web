import Image from "next/image";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { SectionHeading } from "@/components/shared/SectionHeading";

const items = [
  {
    title: "Security Audits",
    description:
      "Comprehensive security assessments to identify vulnerabilities and recommend improvements.",
  },
  {
    title: "Penetration Testing",
    description:
      "Simulated attacks to test your security defenses and ensure robust protection.",
  },
  {
    title: "Compliance Management",
    description:
      "Help achieve and maintain compliance with industry standards and regulations.",
  },
  {
    title: "Security Training",
    description:
      "Educate your team on security best practices and threat awareness.",
  },
];

export function CybersecuritySection() {
  return (
    <section id="cybersecurity" className="scroll-mt-28 py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <SectionLabel text="Security Services" />
            <SectionHeading text="Cybersecurity" />
            <p className="mb-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Protect your digital assets with our comprehensive security
              solutions. We implement robust security measures to keep your data
              safe.
            </p>
            <ul className="space-y-4">
              {items.map((item) => (
                <li
                  key={item.title}
                  className="cyber-chamfer border border-border bg-[color:var(--surface-card-50)] p-4"
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
              src="/assets/images/cyber.jpg"
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
