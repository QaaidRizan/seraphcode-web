const cards: { title: string; points: string }[] = [
  {
    title: "All Data Stored in Australia",
    points:
      "Stored exclusively in Australian data centres; subject to APPs and the Privacy Act 1988; no transfer outside Australia without explicit consent.",
  },
  {
    title: "Australian Data Centres",
    points:
      "Data remains within Australian jurisdiction; aligned with APPs; no transfer without consent.",
  },
  {
    title: "Data Sovereignty",
    points:
      "Australian legal jurisdiction applies; protected by the Privacy Act; no foreign government access by default.",
  },
  {
    title: "Security & Encryption",
    points:
      "TLS/SSL in transit; encryption at rest; role-based access; regular security reviews.",
  },
  {
    title: "Backup & Recovery",
    points:
      "Automated daily backups in Australian data centres; disaster recovery planning; retention aligned to policy.",
  },
  {
    title: "Compliance & Auditing",
    points:
      "Audit-ready logs; time-stamped records; immutable trails where required; WHS and Fair Work alignment.",
  },
  {
    title: "No International Transfers",
    points:
      "No automatic replication overseas; explicit consent required; transparent handling and disclosure of location.",
  },
];

export function DataStorageCards({ count }: { count?: number }) {
  const list =
    typeof count === "number"
      ? count >= cards.length
        ? cards
        : cards.slice(cards.length - count)
      : cards;
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {list.map((c) => (
        <div
          key={c.title}
          className="cyber-chamfer border border-border bg-card p-5 transition-all hover:border-accent hover:shadow-[var(--box-shadow-neon-sm)]"
        >
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-accent">
            {c.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {c.points}
          </p>
        </div>
      ))}
    </div>
  );
}
