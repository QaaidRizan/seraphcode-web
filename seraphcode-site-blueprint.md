# SeraphCode — Next.js Rebuild Blueprint

> Full content extraction, component structure, and route map for rebuilding seraphcode.com.au with Next.js (App Router). All content sourced directly from the live site.

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Next.js Project Structure](#2-nextjs-project-structure)
3. [Route Map](#3-route-map)
4. [Shared Components](#4-shared-components)
   - 4.1 [Navbar](#41-navbar)
   - 4.2 [Footer](#42-footer)
   - 4.3 [CTABanner](#43-ctabanner)
5. [Page: Home `/`](#5-page-home-)
6. [Page: About `/about`](#6-page-about-about)
7. [Page: Services `/services`](#7-page-services-services)
8. [Page: Contact `/contact`](#8-page-contact-contact)
9. [Page: Careers `/careers`](#9-page-careers-careers)
10. [Page: Blog `/blog`](#10-page-blog-blog)
11. [Page: Blog Post `/blog/[slug]`](#11-page-blog-post-blogslug)
12. [Page: Compliance `/compliance`](#12-page-compliance-compliance)
13. [Page: Privacy Policy `/privacy-policy`](#13-page-privacy-policy-privacy-policy)
14. [Page: Data Storage `/data-storage`](#14-page-data-storage-data-storage)
15. [Global SEO & Metadata](#15-global-seo--metadata)
16. [Reusable UI Primitives](#16-reusable-ui-primitives)
17. [Suggested Improvements Over Original](#17-suggested-improvements-over-original)

---

## 1. Project Overview

| Field | Value |
|---|---|
| Company | Seraph Code Pty Ltd |
| ACN | 675 006 425 |
| ABN | 11 675 006 425 |
| Founded | 2022 |
| Location | Melbourne VIC 3000, Australia |
| Email | support@seraphcode.com.au |
| Phone | +61 2 4012 4371 |
| Business Hours | Mon–Fri 9AM–6PM AEST, Sat 9AM–1PM |
| Facebook | https://web.facebook.com/profile.php?id=61557904406889 |
| Flagship Product | PostieMate (https://postiemate.com.au) |
| Brand Color | #1e40af (blue) |
| Logo | /svgs/sc_logo.svg |

---

## 2. Next.js Project Structure

```
seraphcode/
├── app/
│   ├── layout.tsx                  ← Root layout (Navbar + Footer)
│   ├── page.tsx                    ← Home /
│   ├── about/
│   │   └── page.tsx                ← /about
│   ├── services/
│   │   └── page.tsx                ← /services
│   ├── contact/
│   │   └── page.tsx                ← /contact
│   ├── careers/
│   │   └── page.tsx                ← /careers
│   ├── blog/
│   │   ├── page.tsx                ← /blog (listing)
│   │   └── [slug]/
│   │       └── page.tsx            ← /blog/[slug] (post)
│   ├── compliance/
│   │   └── page.tsx                ← /compliance
│   ├── privacy-policy/
│   │   └── page.tsx                ← /privacy-policy
│   ├── data-storage/
│   │   └── page.tsx                ← /data-storage
│   └── login/
│       └── page.tsx                ← /login (Staff Login, placeholder)
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── shared/
│   │   ├── CTABanner.tsx           ← "Ready to accelerate your growth?" strip
│   │   ├── SectionLabel.tsx        ← Small uppercase label above headings
│   │   ├── SectionHeading.tsx      ← H2 with optional highlight
│   │   ├── FeatureCard.tsx         ← Icon + title + description card
│   │   └── Button.tsx              ← Primary / outline variants
│   ├── home/
│   │   ├── HeroSection.tsx
│   │   ├── WhatWeDoSection.tsx
│   │   ├── SmartServicesSection.tsx
│   │   ├── SaaSSection.tsx
│   │   ├── FlagshipProductSection.tsx
│   │   ├── WhyUsSection.tsx
│   │   └── GetStartedSection.tsx
│   ├── about/
│   │   ├── AboutHero.tsx
│   │   ├── OurStorySection.tsx
│   │   ├── WhatWeDoAbout.tsx
│   │   └── OurValuesSection.tsx
│   ├── services/
│   │   ├── ServicesHero.tsx
│   │   ├── ServiceAnchorNav.tsx
│   │   ├── WebDevSection.tsx
│   │   ├── MobileDevSection.tsx
│   │   ├── AIAutomationSection.tsx
│   │   ├── CloudSection.tsx
│   │   ├── CybersecuritySection.tsx
│   │   ├── AdditionalServicesSection.tsx
│   │   └── HowItWorksSection.tsx
│   ├── contact/
│   │   ├── ContactHero.tsx
│   │   ├── ContactInfo.tsx
│   │   └── ContactForm.tsx
│   ├── careers/
│   │   ├── CareersHero.tsx
│   │   ├── WhySeraphCodeSection.tsx
│   │   ├── JobCard.tsx
│   │   └── TalentPoolSection.tsx
│   ├── blog/
│   │   ├── BlogHero.tsx
│   │   ├── BlogCard.tsx
│   │   └── BlogPostLayout.tsx
│   ├── compliance/
│   │   ├── ComplianceHero.tsx
│   │   ├── CompanyInfoSection.tsx
│   │   ├── SecurityFrameworkSection.tsx
│   │   └── DataStorageSection.tsx
│   └── legal/
│       └── LegalPageLayout.tsx     ← Shared layout for Privacy + Data Storage
│
├── lib/
│   ├── blog.ts                     ← Blog data / MDX helpers
│   └── metadata.ts                 ← generateMetadata helper
│
├── public/
│   ├── svgs/sc_logo.svg
│   ├── og-image.jpg
│   └── assets/1213.jpg             ← Reused decorative image throughout site
│
└── styles/
    └── globals.css
```

---

## 3. Route Map

| Route | File | Page Title |
|---|---|---|
| `/` | `app/page.tsx` | Home |
| `/about` | `app/about/page.tsx` | About |
| `/services` | `app/services/page.tsx` | Services |
| `/contact` | `app/contact/page.tsx` | Contact |
| `/careers` | `app/careers/page.tsx` | Careers |
| `/blog` | `app/blog/page.tsx` | Blog Listing |
| `/blog/[slug]` | `app/blog/[slug]/page.tsx` | Blog Post |
| `/compliance` | `app/compliance/page.tsx` | Compliance |
| `/privacy-policy` | `app/privacy-policy/page.tsx` | Privacy Policy |
| `/data-storage` | `app/data-storage/page.tsx` | Data Storage |
| `/login` | `app/login/page.tsx` | Staff Login |

> **Note:** Original site used `/PrivacyPolicy` (PascalCase). Improve to `/privacy-policy` (kebab-case) with a redirect from the old URL for SEO continuity.

---

## 4. Shared Components

### 4.1 Navbar

**Component:** `components/layout/Navbar.tsx`

**Content:**
- Logo: `<Image src="/svgs/sc_logo.svg" alt="SeraphCode Logo" />`
- Nav links (left to right):
  - Home → `/`
  - About → `/about`
  - Services → `/services`
  - Contact → `/contact`
  - Careers → `/careers`
  - Staff Login → `/login` (styled differently — outline button)

**Behaviour:**
- Sticky on scroll
- Mobile: hamburger menu / drawer
- Active link highlighted

---

### 4.2 Footer

**Component:** `components/layout/Footer.tsx`

**Content:**

Logo + tagline:
> "Full service technology partner for web and mobile development, AI automation, digital solutions, and enterprise software development."

Social: Facebook link → `https://web.facebook.com/profile.php?id=61557904406889`

**Column: COMPANY**
- About → `/about`
- Services → `/services`
- Careers → `/careers`

**Column: SUPPORT**
- Contact → `/contact`
- Compliance → `/compliance`

**Column: BLOG**
- All Posts → `/blog`

**Column: LEGAL**
- Privacy Policy → `/privacy-policy`
- Data Storage → `/data-storage`

**Contact info:**
- Melbourne VIC 3000, Australia
- support@seraphcode.com.au
- +61 2 4012 4371

**Legal:**
> ACN - 675 006 425 | ABN - 11 675 006 425
> © 2026 SeraphCode. All rights reserved.

---

### 4.3 CTABanner

**Component:** `components/shared/CTABanner.tsx`

Appears at the bottom of **every page** before the footer.

**Content:**
> "Ready to accelerate your growth?"
> "Let's talk about how SeraphCode can build, automate, and scale your business."
> Button: **Book a Free Call** → `/contact`

---

## 5. Page: Home `/`

**File:** `app/page.tsx`

**SEO Metadata:**
- Title: `Custom Software Development Melbourne, Mobile Apps and Enterprise Solutions by SeraphCode`
- Description: `Leading custom software development company in Melbourne, Australia. Specializing in mobile apps, enterprise solutions, AI development, and cloud services. Australian-owned, compliance-first.`
- Keywords: `custom software development Melbourne, mobile app development Melbourne, enterprise software Australia, AI development Melbourne, software company Melbourne, web development Melbourne, cloud solutions Australia`
- OG Image: `/og-image.jpg` (1200×630)
- Theme color: `#1e40af`

---

### Component: `HeroSection`

**Label (small uppercase):** `Development · AI · Enterprise · Cloud`

**Heading (H1):**
> "We Build, Automate & Scale Your Business"

**Subtext:**
> "From custom web & mobile apps to AI-powered automation and enterprise solutions — we deliver end-to-end technology solutions that drive real growth."

**CTAs:**
- Primary button: **Book a Free Call** → `/contact` (opens booking)
- Secondary link: **Explore Services** → `/services`

---

### Component: `WhatWeDoSection`

**Label:** `WHAT WE DO`

**Heading:**
> "Full Spectrum Technology Solutions"

**Cards (3):**

| Icon | Title | Description | Link |
|---|---|---|---|
| 🌐 | Web Development | Business websites, e-commerce platforms, SaaS applications, and CMS solutions built for performance. | `/services` |
| 📱 | Mobile App Development | Native Android and iOS, cross-platform Flutter and React Native apps, booking systems to on demand services. | `/services` |
| 🤖 | AI & Automation | AI chatbots, workflow automation, CRM systems, and intelligent lead generation engines. | `/services` |

**Link:** View all services → `/services`

---

### Component: `SmartServicesSection`

**Label:** `STANDING OUT`

**Heading:**
> "Smart Services to Give You the Edge"

**Subtext:**
> "Beyond development and marketing, specialized services that set your business apart from the competition."

**Cards (3):**

| Title | Description |
|---|---|
| UI/UX Design | Beautiful, intuitive interfaces that convert visitors into customers. |
| Branding & Logo | Complete brand identity that makes your business unforgettable. |
| Cloud Deployment | AWS, Firebase, Vercel, we deploy and manage your infrastructure. |

---

### Component: `SaaSSection`

**Label:** `SaaS Development`

**Heading:**
> "Why We're the Best Choice for Your SaaS Product"

**Subtext:**
> "We specialize in building scalable, secure, and revenue-optimized SaaS products that grow with your business. From MVP to enterprise, we've got you covered."

**Feature Cards (4):**

| Title | Description |
|---|---|
| Scalable Architecture | Built from the ground up to handle growth, from startup to enterprise scale with cloud-native infrastructure. |
| Rapid Development | Faster time to market with our proven SaaS development process and reusable component libraries. |
| Revenue Optimization | Built-in subscription management, billing systems, and analytics to maximize your SaaS revenue potential. |
| Enterprise Security | Bank-level security, compliance, and data protection built into every SaaS product we develop. |

**CTA Link:** Learn more about our SaaS development → `/services`

**Image:** `/assets/1213.jpg` (right side)

---

### Component: `FlagshipProductSection`

**Label:** `Our Flagship Product`

**Heading:**
> "PostieMate — Logistics & Contractor Management Platform"

**Description:**
> "A comprehensive logistics and contractor management solution built for Australian delivery operations. Developed in close collaboration with Australia Post, PostieMate streamlines contractor management, route optimization, and compliance tracking while ensuring all data is stored securely in Australia."

**Feature Cards (4):**

| Title | Description |
|---|---|
| Compliance-First Design | Built with Australian compliance requirements, including WHS record-keeping and audit-ready activity logs. |
| Contractor Management | Comprehensive system for managing contractors, routes, and deliveries with role-based access controls. |
| Real-Time Tracking | Live tracking and reporting capabilities for better operational visibility and decision-making. |
| Secure & Scalable | Enterprise-grade security with Australian data storage and scalable architecture for growth. |

**CTA:** Visit PostieMate → `https://postiemate.com.au` (external, `target="_blank"`)

---

### Component: `WhyUsSection`

**Label:** `Why SeraphCode`

**Heading:**
> "Why Choose Us for Your Next Project"

**Subtext:**
> "We combine technical expertise with business understanding to deliver solutions that drive real results."

**Feature Cards (6):**

| Title | Description |
|---|---|
| Proven Track Record | Successfully delivered projects for businesses of all sizes, from startups to enterprise clients across Australia and beyond. |
| Compliance-First Approach | We understand Australian regulations and build solutions that meet local compliance requirements, including data storage and privacy laws. |
| End-to-End Solutions | From initial concept to deployment and ongoing support, we handle every aspect of your project with a single point of contact. |
| Australian Data Storage | All data is stored securely in Australia, ensuring compliance with Australian Privacy Principles and data sovereignty requirements. |
| Rapid Development | Agile methodology and modern tech stack enable faster time-to-market without compromising on quality or security. |
| Expert Team | Our distributed team brings together top talent from around the world, ensuring access to the best skills and expertise. |

**Image:** `/assets/1213.jpg`

---

### Component: `GetStartedSection`

**Label:** `Get Started`

**Heading:**
> "Ready to Build Something Incredible Together?"

**Subtext:**
> "Whether you need a website, mobile app, AI automation, or a dedicated dev team — SeraphCode has you covered. Let's talk."

**CTA:** Get in Touch → `/contact`

**Badges:**
- No commitment
- Free strategy session
- 30-minute call

---

## 6. Page: About `/about`

**File:** `app/about/page.tsx`

**SEO Metadata:**
- Title: `About SeraphCode, Custom Software Development Company in Melbourne`
- Description: `Learn about SeraphCode, a leading custom software development company in Melbourne, Australia. Founded in 2022, we transform businesses through innovative technology solutions.`
- Keywords: `about SeraphCode, software development company Melbourne, technology company Australia, software development team Melbourne`

---

### Component: `AboutHero`

**Label:** `ABOUT SERAPHCODE`

**Heading (H1):**
> "We transform ideas into powerful software solutions."

**Subtext:**
> "Founded in 2022, we're a full-service technology company that builds, automates, and scales businesses through development, AI, and enterprise solutions."

**CTA:** Work With Us → `/contact`

**Image:** `/assets/1213.jpg`

---

### Component: `OurStorySection`

**Label:** `Our Story`

**Heading:**
> "About SeraphCode"

**Body text:**
> SeraphCode was founded in 2022. We have grown from a small team of passionate developers to a full-service technology company. We've helped businesses transform their digital presence and achieve their goals through innovative technology solutions.
>
> Our flagship product, PostieMate (https://postiemate.com.au/), is a specialized solution designed for contractors, developed in close collaboration with Australia Post to streamline operations and enhance efficiency.
>
> Based in Melbourne, Australia, we serve clients worldwide with a distributed team model that brings together top talent from around the world, ensuring we can tackle complex challenges and deliver exceptional results.
>
> We transform innovative ideas into powerful software solutions that drive business growth and deliver exceptional user experiences.

---

### Component: `WhatWeDoAbout`

**Label:** `WHAT WE DO`

**Heading:**
> "A full-spectrum technology partner"

**Subtext:**
> "We cover every aspect of your digital journey, from concept to launch and beyond."

**Feature Cards (4):**

| Title | Description |
|---|---|
| Web & App Development | Business websites, e-commerce platforms, SaaS applications, and CMS solutions built for performance. |
| AI & Automation | AI chatbots, workflow automation, CRM systems, and intelligent lead generation engines. |
| Enterprise Solutions | Custom enterprise software, scalable platforms, and comprehensive technology solutions for large-scale operations. |
| Mobile Development | Native Android & iOS, cross-platform Flutter/React Native apps including booking systems and on-demand services. |

**CTA Link:** View all services → `/services`

**Image:** `/assets/1213.jpg`

---

### Component: `OurValuesSection`

**Label:** `OUR VALUES`

**Heading:**
> "What drives us every day"

**Subtext:**
> "These aren't just words on a wall. They guide every decision we make."

**Cards (4):**

| Title | Content |
|---|---|
| Our Mission | To empower businesses with innovative technology solutions that drive growth and success. |
| Our Values | Integrity, innovation, and excellence guide everything we do. |
| Our Vision | To be the leading technology partner for businesses worldwide. |
| Global Reach | Based in Melbourne, Australia, serving clients worldwide with a distributed team model. |

---

## 7. Page: Services `/services`

**File:** `app/services/page.tsx`

**SEO Metadata:**
- Title: `Software Development Services in Melbourne by SeraphCode`
- Description: `Comprehensive software development services in Melbourne, Australia. Custom software, cloud solutions, mobile apps, cybersecurity, data solutions, and digital transformation.`
- Keywords: `software development services Melbourne, custom software development, cloud solutions Australia, mobile app development, cybersecurity services, data solutions Melbourne`

---

### Component: `ServicesHero`

**Label:** `Our Services`

**Heading (H1):**
> "Everything your business needs to thrive digitally."

**Subtext:**
> "From building your website and mobile app, to automating with AI and scaling with enterprise solutions. We handle it all."

---

### Component: `ServiceAnchorNav`

Horizontal sticky anchor-link bar:
- Web Development → `#web-dev`
- Mobile Apps → `#mobile-dev`
- AI & Automation → `#ai-automation`
- Cloud Solutions → `#cloud-solutions`
- Cybersecurity → `#cybersecurity`

---

### Component: `WebDevSection` (id="web-dev")

**Label:** `Core Development`

**Heading:**
> "Web Development"

**Subtext:**
> "We build fast, scalable, and beautiful websites and web applications that drive business results, from landing pages to full SaaS platforms."

**Service Items (6):**

| Title | Description |
|---|---|
| Business Websites | Professional, responsive websites that establish credibility and convert visitors into customers. |
| Custom Web Apps (SaaS) | Scalable web applications with user authentication, dashboards, APIs, and subscription billing. |
| E-commerce Platforms | Full-featured online stores with payment integration, inventory management, and order tracking. |
| API & Integrations | Connect your website to CRMs, payment gateways, analytics tools, and third-party services. |
| Maintenance & Security | Ongoing updates, performance optimization, security patches, and SSL management. |
| CMS Solutions | WordPress, headless CMS, or custom CMS solutions for easy content management by your team. |

**Badge:** `Great for: Local businesses, startups, enterprises, and e-commerce platforms.`

---

### Component: `MobileDevSection` (id="mobile-dev")

**Label:** `Core Development`

**Heading:**
> "Mobile App Development"

**Subtext:**
> "Native and cross-platform mobile apps built for performance, whether it's a booking system, on-demand service, or business tool."

**Service Items (4):**

| Title | Description |
|---|---|
| Android & iOS Apps | Native mobile applications optimized for each platform with smooth performance and great UX. |
| Cross-Platform Apps | Flutter and React Native apps that work on both platforms from a single codebase, making development faster and more cost-effective. |
| Business Apps | Internal tools, employee management, field reporting, and operational apps for your team. |
| App Maintenance | Bug fixes, feature updates, app store management, and performance monitoring post-launch. |

**Image:** `/assets/1213.jpg`

---

### Component: `AIAutomationSection` (id="ai-automation")

**Label:** `Premium Services`

**Heading:**
> "AI & Automation"

**Subtext:**
> "High-value AI solutions that automate repetitive work, enhance customer experience, and generate leads. Your premium growth engine."

**Service Items (4):**

| Title | Description |
|---|---|
| AI Chatbots | Intelligent conversational bots that handle customer queries 24/7 with natural language processing. |
| Workflow Automation | Automated lead scoring, pipeline management, follow-ups, and sales reporting in your CRM. |
| AI Lead Generation | Smart lead capture, qualification, and routing systems that fill your pipeline on autopilot. |
| Process Automation | End-to-end workflow automation including invoicing, reporting, data entry, and internal operations. |

**Badge:** `This is our premium service category with higher value solutions for business automation.`

---

### Component: `CloudSection` (id="cloud-solutions")

**Label:** `Infrastructure`

**Heading:**
> "Cloud Solutions"

**Subtext:**
> "Harness the power of cloud computing with our expert solutions. We help you migrate, optimize, and manage your cloud infrastructure."

**Service Items (4):**

| Title | Description |
|---|---|
| Cloud Migration | Seamless migration to AWS, Azure, or Google Cloud with minimal downtime and data loss. |
| DevOps & CI/CD | Automated deployment pipelines, containerization, and infrastructure as code for scalable systems. |
| Serverless Architecture | Build scalable applications using serverless technologies for cost-effective operations. |
| Cloud Cost Optimization | Reduce cloud costs through resource optimization, right-sizing, and efficient architecture. |

**Image:** `/assets/1213.jpg`

---

### Component: `CybersecuritySection` (id="cybersecurity")

**Label:** `Security Services`

**Heading:**
> "Cybersecurity"

**Subtext:**
> "Protect your digital assets with our comprehensive security solutions. We implement robust security measures to keep your data safe."

**Service Items (4):**

| Title | Description |
|---|---|
| Security Audits | Comprehensive security assessments to identify vulnerabilities and recommend improvements. |
| Penetration Testing | Simulated attacks to test your security defenses and ensure robust protection. |
| Compliance Management | Help achieve and maintain compliance with industry standards and regulations. |
| Security Training | Educate your team on security best practices and threat awareness. |

**Image:** `/assets/1213.jpg`

---

### Component: `AdditionalServicesSection`

**Label:** `Additional Services`

**Heading:**
> "Smart services to give you the edge"

**Subtext:**
> "Specialized offerings that complement our core services and help you stand out."

**Cards (7):**

| Title | Description |
|---|---|
| UI/UX Design Services | Stunning, user-centric interfaces designed to maximize engagement and conversion rates. |
| Branding & Logo Design | Complete brand identity packages including logos, color systems, typography, and brand guidelines. |
| Cloud Deployment | Expert deployment on AWS, Firebase, Vercel, and DigitalOcean with CI/CD pipelines. |
| SaaS Product Development | End-to-end SaaS development from MVP to full-scale product with subscription billing. |
| CRM & ERP Systems | Custom business management systems that streamline operations and centralize data. |
| Cybersecurity Consulting | Security audits, penetration testing, SSL setup, and compliance consulting. |
| API Development & Integration | Custom REST/GraphQL APIs and third-party integrations that connect your entire tech stack. |

---

### Component: `HowItWorksSection`

**Label:** `How It Works`

**Heading:**
> "From idea to launch and beyond"

**Subtext:**
> "Our proven 4-step process delivers results fast, whether it's a website, app, or automation system."

**Steps (numbered 01–04):**

| Step | Title | Description |
|---|---|---|
| 01 | Discovery Call | We learn about your business, understand your goals, and identify the best approach for your project. |
| 02 | Strategy & Design | Our team creates wireframes, architecture, and a detailed project blueprint tailored to your vision. |
| 03 | Build & Deploy | Agile development with regular demos. We build, test, and launch with minimal disruption. |
| 04 | Support & Scale | Ongoing maintenance, performance monitoring, and continuous improvements as your business grows. |

---

## 8. Page: Contact `/contact`

**File:** `app/contact/page.tsx`

**SEO Metadata:**
- Title: `Contact SeraphCode, Software Development Company in Melbourne`
- Description: `Contact SeraphCode for custom software development services in Melbourne, Australia. Phone: +61 2 4012 4371. Email: support@seraphcode.com.au. Business Hours: Mon-Fri 9AM-6PM AEST`
- Keywords: `contact SeraphCode, software development Melbourne contact, software company Australia, Melbourne software developers`

---

### Component: `ContactHero`

**Label:** `Contact Us`

**Heading (H1):**
> "Let's start a conversation."

**Subtext:**
> "Whether you have a question, need a quote, or want to explore new possibilities — we're here to help."

**Image:** `/assets/1213.jpg`

---

### Component: `ContactInfo`

**Heading:** `Get in touch`

**Subtext:**
> "Reach out to us through any of these channels. We typically respond within a few hours during business days."

**Info Cards:**

| Label | Value |
|---|---|
| Email | support@seraphcode.com.au |
| Phone | +61 2 4012 4371 |
| Business Hours | Mon – Fri: 9:00 AM – 6:00 PM (AEST), Sat: 9:00 AM – 1:00 PM |

---

### Component: `ContactForm`

**Heading:** `Send us a message`

**Form Fields:**

| Field | Type | Required |
|---|---|---|
| Full Name | text | ✅ |
| Email Address | email | ✅ |
| Company | text | ❌ |
| Phone Number | tel | ❌ |
| Service Interested In | select | ❌ |
| Message | textarea | ✅ |

**Dropdown options for Service:**
- Web Development
- Mobile App Development
- AI & Automation
- UI/UX Design & Branding
- Cloud Solutions / SaaS
- Other / Not Sure

**Submit Button:** `Send Message`

---

## 9. Page: Careers `/careers`

**File:** `app/careers/page.tsx`

**SEO Metadata:**
- Title: `Careers at SeraphCode, Software Development Jobs in Melbourne`
- Description: `Join SeraphCode and build the future of technology. We're hiring talented software developers, designers, and technology professionals in Melbourne, Australia.`
- Keywords: `software development jobs Melbourne, tech jobs Australia, software engineer jobs Melbourne, developer careers Melbourne, IT jobs Melbourne`

---

### Component: `CareersHero`

**Label:** `We're Hiring`

**Heading (H1):**
> "Build the future with us."

**Subtext:**
> "Join a team of passionate developers, designers, and marketers building real products for real businesses across the globe."

**CTA:** View Open Positions → `#openings`

**Image:** `/assets/1213.jpg`

---

### Component: `WhySeraphCodeSection`

**Label:** `Why SeraphCode`

**Heading:**
> "More than a job — a career you'll love."

**Subtext:**
> "We're building a company where talented people do their best work, grow fast, and actually enjoy it."

**Perk Cards (6):**

| Title | Description |
|---|---|
| Remote-First | Work from anywhere. We believe great talent isn't limited by geography. |
| Growth Opportunities | Clear career paths, skill development budgets, and mentorship from senior leads. |
| Flexible Hours | We focus on output, not hours. Design your schedule around your life. |
| Health & Wellness | Health insurance, mental wellness support, and paid time off from day one. |
| Learning Budget | Annual allowance for courses, conferences, certifications, and books. |
| Collaborative Culture | Small, tight-knit teams where your ideas are heard and your impact is real. |

---

### Component: `JobCard` (id="openings")

**Section Label:** `Open Positions`

**Section Heading:**
> "Find your role."

**Section Subtext:**
> "We're looking for driven individuals who want to make a real impact. Don't see your role? Reach out anyway — we're always looking for great people."

---

**Job 1:**
- **Title:** Software Engineer
- **Department:** Engineering
- **Type:** Full-time
- **Location:** Melbourne, Australia / Remote
- **Description:** We're looking for a talented Software Engineer to join our development team. You'll work on cutting-edge web and mobile applications, collaborating with cross-functional teams to deliver high-quality software solutions that drive business success.
- **Requirements:**
  - Proficient in Java for backend development and enterprise applications
  - Experience with React & Next.js for modern frontend development
  - Understanding of software engineering principles: clean code, design patterns, testing, and agile methodologies
  - Strong communication and collaboration skills
- **CTA:** Apply Now

---

**Job 2:**
- **Title:** UI/UX Designer
- **Department:** Design
- **Type:** Full-time / Contract
- **Location:** Melbourne, Australia / Remote
- **Description:** We're seeking a creative UI/UX Designer to shape user experiences and interfaces for our digital products. You'll work closely with developers and stakeholders to create intuitive, visually appealing, and user-centered designs that solve real problems.
- **Requirements:**
  - Proficiency in Figma (or similar design tools)
  - Strong portfolio showcasing web and mobile design work
  - Understanding of design systems and component-based design
  - Ability to conduct user research and usability testing
- **CTA:** Apply Now

---

**Job 3:**
- **Title:** Cold Calling Specialist
- **Department:** Sales
- **Type:** Commission-Based
- **Location:** Remote
- **Description:** We're looking for a confident and results-driven Cold Calling Specialist to join our sales team. This is a commission-based role with unlimited earning potential, targeting direct Australian clients during Australian business hours.
- **Requirements:**
  - Fluent English (near-native level)
  - Strong communication and persuasion skills
  - Confident in handling outbound sales calls
  - Previous cold-calling or sales experience is an advantage
  - Ability to work independently and achieve targets
- **CTA:** Apply Now

---

### Component: `TalentPoolSection`

**Text:**
> "Don't see the right fit? We're always interested in talented people."

**CTA:** Add your resume to our Talent Pool

---

## 10. Page: Blog `/blog`

**File:** `app/blog/page.tsx`

**SEO Metadata:**
- Title: `Blog | SeraphCode - IT Company Australia | Software Development Melbourne`
- Description: `Read our latest insights on IT services, software development, AI automation, and technology trends from SeraphCode, a leading IT company in Australia.`
- Keywords: `IT company Australia, software development blog, Melbourne IT company, technology insights, Australian IT services`

---

### Component: `BlogHero`

**Heading (H1):** `Our Blog`

**Subtext:**
> "Insights, trends, and expert advice on IT services, software development, and technology from Australia's leading IT company."

**Image:** `/assets/1213.jpg`

---

### Component: `BlogCard`

Used in a grid on the blog listing page.

**Blog Posts (6):**

| Category | Date | Title | Description | Read Time | Slug |
|---|---|---|---|---|---|
| Business | 26 Feb 2026 | Why Choose an Australian IT Company for Your Software Development Needs | Discover the benefits of working with an Australian IT company, including data sovereignty, local support, and compliance with Australian regulations. | 5 min | `why-choose-australian-it-company` |
| Development | 26 Feb 2026 | Custom Software Development in Australia: A Complete Guide | Learn how custom software development can transform your business operations and why Australian companies are leading the way in innovative solutions. | 6 min | `custom-software-development-australia` |
| Business | 26 Feb 2026 | Top IT Company in Melbourne: What to Look For | Melbourne is home to some of Australia's leading IT companies. Here's what makes a great IT partner and how to choose the right one for your business. | 4 min | `melbourne-it-company-guide` |
| Technology | 26 Feb 2026 | AI Automation Solutions for Australian Businesses | Explore how AI automation is revolutionizing Australian businesses, from streamlining operations to reducing costs and improving efficiency. | 7 min | `ai-automation-australia` |
| Development | 26 Feb 2026 | Web Development Services in Australia: Best Practices | Discover the latest trends in web development and how Australian web development companies are creating cutting-edge digital experiences. | 5 min | `web-development-australia` |
| Enterprise | 26 Feb 2026 | Enterprise Software Solutions: Why Australian Companies Excel | Learn why Australian enterprise software companies are trusted by businesses worldwide for scalable, secure, and compliant solutions. | 6 min | `enterprise-software-australia` |

---

## 11. Page: Blog Post `/blog/[slug]`

**File:** `app/blog/[slug]/page.tsx`

**SEO Metadata (dynamic — example: `why-choose-australian-it-company`):**
- Title: `Why Choose an Australian IT Company for Your Software Development | SeraphCode`
- OG Type: `article`

---

### Component: `BlogPostLayout`

**Elements:**
- Back link: `← Back to Blog` → `/blog`
- Category badge (e.g. "Business")
- H1: Post title
- Date + read time
- Hero image: `/assets/1213.jpg`
- Body content (rendered from MDX or CMS)
- Inline CTA link: `Get in Touch` → `/contact`
- Bottom: CTABanner

---

**Sample Post: `why-choose-australian-it-company`**

**Category:** Business
**Date:** February 26, 2026
**Read Time:** 5 min

**Body (summarised sections):**

1. **Data Sovereignty and Compliance** — Australian IT companies keep data within Australian borders, complying with APPs and the Privacy Act 1988. SeraphCode maintains all client data on Australian servers.

2. **Local Support and Understanding** — Same timezone, understanding of Australian business culture. Benefits: real-time collaboration, face-to-face meetings, no communication barriers.

3. **Quality and Innovation** — Australian tech sector is known for high standards. Benefits: cutting-edge technology, agile practices, UX focus.

4. **Cost-Effective Solutions** — Competitive pricing with better long-term ROI than offshore. Transparent pricing, no hidden costs.

5. **Industry Expertise** — SeraphCode specialises in: enterprise software, AI automation & ML, web & mobile apps, cloud solutions & digital transformation.

6. **Why Choose SeraphCode** — Australian-owned, Melbourne-based, custom software, AI automation, enterprise solutions.

**CTA:** Get in Touch → `/contact`

---

## 12. Page: Compliance `/compliance`

**File:** `app/compliance/page.tsx`

**SEO Metadata:**
- Title: `Security, Compliance & Trust | SeraphCode`
- Description: `Learn about SeraphCode's security practices, compliance framework, and data storage policies. Australian-owned company with ISO 27001-aligned security practices.`
- Keywords: `security compliance, data storage Australia, Australian privacy act, ISO 27001, data sovereignty, Australian data centers`

---

### Component: `ComplianceHero`

**Badge:** 🇦🇺 Australian Company

**Heading (H1):**
> "Security, Compliance & Trust"

**Subheading:** `Built for Australian Businesses`

**Subtext:**
> "We build compliance into the workflow, not as an afterthought."
> "Seraph Code PTY LTD is an Australian-owned software company. Our platforms are designed for Australian industries with security, privacy, and compliance as first-class priorities."

---

### Component: `CompanyInfoSection`

**Heading:** 🇦🇺 Australian Company

**Info Table:**

| Field | Value |
|---|---|
| Company Name | Seraph Code PTY LTD |
| Governing Law | Victoria, Australia |
| ACN | 675 006 425 |
| ABN | 11 675 006 425 |

---

### Component: `SecurityFrameworkSection`

**Heading:** Information Security Framework

**Body:**
> "Our systems follow ISO/IEC 27001-aligned security practices including:"

**List:**
- Risk-based security management
- Controlled access to systems and data
- Continuous monitoring and improvement
- Documented security policies and procedures

---

### Component: `DataStorageSection`

**Heading:** Data Storage & Privacy

**Subtext:**
> "Your data is stored securely in Australia, protected by Australian law"

**Cards (7):**

| Title | Key Points |
|---|---|
| All Data Stored in Australia | Stored exclusively in Australian data centers; subject to APPs, Privacy Act 1988; no transfer outside Australia without explicit consent. |
| Australian Data Centers | Data within Australian jurisdiction; compliant with APPs; no transfer without consent. |
| Data Sovereignty | Australian legal jurisdiction; protected by Privacy Act; no foreign government access. |
| Security & Encryption | TLS/SSL in transit; encryption at rest; role-based access; regular audits. |
| Backup & Recovery | Automated daily backups; Australian data centers; disaster recovery; aligned retention policies. |
| Compliance & Auditing | Audit-ready logs; time-stamped records; immutable trails; WHS and Fair Work compliance. |
| No International Transfers | No automatic replication overseas; explicit consent required; transparent handling; full disclosure of location. |

---

## 13. Page: Privacy Policy `/privacy-policy`

**File:** `app/privacy-policy/page.tsx`

> Redirect `/PrivacyPolicy` → `/privacy-policy` via `next.config.js` redirects.

**SEO Metadata:**
- Title: `Privacy Policy | SeraphCode`
- Description: `SeraphCode Privacy Policy - Learn how we collect, use, and protect your personal information in accordance with Australian Privacy Principles.`
- Keywords: `privacy policy, Australian privacy act, data protection, personal information`

---

### Component: `LegalPageLayout`

**Badge:** `Your Privacy Matters`

**Heading (H1):** `Privacy Policy`

**Subtext:**
> "We are committed to protecting your personal information and respecting your privacy"

---

**Content Sections:**

**Intro:**
> Seraph Code Pty Ltd is committed to providing quality software development services to you. This policy outlines our ongoing obligations to you regarding how we manage your Personal Information.
> We have adopted the Australian Privacy Principles (APPs) contained in the Privacy Act 1988 (Cth). A copy may be obtained from https://www.oaic.gov.au/.

**Section 1 — What is Personal Information and Why Do We Collect It?**
> Personal Information is information or an opinion that identifies an individual. Examples include: names, addresses, email addresses, phone numbers, fax numbers.
> Collected via: interviews, correspondence, telephone, email, website, cookies, third parties.
> Primary purpose: providing software development services, informing clients, and marketing.

**Section 2 — Sensitive Information**
Used only for:
- Primary purpose for which it was obtained
- Secondary purpose directly related to the primary
- With consent; or where required by law

**Section 3 — Third Parties**
> We collect Personal Information only from you where practicable. Where provided by third parties, we will take reasonable steps to make you aware.

**Section 4 — Disclosure of Personal Information**
Disclosed where:
- You consent to the use or disclosure
- Required or authorised by law

**Section 5 — Security of Personal Information**
> Stored to reasonably protect from misuse, loss, or unauthorised access.
> 🇦🇺 Data Storage: All personal information stored in Australia using Australian-based data centers.
> Retained for minimum 7 years in client files.

**Section 6 — Access to Your Personal Information**
> You may access and correct your Personal Information by contacting us in writing. No access fee; administrative fee may apply for copies.

**Section 7 — Maintaining Quality**
> We take reasonable steps to keep your Personal Information accurate and up-to-date.

**Section 8 — Policy Updates**
> This Policy may change from time to time and is available on our website.

**Section 9 — Complaints and Enquiries**
> Contact: support@seraphcode.com.au

---

## 14. Page: Data Storage `/data-storage`

**File:** `app/data-storage/page.tsx`

**SEO Metadata:**
- Title: `Data Storage & Privacy | SeraphCode`
- Description: (inherits from page content)

---

### Component: `LegalPageLayout` (reused)

**Badge:** 🇦🇺 Australian Data Storage

**Heading (H1):** `Data Storage & Privacy`

**Subtext:**
> "Your data is stored securely in Australia, protected by Australian law"

---

**Intro:**
> At Seraph Code PTY LTD, we are committed to keeping your data within Australian borders. All customer data, personal information, and business records are stored exclusively in Australian data centers using Australian-based cloud infrastructure.
> Why This Matters: Subject to APPs, Privacy Act 1988, Australian legal jurisdiction. Protected by Australian law, not subject to foreign government access.

**Cards (same as Compliance page's DataStorageSection — 6 cards):**
Australian Data Centers · Data Sovereignty · Security & Encryption · Backup & Recovery · Compliance & Auditing · No International Transfers

---

**Legal & Compliance Framework Section:**

| Subsection | Content |
|---|---|
| Australian Privacy Act 1988 | All data handling complies with Privacy Act 1988 and APPs. |
| Data Sovereignty | Data in Australia remains under Australian legal jurisdiction, not subject to foreign law. |
| No International Transfers | No automatic transfer or replication outside Australia; explicit consent required. |
| Industry Compliance | Supports WHS record-keeping, Fair Work requirements, and audit-ready documentation. |

---

## 15. Global SEO & Metadata

**`app/layout.tsx` base metadata:**

```ts
export const metadata: Metadata = {
  metadataBase: new URL('https://seraphcode.com.au'),
  openGraph: {
    siteName: 'SeraphCode',
    locale: 'en_AU',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  themeColor: '#1e40af',
  authors: [{ name: 'SeraphCode' }],
  geo: { placename: 'Melbourne', region: 'AU-VIC', position: '-37.8136;144.9631' },
};
```

**`next.config.js` redirects:**
```js
async redirects() {
  return [
    { source: '/PrivacyPolicy', destination: '/privacy-policy', permanent: true },
  ];
}
```

---

## 16. Reusable UI Primitives

| Component | Props | Usage |
|---|---|---|
| `Button` | `variant: 'primary' \| 'outline'`, `href?`, `children` | All CTAs |
| `SectionLabel` | `text` | Small uppercase label above section headings |
| `SectionHeading` | `text`, `highlight?` | H2 with optional coloured word |
| `FeatureCard` | `icon?`, `title`, `description` | Used in almost every section |
| `Badge` | `text`, `emoji?` | Small inline tags (e.g. "Full-time", "Remote") |
| `CTABanner` | — | Bottom-of-page banner (same on every page) |

---

## 17. Suggested Improvements Over Original

| Area | Original Issue | Improvement |
|---|---|---|
| URL structure | `/PrivacyPolicy` (PascalCase) | Change to `/privacy-policy`, add 301 redirect |
| Image variety | Same `/assets/1213.jpg` used on every page | Use different images per section or add hero illustrations |
| Blog content | No dynamic routing visible | Use MDX or a headless CMS (e.g. Contentlayer, Sanity) for `/blog/[slug]` |
| Contact form | No visible API handler | Wire to a server action or API route (e.g. Resend for email) |
| Careers Apply | "Apply Now" with no action | Link to mailto or a form modal |
| Talent Pool | "Add your resume" with no action | Link to a form or email |
| Staff Login | Exists in nav but route is unknown | Create `/login` page with proper auth (NextAuth.js) |
| Anchor nav (Services) | May not exist in original | Add sticky `ServiceAnchorNav` component for UX |
| Data Storage & Compliance | Very similar content duplicated | Extract shared `DataStorageCards` component used on both pages |
| Performance | Unknown original stack | Next.js App Router + `next/image` + `next/font` for optimal Core Web Vitals |
| SEO | No structured data visible | Add `Organization` + `WebSite` JSON-LD schema in root layout |

---

*Blueprint generated from full crawl of seraphcode.com.au — May 2026.*
*Stack: Next.js 14+ (App Router) · TypeScript · Tailwind CSS*
