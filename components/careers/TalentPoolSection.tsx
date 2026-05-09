import { Button } from "@/components/shared/Button";
import { SITE } from "@/lib/constants";

export function TalentPoolSection() {
  const href = `mailto:${SITE.email}?subject=${encodeURIComponent("Talent pool / General application")}`;
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-lg text-muted-foreground">
          Don&apos;t see the right fit? We&apos;re always interested in talented
          people.
        </p>
        <div className="mt-8 flex justify-center">
          <Button variant="outline" href={href} external>
            Add your resume to our Talent Pool
          </Button>
        </div>
      </div>
    </section>
  );
}
