/** Static URL `public/svgs/sc_logo.svg`. `<img>` keeps filters / embedded raster reliable vs Next/Image. */
const LOGO_SRC = "/svgs/sc_logo.svg";

export function SiteLogo({
  className = "",
  priority = false,
}: {
  className?: string;
  /** LCP hint for header */
  priority?: boolean;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element -- intentional for complex exported SVG
    <img
      src={LOGO_SRC}
      alt="SeraphCode"
      width={375}
      height={375}
      decoding={priority ? "sync" : "async"}
      fetchPriority={priority ? "high" : "auto"}
      className={["block", className].filter(Boolean).join(" ")}
    />
  );
}
