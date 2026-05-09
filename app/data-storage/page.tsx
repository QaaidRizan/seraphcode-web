import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { DataStorageCards } from "@/components/shared/DataStorageCards";
import { pageMetadata } from "@/lib/metadata-helpers";

export const metadata: Metadata = pageMetadata({
  title: "Data Storage & Privacy | SeraphCode",
  description:
    "How SeraphCode stores data in Australia: sovereignty, encryption, backups, compliance, and no international transfers without consent.",
  path: "/data-storage",
});

const frameworkRows = [
  {
    title: "Australian Privacy Act 1988",
    body: "All data handling complies with the Privacy Act 1988 and the Australian Privacy Principles.",
  },
  {
    title: "Data Sovereignty",
    body: "Data in Australia remains under Australian legal jurisdiction and is not subject to foreign law by default.",
  },
  {
    title: "No International Transfers",
    body: "We do not automatically transfer or replicate data outside Australia; explicit consent is required where applicable.",
  },
  {
    title: "Industry Compliance",
    body: "Our approach supports WHS record-keeping, Fair Work requirements, and audit-ready documentation where relevant.",
  },
];

export default function DataStoragePage() {
  return (
    <LegalPageLayout
      badge="🇦🇺 Australian Data Storage"
      title="Data Storage & Privacy"
      subtext="Your data is stored securely in Australia, protected by Australian law"
    >
      <section>
        <p>
          At Seraph Code PTY LTD, we are committed to keeping your data within
          Australian borders. All customer data, personal information, and
          business records are stored exclusively in Australian data centers
          using Australian-based cloud infrastructure.
        </p>
        <p className="mt-4">
          <strong className="text-foreground">Why this matters:</strong> Your
          information is subject to the Australian Privacy Principles and the
          Privacy Act 1988, with Australian legal jurisdiction and protection
          from foreign government access by default.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Storage principles
        </h2>
        <div className="mt-6">
          <DataStorageCards count={6} />
        </div>
      </section>

      <section>
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Legal &amp; compliance framework
        </h2>
        <div className="mt-6 space-y-4">
          {frameworkRows.map((row) => (
            <div
              key={row.title}
              className="cyber-chamfer border border-border bg-card/40 p-5"
            >
              <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-accent">
                {row.title}
              </h3>
              <p className="mt-2 text-muted-foreground">{row.body}</p>
            </div>
          ))}
        </div>
      </section>
    </LegalPageLayout>
  );
}
