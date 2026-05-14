import { SiteLogo } from "@/components/layout/SiteLogo";

type BrandLogoHomeLockupProps = {
  /** Set true in the sticky header for LCP */
  priority?: boolean;
  /** Navbar: bright white “stage” wash behind the mark */
  spotlight?: "accent" | "white";
};

/**
 * Shared home logo (navbar + footer). White look comes from `public/svgs/sc_logo.svg`
 * internal `feColorMatrix` filters — avoid stacking CSS `invert` on `<img>` (Safari blur).
 */
export function BrandLogoHomeLockup({
  priority = false,
  spotlight = "accent",
}: BrandLogoHomeLockupProps) {
  return (
    <span className="relative inline-flex h-14 shrink-0 items-center overflow-visible sm:h-16 md:h-[4.25rem]">
      {spotlight === "white" ? (
        <>
          <span
            className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[4.75rem] w-[7rem] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_46%_44%_at_50%_48%,#ffffff_0%,rgba(255,255,255,0.88)_12%,rgba(255,255,255,0.42)_28%,rgba(255,255,255,0.1)_42%,transparent_56%)] blur-md"
            aria-hidden
          />
          <span
            className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-16 w-20 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle_at_50%_44%,#ffffff_0%,rgba(255,255,255,0.78)_18%,transparent_46%)] blur-sm"
            aria-hidden
          />
        </>
      ) : (
        <span
          className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[3.75rem] w-[6rem] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(0,245,212,0.45)_0%,rgba(0,245,212,0.14)_38%,transparent_58%)] blur-md"
          aria-hidden
        />
      )}
      <SiteLogo
        priority={priority}
        className="navbar-logo relative z-[1] h-full w-auto max-h-full max-w-[10.5rem] object-contain object-left sm:max-w-[12rem] md:max-w-[13rem]"
      />
    </span>
  );
}
