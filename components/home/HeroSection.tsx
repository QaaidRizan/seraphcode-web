import { Button } from "@/components/shared/Button";
import { SectionLabel } from "@/components/shared/SectionLabel";

export function HeroSection() {
  return (
    <section className="home-hero relative -mb-6 overflow-hidden border-b border-border cyber-grid-bg z-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_18%,rgba(0,245,212,0.14),transparent_55%),radial-gradient(ellipse_at_72%_58%,rgba(165,108,255,0.11),transparent_48%),radial-gradient(ellipse_at_50%_100%,rgba(111,231,255,0.07),transparent_55%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 md:gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
          <div>
            <SectionLabel text="Development · AI · Enterprise · Cloud" />
            <h1 className="font-heading cyber-glitch cyber-glitch-animate cyber-glitch-rgb max-w-3xl text-5xl font-black uppercase leading-[1.05] tracking-widest text-foreground md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
              We Build, Automate &amp; Scale Your Business
            </h1>
            <p className="terminal-cursor mt-4 max-w-xl text-base leading-relaxed tracking-wide text-muted-foreground md:mt-5 md:text-lg lg:mt-4">
              From custom web &amp; mobile apps to AI-powered automation and
              enterprise solutions — we deliver end-to-end technology solutions
              that drive real growth.
            </p>
            <div className="mt-6 flex flex-col gap-4 sm:mt-7 sm:flex-row sm:items-center lg:mt-6">
              <Button variant="glitch" href="/contact">
                Book a Free Call
              </Button>
              <Button variant="secondary" href="/services">
                Explore Services
              </Button>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="cyber-chamfer holographic-panel relative p-5 lg:p-6">
              <span
                className="holographic-panel__corner holographic-panel__corner--tl"
                aria-hidden
              />
              <span
                className="holographic-panel__corner holographic-panel__corner--tr"
                aria-hidden
              />
              <span
                className="holographic-panel__corner holographic-panel__corner--br"
                aria-hidden
              />
              <span
                className="holographic-panel__corner holographic-panel__corner--bl"
                aria-hidden
              />
              <div className="flex items-center justify-between border-b border-border/80 pb-3 font-mono text-[10px] uppercase tracking-[0.35em] text-accent-tertiary">
                <span>HUD // STATUS</span>
                <span className="text-accent drop-shadow-[0_0_12px_rgba(0,245,212,0.5)]">
                  ONLINE
                </span>
              </div>
              <dl className="mt-4 space-y-3 font-mono text-xs text-muted-foreground">
                <div className="flex justify-between gap-4">
                  <dt className="text-accent">&gt; REGION</dt>
                  <dd>MEL · AU</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-accent">&gt; STACK</dt>
                  <dd>NEXT · RN · JAVA</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-accent">&gt; FOCUS</dt>
                  <dd>COMPLIANCE-FIRST</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-accent">&gt; DATA</dt>
                  <dd>AU SOVEREIGN</dd>
                </div>
              </dl>
              <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-accent to-transparent opacity-80" />
              <p className="mt-4 font-mono text-[11px] leading-relaxed text-muted-foreground">
                <span className="text-accent">$</span> seraphcode deploy
                --target production --region au-mel-1
                <span className="text-accent opacity-70"> █</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
