import { SiteLogo } from "@/components/layout/SiteLogo";

type BrandLogoHomeLockupProps = {
  /** Set true in the sticky header for LCP */
  priority?: boolean;
};

/**
 * Shared home logo (navbar + footer). White look comes from `public/svgs/sc_logo.svg`
 * internal `feColorMatrix` filters — avoid stacking CSS `invert` on `<img>` (Safari blur).
 */
export function BrandLogoHomeLockup({ priority = false }: BrandLogoHomeLockupProps) {
  return (
    <span className="relative inline-flex h-14 shrink-0 items-center overflow-visible sm:h-16 md:h-[4.25rem]">
      <span
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[4.5rem] w-[7.5rem] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(0,245,212,0.4)_0%,rgba(0,245,212,0.12)_48%,transparent_72%)] blur-md"
        aria-hidden
      />
      <SiteLogo
        priority={priority}
        className="navbar-logo relative z-[1] h-full w-auto max-h-full max-w-[10.5rem] object-contain object-left sm:max-w-[12rem] md:max-w-[13rem]"
      />
    </span>
  );
}
