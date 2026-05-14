import { LockKeyhole, ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionLabel } from "@/components/shared/SectionLabel";

const securityPills = [
  "ISO/IEC 27001:2023",
  "AES-256 Encryption",
  "Australian Hosted",
  "Zero Plain Text",
  "Audit Logging",
  "Privacy-First",
];

export function EnterpriseSecuritySection() {
  return (
    <section className="relative border-b border-border py-20 md:py-24 cyber-grid-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="cyber-chamfer overflow-hidden border border-border bg-[color:var(--surface-card-40)] p-6 shadow-[var(--box-shadow-neon-sm)] md:p-10">
          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <SectionLabel text="ENTERPRISE SECURITY" />
              <SectionHeading
                text="Built into every layer"
                highlight="every layer"
              />
              <p className="max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
                ISO-aligned infrastructure, Australian-hosted data, and
                end-to-end encrypted systems designed for serious business
                workloads.
              </p>

              <div className="mt-8 flex flex-wrap gap-2.5">
                {securityPills.map((pill) => (
                  <span
                    key={pill}
                    className="inline-flex items-center rounded-full border border-border bg-[color:var(--surface-muted-50)] px-3 py-1.5 font-mono text-xs uppercase tracking-[0.16em] text-accent-tertiary"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>

            <div className="cyber-surface-deep cyber-chamfer border border-border p-8">
              <div className="mx-auto flex max-w-xs flex-col items-center text-center">
                <div className="inline-flex h-20 w-20 items-center justify-center rounded-full border border-[color:var(--border-accent-soft)] bg-[color:var(--surface-accent-10)] text-accent shadow-[var(--box-shadow-neon)]">
                  <LockKeyhole className="h-10 w-10" aria-hidden />
                </div>
                <p className="mt-5 font-heading text-xl font-bold uppercase tracking-wide text-foreground">
                  Secure. Compliant. Australian.
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Security controls are embedded by default across product,
                  platform, and operations.
                </p>
                <div className="mt-5 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-accent">
                  <ShieldCheck className="h-4 w-4" aria-hidden />
                  Compliance-first delivery
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}