import { Button } from "@/components/shared/Button";
import { Badge } from "@/components/shared/Badge";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionLabel } from "@/components/shared/SectionLabel";

export function GetStartedSection() {
  return (
    <section className="relative py-24 md:py-32 cyber-grid-bg">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(111,231,255,0.12),transparent_50%),radial-gradient(ellipse_at_80%_80%,rgba(165,108,255,0.07),transparent_45%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="cyber-chamfer holographic-panel relative p-8 md:p-12">
          <SectionLabel text="Get Started" />
          <SectionHeading text="Ready to Build Something Incredible Together?" />
          <p className="mb-8 max-w-2xl text-base leading-relaxed tracking-wide text-muted-foreground md:text-lg">
            Whether you need a website, mobile app, AI automation, or a dedicated
            dev team — SeraphCode has you covered. Let&apos;s talk.
          </p>
          <div className="flex flex-wrap gap-3">
            <Badge text="No commitment" />
            <Badge text="Free strategy session" />
            <Badge text="30-minute call" />
          </div>
          <div className="mt-10">
            <Button variant="glitch" href="/contact">
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
