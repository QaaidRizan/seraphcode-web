import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { pageMetadata } from "@/lib/metadata-helpers";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy | SeraphCode",
  description:
    "SeraphCode Privacy Policy - Learn how we collect, use, and protect your personal information in accordance with Australian Privacy Principles.",
  keywords:
    "privacy policy, Australian privacy act, data protection, personal information",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      badge="Your Privacy Matters"
      title="Privacy Policy"
      subtext="We are committed to protecting your personal information and respecting your privacy"
    >
      <section>
        <p>
          Seraph Code Pty Ltd is committed to providing quality software
          development services to you. This policy outlines our ongoing
          obligations to you regarding how we manage your Personal Information.
        </p>
        <p className="mt-4">
          We have adopted the Australian Privacy Principles (APPs) contained in
          the Privacy Act 1988 (Cth). A copy may be obtained from the Office of
          the Australian Information Commissioner at{" "}
          <a
            href="https://www.oaic.gov.au/"
            className="text-accent hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            oaic.gov.au
          </a>
          .
        </p>
      </section>

      <section>
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          1. What is Personal Information and Why Do We Collect It?
        </h2>
        <p className="mt-3">
          Personal Information is information or an opinion that identifies an
          individual. Examples include: names, addresses, email addresses, phone
          numbers, and fax numbers.
        </p>
        <p className="mt-3">
          Personal Information is obtained in many ways including interviews,
          correspondence, telephone and email contact, via our website, from
          cookies, and from third parties. We collect Personal Information for
          the primary purpose of providing software development services,
          informing clients, and marketing.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          2. Sensitive Information
        </h2>
        <p className="mt-3">
          Sensitive information is used only for the primary purpose for which
          it was obtained, for a secondary purpose directly related to the
          primary purpose, with your consent, or where required or authorised by
          law.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          3. Third Parties
        </h2>
        <p className="mt-3">
          Where reasonable and practicable, we collect Personal Information only
          from you. Where Personal Information is supplied by third parties, we
          will take reasonable steps to make you aware.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          4. Disclosure of Personal Information
        </h2>
        <p className="mt-3">
          Personal Information may be disclosed where you consent to the use or
          disclosure, or where disclosure is required or authorised by law.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          5. Security of Personal Information
        </h2>
        <p className="mt-3">
          Personal Information is stored in a manner that reasonably protects it
          from misuse, loss, and unauthorised access.
        </p>
        <p className="mt-3">
          <strong className="text-foreground">Data Storage:</strong> All
          personal information is stored in Australia using Australian-based
          data centers.
        </p>
        <p className="mt-3">
          Client files are retained for a minimum of 7 years.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          6. Access to Your Personal Information
        </h2>
        <p className="mt-3">
          You may access and correct your Personal Information by contacting us
          in writing. We will not charge a fee for access; an administrative
          fee may apply for providing copies.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          7. Maintaining Quality
        </h2>
        <p className="mt-3">
          We take reasonable steps to keep your Personal Information accurate,
          complete, and up-to-date.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          8. Policy Updates
        </h2>
        <p className="mt-3">
          This Policy may change from time to time and is available on our
          website.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          9. Complaints and Enquiries
        </h2>
        <p className="mt-3">
          Contact:{" "}
          <a
            href="mailto:support@seraphcode.com.au"
            className="text-accent hover:underline"
          >
            support@seraphcode.com.au
          </a>
        </p>
      </section>
    </LegalPageLayout>
  );
}
