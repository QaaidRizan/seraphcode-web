import { DataStorageCards } from "@/components/shared/DataStorageCards";

export function DataStorageSection() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-2xl font-bold uppercase tracking-wide text-foreground">
          Data Storage &amp; Privacy
        </h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Your data is stored securely in Australia, protected by Australian
          law
        </p>
        <div className="mt-10">
          <DataStorageCards />
        </div>
      </div>
    </section>
  );
}
