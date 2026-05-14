export function Badge({ text, emoji }: { text: string; emoji?: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 border border-border bg-[color:var(--surface-muted-40)] px-2.5 py-1 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
      {emoji ? <span aria-hidden>{emoji}</span> : null}
      {text}
    </span>
  );
}
