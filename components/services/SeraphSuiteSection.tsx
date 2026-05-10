import { ServiceSection } from "./ServiceSection";

const items = [
  {
    title: "User & role management",
    description:
      "Access control, granular permissions, admin roles, and multi-user administration so the right people see the right data.",
  },
  {
    title: "CRM & customer management",
    description:
      "Customer records, lead tracking, communication history, and sales workflows that keep revenue teams aligned.",
  },
  {
    title: "Inventory & product management",
    description:
      "Product catalogs, stock levels, item masters, and warehouse-friendly operations with clear audit trails.",
  },
  {
    title: "Order & workflow management",
    description:
      "Operational workflows, approvals, task tracking, and process automation that reduce manual handoffs.",
  },
  {
    title: "Authentication & security",
    description:
      "Account safeguards, role-based access, audit logs, and a compliance-oriented design on secure, enterprise-grade hosting.",
  },
  {
    title: "Reporting & dashboards",
    description:
      "Analytics dashboards, operational visibility, and business reporting for leadership and line managers.",
  },
  {
    title: "Cloud-based architecture",
    description:
      "Scalable cloud foundations with AWS, Firebase, Vercel, and API integrations that grow with your load and footprint.",
  },
  {
    title: "Custom module development",
    description:
      "Modular, client-specific extensions—SeraphSuite is tailored to your enterprise rather than a one-size-fits-all box.",
  },
];

export function SeraphSuiteSection() {
  return (
    <ServiceSection
      id="seraphsuite-erp"
      label="Enterprise platform"
      heading="SeraphSuite ERP"
      subtext="SeraphSuite ERP is a customizable, cloud-based enterprise platform built to centralize operations, automate workflows, manage users and resources, and improve efficiency through scalable, modular solutions—with compliance-first architecture and security you can stand behind."
      items={items}
      badge="Great for: Growing teams that need one system for CRM, inventory, orders, and reporting—without sacrificing governance."
      sectionClassName="cyber-surface-deep border-y border-border"
    />
  );
}
