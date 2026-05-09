import type { Metadata } from "next";
import { SectionLabel } from "@/components/shared/SectionLabel";

export const metadata: Metadata = {
  title: "Staff Login",
};

export default function LoginPage() {
  return (
    <div className="mx-auto max-w-lg px-4 py-24 sm:px-6 lg:px-8">
      <SectionLabel text="Staff" />
      <h1 className="font-heading text-3xl font-black uppercase tracking-wide text-foreground">
        Staff Login
      </h1>
      <p className="mt-4 text-muted-foreground">
        This area is reserved for SeraphCode team members. Authentication will be
        connected here (for example via your identity provider).
      </p>
      <div className="cyber-chamfer mt-8 border border-dashed border-border bg-card/40 p-8 text-center text-sm text-muted-foreground">
        Placeholder — no sign-in configured in this build.
      </div>
    </div>
  );
}
