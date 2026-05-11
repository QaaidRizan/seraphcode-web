import { ServiceSection } from "./ServiceSection";

const items = [
  {
    title: "AI Chatbots",
    description:
      "Intelligent conversational bots that handle customer queries 24/7 with natural language processing.",
  },
  {
    title: "Email Automation",
    description:
      "Automated email handling for business processes and communications.",
  },
  {
    title: "Compliance & Ordering Automation",
    description:
      "Streamlined compliance workflows and automated order processing to reduce manual effort and errors.",
  },
  {
    title: "AI Vehicle Inspection (Computer Vision)",
    description:
      "AI-powered computer vision solutions for vehicle inspection and analysis.",
  },
  {
    title: "Workflow Automation",
    description:
      "Automated lead scoring, pipeline management, follow ups, and sales reporting in your CRM.",
  },
  {
    title: "AI Lead Generation",
    description:
      "Smart lead capture, qualification, and routing systems that fill your pipeline on autopilot.",
  },
  {
    title: "Process Automation",
    description:
      "End to end workflow automation including invoicing, reporting, data entry, and internal operations.",
  },
];

export function AIAutomationSection() {
  return (
    <ServiceSection
      id="ai-automation"
      label="Premium Services"
      heading="AI & Automation"
      subtext="High-value AI solutions that automate repetitive work, enhance customer experience, and generate leads. Your premium growth engine."
      items={items}
      badge="This is our premium service category with higher value solutions for business automation."
    />
  );
}
