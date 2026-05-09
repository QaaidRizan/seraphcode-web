export function SectionHeading({
  text,
  highlight,
}: {
  text: string;
  highlight?: string;
}) {
  if (!highlight) {
    return (
      <h2 className="font-heading mb-4 max-w-4xl text-3xl font-bold uppercase tracking-wide text-foreground md:text-4xl lg:text-5xl">
        {text}
      </h2>
    );
  }

  const idx = text.indexOf(highlight);
  if (idx === -1) {
    return (
      <h2 className="font-heading mb-4 max-w-4xl text-3xl font-bold uppercase tracking-wide text-foreground md:text-4xl lg:text-5xl">
        {text}
      </h2>
    );
  }

  const before = text.slice(0, idx);
  const after = text.slice(idx + highlight.length);

  return (
    <h2 className="font-heading mb-4 max-w-4xl text-3xl font-bold uppercase tracking-wide text-foreground md:text-4xl lg:text-5xl">
      {before}
      <span className="text-accent drop-shadow-[0_0_14px_rgba(0,245,212,0.5)]">
        {highlight}
      </span>
      {after}
    </h2>
  );
}
