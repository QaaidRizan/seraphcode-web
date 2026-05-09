import type { Metadata } from "next";
import { ComplianceHero } from "@/components/compliance/ComplianceHero";
import { CompanyInfoSection } from "@/components/compliance/CompanyInfoSection";
import { SecurityFrameworkSection } from "@/components/compliance/SecurityFrameworkSection";
import { DataStorageSection } from "@/components/compliance/DataStorageSection";
import { pageMetadata } from "@/lib/metadata-helpers";

export const metadata: Metadata = pageMetadata({
  title: "Security, Compliance & Trust | SeraphCode",
  description:
    "Learn about SeraphCode's security practices, compliance framework, and data storage policies. Australian-owned company with ISO 27001-aligned security practices.",
  keywords:
    "security compliance, data storage Australia, Australian privacy act, ISO 27001, data sovereignty, Australian data centers",
  path: "/compliance",
});

export default function CompliancePage() {
  return (
    <>
      <ComplianceHero />
      <CompanyInfoSection />
      <SecurityFrameworkSection />
      <DataStorageSection />
    </>
  );
}
