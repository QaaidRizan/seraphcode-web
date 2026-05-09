import Image from "next/image";

export function BlogHero() {
  return (
    <section className="relative border-b border-border py-16 md:py-20 cyber-grid-bg">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <h1 className="font-heading text-4xl font-black uppercase tracking-wide text-foreground md:text-5xl">
            Our Blog
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Insights, trends, and expert advice on IT services, software
            development, and technology from Australia&apos;s leading IT company.
          </p>
        </div>
        <div className="cyber-chamfer overflow-hidden border border-border">
          <Image
            src="/assets/1213.jpg"
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
