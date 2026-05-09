import Link from "next/link";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { SITE } from "@/lib/constants";

export function OurStorySection() {
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionLabel text="Our Story" />
        <SectionHeading text="About SeraphCode" />
        <div className="space-y-5 text-base leading-relaxed tracking-wide text-muted-foreground">
          <p>
            SeraphCode was founded in 2022. We have grown from a small team of
            passionate developers to a full-service technology company.
            We&apos;ve helped businesses transform their digital presence and
            achieve their goals through innovative technology solutions.
          </p>
          <p>
            Our flagship product,{" "}
            <Link
              href={SITE.postiemate}
              className="text-accent hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              PostieMate
            </Link>
            , is a specialized solution designed for contractors, developed in
            close collaboration with Australia Post to streamline operations and
            enhance efficiency.
          </p>
          <p>
            Based in Melbourne, Australia, we serve clients worldwide with a
            distributed team model that brings together top talent from around
            the world, ensuring we can tackle complex challenges and deliver
            exceptional results.
          </p>
          <p>
            We transform innovative ideas into powerful software solutions that
            drive business growth and deliver exceptional user experiences.
          </p>
        </div>
      </div>
    </section>
  );
}
