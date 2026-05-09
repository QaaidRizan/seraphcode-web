export function SecurityFrameworkSection() {
  const list = [
    "Risk-based security management",
    "Controlled access to systems and data",
    "Continuous monitoring and improvement",
    "Documented security policies and procedures",
  ];

  return (
    <section className="cyber-surface-deep border-y border-border py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-2xl font-bold uppercase tracking-wide text-foreground">
          Information Security Framework
        </h2>
        <p className="mt-4 text-muted-foreground">
          Our systems follow ISO/IEC 27001-aligned security practices including:
        </p>
        <ul className="mt-6 space-y-3 text-muted-foreground">
          {list.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="font-mono text-accent">&gt;</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
