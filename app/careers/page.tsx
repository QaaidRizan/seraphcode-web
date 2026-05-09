import type { Metadata } from "next";
import { CareersHero } from "@/components/careers/CareersHero";
import { WhySeraphCodeSection } from "@/components/careers/WhySeraphCodeSection";
import { JobListSection } from "@/components/careers/JobCard";
import { TalentPoolSection } from "@/components/careers/TalentPoolSection";
import { pageMetadata } from "@/lib/metadata-helpers";

export const metadata: Metadata = pageMetadata({
  title: "Careers at SeraphCode, Software Development Jobs in Melbourne",
  description:
    "Join SeraphCode and build the future of technology. We're hiring talented software developers, designers, and technology professionals in Melbourne, Australia.",
  keywords:
    "software development jobs Melbourne, tech jobs Australia, software engineer jobs Melbourne, developer careers Melbourne, IT jobs Melbourne",
  path: "/careers",
});

export default function CareersPage() {
  return (
    <>
      <CareersHero />
      <WhySeraphCodeSection />
      <JobListSection />
      <TalentPoolSection />
    </>
  );
}
