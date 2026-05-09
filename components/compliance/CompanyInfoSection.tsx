import { SITE } from "@/lib/constants";

const rows = [
  { label: "Company Name", value: "Seraph Code PTY LTD" },
  { label: "Governing Law", value: "Victoria, Australia" },
  { label: "ACN", value: SITE.acn },
  { label: "ABN", value: SITE.abn },
];

export function CompanyInfoSection() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-2xl font-bold uppercase tracking-wide text-foreground">
          🇦🇺 Australian Company
        </h2>
        <div className="mt-8 overflow-hidden cyber-chamfer border border-border">
          <table className="w-full text-left text-sm">
            <tbody>
              {rows.map((r) => (
                <tr key={r.label} className="border-b border-border last:border-0">
                  <th className="w-1/3 bg-card/40 px-4 py-3 font-mono text-xs uppercase tracking-widest text-accent">
                    {r.label}
                  </th>
                  <td className="px-4 py-3 text-muted-foreground">{r.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
