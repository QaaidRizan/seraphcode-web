import type { Metadata } from "next";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { ContactForm } from "@/components/contact/ContactForm";
import { pageMetadata } from "@/lib/metadata-helpers";

export const metadata: Metadata = pageMetadata({
  title: "Contact SeraphCode, Software Development Company in Melbourne",
  description:
    "Contact SeraphCode for custom software development services in Melbourne, Australia. Phone: +61 2 4012 4371. Email: support@seraphcode.com.au. Business Hours: Mon-Fri 9AM-6PM AEST",
  keywords:
    "contact SeraphCode, software development Melbourne contact, software company Australia, Melbourne software developers",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactInfo />
      <ContactForm />
    </>
  );
}
