import type { Metadata } from "next";
import { ServicesHero } from "@/components/services/ServicesHero";
import { ServiceAnchorNav } from "@/components/services/ServiceAnchorNav";
import { WebDevSection } from "@/components/services/WebDevSection";
import { MobileDevSection } from "@/components/services/MobileDevSection";
import { AIAutomationSection } from "@/components/services/AIAutomationSection";
import { CloudSection } from "@/components/services/CloudSection";
import { CybersecuritySection } from "@/components/services/CybersecuritySection";
import { SeraphSuiteSection } from "@/components/services/SeraphSuiteSection";
import { AdditionalServicesSection } from "@/components/services/AdditionalServicesSection";
import { HowItWorksSection } from "@/components/services/HowItWorksSection";
import { pageMetadata } from "@/lib/metadata-helpers";

export const metadata: Metadata = pageMetadata({
  title: "Software Development Services in Melbourne by SeraphCode",
  description:
    "Comprehensive software development services in Melbourne, Australia. Custom software, cloud solutions, mobile apps, cybersecurity, data solutions, and digital transformation.",
  keywords:
    "software development services Melbourne, custom software development, cloud solutions Australia, mobile app development, cybersecurity services, data solutions Melbourne, SeraphSuite ERP, enterprise resource planning Australia",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServiceAnchorNav />
      <WebDevSection />
      <MobileDevSection />
      <AIAutomationSection />
      <CloudSection />
      <CybersecuritySection />
      <SeraphSuiteSection />
      <AdditionalServicesSection />
      <HowItWorksSection />
    </>
  );
}
