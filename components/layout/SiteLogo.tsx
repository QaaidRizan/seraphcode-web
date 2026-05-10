/** Served from `public/assets/sc_logo.svg` — use <img> so filters / embedded raster work; Next/Image often breaks these. */
const LOGO_SRC = "/assets/sc_logo.svg";

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
      width={140}
      height={140}
      decoding={priority ? "sync" : "async"}
      fetchPriority={priority ? "high" : "auto"}
      className={className}
    />
  );
}
