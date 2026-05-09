export function SectionLabel({ text }: { text: string }) {
  return (
    <p className="font-label mb-3 text-xs font-medium uppercase tracking-[0.28em] text-accent">
      {text}
    </p>
  );
}
