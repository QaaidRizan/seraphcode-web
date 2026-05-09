import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { OurStorySection } from "@/components/about/OurStorySection";
import { WhatWeDoAbout } from "@/components/about/WhatWeDoAbout";
import { OurValuesSection } from "@/components/about/OurValuesSection";
import { pageMetadata } from "@/lib/metadata-helpers";

export const metadata: Metadata = pageMetadata({
  title: "About SeraphCode, Custom Software Development Company in Melbourne",
  description:
    "Learn about SeraphCode, a leading custom software development company in Melbourne, Australia. Founded in 2022, we transform businesses through innovative technology solutions.",
  keywords:
    "about SeraphCode, software development company Melbourne, technology company Australia, software development team Melbourne",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OurStorySection />
      <WhatWeDoAbout />
      <OurValuesSection />
    </>
  );
}
