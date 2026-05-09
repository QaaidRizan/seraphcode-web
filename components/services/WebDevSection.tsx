import { ServiceSection } from "./ServiceSection";

const items = [
  {
    title: "Business Websites",
    description:
      "Professional, responsive websites that establish credibility and convert visitors into customers.",
  },
  {
    title: "Custom Web Apps (SaaS)",
    description:
      "Scalable web applications with user authentication, dashboards, APIs, and subscription billing.",
  },
  {
    title: "E-commerce Platforms",
    description:
      "Full-featured online stores with payment integration, inventory management, and order tracking.",
  },
  {
    title: "API & Integrations",
    description:
      "Connect your website to CRMs, payment gateways, analytics tools, and third-party services.",
  },
  {
    title: "Maintenance & Security",
    description:
      "Ongoing updates, performance optimization, security patches, and SSL management.",
  },
  {
    title: "CMS Solutions",
    description:
      "WordPress, headless CMS, or custom CMS solutions for easy content management by your team.",
  },
];

export function WebDevSection() {
  return (
    <ServiceSection
      id="web-dev"
      label="Core Development"
      heading="Web Development"
      subtext="We build fast, scalable, and beautiful websites and web applications that drive business results, from landing pages to full SaaS platforms."
      items={items}
      badge="Great for: Local businesses, startups, enterprises, and e-commerce platforms."
    />
  );
}
