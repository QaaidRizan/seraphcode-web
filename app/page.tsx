import type { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { WhatWeDoSection } from "@/components/home/WhatWeDoSection";
import { SmartServicesSection } from "@/components/home/SmartServicesSection";
import { SaaSSection } from "@/components/home/SaaSSection";
import { FlagshipProductSection } from "@/components/home/FlagshipProductSection";
import { WhyUsSection } from "@/components/home/WhyUsSection";
import { GetStartedSection } from "@/components/home/GetStartedSection";
import { pageMetadata } from "@/lib/metadata-helpers";

export const metadata: Metadata = pageMetadata({
  title:
    "Custom Software Development Melbourne, Mobile Apps and Enterprise Solutions by SeraphCode",
  description:
    "Leading custom software development company in Melbourne, Australia. Specializing in mobile apps, enterprise solutions, AI development, and cloud services. Australian-owned, compliance-first.",
  keywords:
    "custom software development Melbourne, mobile app development Melbourne, enterprise software Australia, AI development Melbourne, software company Melbourne, web development Melbourne, cloud solutions Australia",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhatWeDoSection />
      <SmartServicesSection />
      <SaaSSection />
      <FlagshipProductSection />
      <WhyUsSection />
      <GetStartedSection />
    </>
  );
}
