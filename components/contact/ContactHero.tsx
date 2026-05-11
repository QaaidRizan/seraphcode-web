import Image from "next/image";
import { SectionLabel } from "@/components/shared/SectionLabel";

export function ContactHero() {
  return (
    <section className="relative border-b border-border py-16 md:py-20 cyber-grid-bg">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <SectionLabel text="Contact Us" />
          <h1 className="font-heading text-4xl font-black uppercase tracking-wide text-foreground md:text-5xl">
            Let&apos;s start a conversation.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Whether you have a question, need a quote, or want to explore new
            possibilities — we&apos;re here to help.
          </p>
        </div>
        <div className="cyber-chamfer overflow-hidden border border-border">
          <Image
            src="/assets/images/contactus.jpg"
            alt=""
            width={900}
            height={560}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
