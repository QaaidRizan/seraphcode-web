export type BlogPost = {
  slug: string;
  category: string;
  date: string;
  dateIso: string;
  title: string;
  description: string;
  readTime: string;
  sections: { heading: string; paragraphs: string[] }[];
};

const posts: BlogPost[] = [
  {
    slug: "why-choose-australian-it-company",
    category: "Business",
    date: "February 26, 2026",
    dateIso: "2026-02-26",
    title: "Why Choose an Australian IT Company for Your Software Development Needs",
    description:
      "Discover the benefits of working with an Australian IT company, including data sovereignty, local support, and compliance with Australian regulations.",
    readTime: "5 min",
    sections: [
      {
        heading: "Data Sovereignty and Compliance",
        paragraphs: [
          "Australian IT companies keep data within Australian borders, complying with the Australian Privacy Principles (APPs) and the Privacy Act 1988. SeraphCode maintains all client data on Australian servers so your information stays under Australian law.",
        ],
      },
      {
        heading: "Local Support and Understanding",
        paragraphs: [
          "Working in the same timezone with teams who understand Australian business culture means real-time collaboration, fewer communication barriers, and the option for face-to-face meetings when it matters.",
        ],
      },
      {
        heading: "Quality and Innovation",
        paragraphs: [
          "Australia’s technology sector is known for high engineering standards. You benefit from modern agile practices, robust architecture, and a strong focus on user experience.",
        ],
      },
      {
        heading: "Cost-Effective Solutions",
        paragraphs: [
          "Competitive pricing paired with transparent scopes often delivers better long-term ROI than offshore alternatives, without hidden costs or misaligned expectations.",
        ],
      },
      {
        heading: "Industry Expertise",
        paragraphs: [
          "SeraphCode specialises in enterprise software, AI automation and machine learning, web and mobile applications, and cloud solutions that support digital transformation.",
        ],
      },
      {
        heading: "Why Choose SeraphCode",
        paragraphs: [
          "We are Australian-owned, Melbourne-based, and focused on custom software, AI automation, and enterprise-grade delivery—with compliance built into how we work.",
        ],
      },
    ],
  },
  {
    slug: "custom-software-development-australia",
    category: "Development",
    date: "February 26, 2026",
    dateIso: "2026-02-26",
    title: "Custom Software Development in Australia: A Complete Guide",
    description:
      "Learn how custom software development can transform your business operations and why Australian companies are leading the way in innovative solutions.",
    readTime: "6 min",
    sections: [
      {
        heading: "What custom software unlocks",
        paragraphs: [
          "Tailored systems align workflows to how your team actually operates—reducing manual work, improving visibility, and creating a foundation you can scale.",
        ],
      },
      {
        heading: "From discovery to launch",
        paragraphs: [
          "A strong process combines discovery, architecture, iterative delivery, and measurable outcomes so stakeholders see progress early and risks are managed continuously.",
        ],
      },
      {
        heading: "Australian delivery advantages",
        paragraphs: [
          "Local delivery teams understand regulatory context, data residency expectations, and the operational realities of Australian businesses.",
        ],
      },
    ],
  },
  {
    slug: "melbourne-it-company-guide",
    category: "Business",
    date: "February 26, 2026",
    dateIso: "2026-02-26",
    title: "Top IT Company in Melbourne: What to Look For",
    description:
      "Melbourne is home to some of Australia's leading IT companies. Here's what makes a great IT partner and how to choose the right one for your business.",
    readTime: "4 min",
    sections: [
      {
        heading: "Signals of a strong partner",
        paragraphs: [
          "Look for clear communication, a proven delivery methodology, security-aware engineering, and references that match your industry and complexity.",
        ],
      },
      {
        heading: "Questions to ask before you sign",
        paragraphs: [
          "Clarify ownership of code, hosting and data locations, support models, and how changes are prioritised after launch.",
        ],
      },
    ],
  },
  {
    slug: "ai-automation-australia",
    category: "Technology",
    date: "February 26, 2026",
    dateIso: "2026-02-26",
    title: "AI Automation Solutions for Australian Businesses",
    description:
      "Explore how AI automation is revolutionizing Australian businesses, from streamlining operations to reducing costs and improving efficiency.",
    readTime: "7 min",
    sections: [
      {
        heading: "Where automation pays off first",
        paragraphs: [
          "High-volume, repetitive workflows—customer intake, document handling, reporting, and CRM hygiene—are often the fastest wins when automation is implemented responsibly.",
        ],
      },
      {
        heading: "Governance and trust",
        paragraphs: [
          "Successful AI adoption pairs capability with policies: data minimisation, access control, auditability, and human oversight for high-risk decisions.",
        ],
      },
    ],
  },
  {
    slug: "web-development-australia",
    category: "Development",
    date: "February 26, 2026",
    dateIso: "2026-02-26",
    title: "Web Development Services in Australia: Best Practices",
    description:
      "Discover the latest trends in web development and how Australian web development companies are creating cutting-edge digital experiences.",
    readTime: "5 min",
    sections: [
      {
        heading: "Performance and reliability",
        paragraphs: [
          "Modern web experiences prioritise fast loads, accessible UI, resilient hosting, and observability so issues are caught before customers feel them.",
        ],
      },
      {
        heading: "Product thinking",
        paragraphs: [
          "Great web delivery is not just visuals—it is conversion paths, content governance, integrations, and a roadmap that matches business goals.",
        ],
      },
    ],
  },
  {
    slug: "enterprise-software-australia",
    category: "Enterprise",
    date: "February 26, 2026",
    dateIso: "2026-02-26",
    title: "Enterprise Software Solutions: Why Australian Companies Excel",
    description:
      "Learn why Australian enterprise software companies are trusted by businesses worldwide for scalable, secure, and compliant solutions.",
    readTime: "6 min",
    sections: [
      {
        heading: "Security and compliance at scale",
        paragraphs: [
          "Enterprise software demands strong identity models, encryption, logging, and operational discipline—especially when regulated industries are involved.",
        ],
      },
      {
        heading: "Long-term maintainability",
        paragraphs: [
          "The best enterprise platforms are built for change: modular architecture, automated testing, and documentation that keeps teams productive over years.",
        ],
      },
    ],
  },
];

export function getAllPosts(): BlogPost[] {
  return [...posts].sort(
    (a, b) => new Date(b.dateIso).getTime() - new Date(a.dateIso).getTime(),
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return posts.map((p) => p.slug);
}
