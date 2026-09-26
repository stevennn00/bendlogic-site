import Image from "next/image";
import StoreBadges from "./StoreBadges";

export default function Hero() {
  return (
    <section id="top" className="grid-paper relative scroll-mt-20 border-b border-[var(--color-line)]">
      <div className="container grid items-start gap-12 py-14 md:py-20 lg:grid-cols-[.93fr_1.07fr] lg:gap-16 lg:py-20">
        <div>
          <p className="eyebrow">Field guide / for electricians</p>
          <h1 className="mt-7 max-w-[660px] font-[var(--font-display)] text-[clamp(3.5rem,7.4vw,5.9rem)] font-bold uppercase leading-[.88] tracking-[-.025em]">
            Bend conduit.<br /><span className="text-[var(--color-accent)]">Leave the math</span><br />to BendLogic.
          </h1>
          <p className="body-lead mt-7 max-w-[520px]">Get the marks, angles, and bend order before you pick up the bender. Offsets, saddles, electrical calculations, and more—ready for the jobsite.</p>
          <div className="mt-8 border-t border-[var(--color-ink)] pt-5">
            <p className="technical-label mb-3 text-[var(--color-muted)]">Available on iPhone and Android</p>
            <StoreBadges />
          </div>
          <p className="technical-label mt-6 text-[var(--color-muted)]">No account required <span className="mx-2 text-[var(--color-accent)]">/</span> Works offline</p>
        </div>
        <div className="min-w-0">
          <div className="dark-surface relative overflow-hidden border border-[var(--color-charcoal)] bg-[var(--color-charcoal)] p-3 sm:p-5">
            <div className="pointer-events-none absolute inset-x-0 top-0 flex items-center justify-between border-b border-white/20 px-5 py-3 text-[var(--color-on-dark-muted)] technical-label">
              <span>BL / Application preview</span><span>01—06</span>
            </div>
            <Image src="/hero-mockup.png" alt="Six real BendLogic app screens showing bending layouts, box fill, voltage drop, and electrical reference tools" width={1122} height={1402} priority sizes="(max-width: 1024px) 100vw, 52vw" className="mx-auto mt-8 block h-auto w-full max-w-[570px]" />
          </div>
          <div className="flex flex-wrap items-start justify-between gap-2 border-x border-b border-[var(--color-line)] bg-[var(--color-sheet)] px-4 py-3 text-[var(--color-muted)] technical-label">
            <span>Actual BendLogic screens</span><span>Field ready / iOS + Android</span>
          </div>
        </div>
      </div>
    </section>
  );
}
