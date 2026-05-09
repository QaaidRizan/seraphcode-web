import type { ReactNode } from "react";
import { SectionLabel } from "@/components/shared/SectionLabel";

export function LegalPageLayout({
  badge,
  title,
  subtext,
  children,
}: {
  badge: string;
  title: string;
  subtext: string;
  children: ReactNode;
}) {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionLabel text={badge} />
      <h1 className="font-heading mb-4 text-3xl font-black uppercase tracking-wide text-foreground md:text-4xl">
        {title}
      </h1>
      <p className="mb-10 text-base leading-relaxed tracking-wide text-muted-foreground">
        {subtext}
      </p>
      <div className="space-y-8 text-sm leading-relaxed tracking-wide text-muted-foreground md:text-base">
        {children}
      </div>
    </article>
  );
}
