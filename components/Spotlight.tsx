import Image from "next/image";
import StoreBadges from "./StoreBadges";

export default function Spotlight() {
  return (
    <section className="dark-surface overflow-hidden bg-[var(--color-charcoal)] text-[var(--color-on-dark)]">
      <div className="container grid gap-10 py-16 md:py-20 lg:grid-cols-[.84fr_1.16fr] lg:items-center lg:gap-20">
        <div>
          <p className="eyebrow !text-[#ff9b68]">04 / In the application</p>
          <h2 className="section-title mt-5">From input to bend order.</h2>
          <p className="mt-5 max-w-[470px] text-lg leading-relaxed text-[var(--color-on-dark-muted)]">The actual BendLogic interface brings measurements, bend layout, and field steps together on one screen.</p>
          <ol className="mt-9 border-t border-white/30">
            {["Choose the bend and your conduit", "Read the calculated marks", "Check the visual layout and field steps"].map((step, i) => <li key={step} className="flex gap-6 border-b border-white/30 py-4"><span className="technical-label pt-1 text-[#ff9b68]">0{i + 1}</span><span className="font-semibold">{step}</span></li>)}
          </ol>
          <div className="mt-9"><p className="technical-label mb-3 text-[var(--color-on-dark-muted)]">Take it into the field</p><StoreBadges /></div>
        </div>
        <div className="relative min-w-0 border border-white/20 bg-[var(--color-steel)] p-3 sm:p-5">
          <div className="flex flex-col gap-1 border-b border-white/20 pb-3 text-[var(--color-on-dark-muted)] technical-label sm:flex-row sm:items-center sm:justify-between"><span>Screen detail / 3-point saddle</span><span>Actual app UI</span></div>
          <div className="relative mx-auto mt-4 aspect-[1.1] w-full max-w-[570px] overflow-hidden">
            <Image src="/hero-mockup.png" alt="Close view of the actual BendLogic 3-point saddle calculation screen" fill sizes="(max-width: 1024px) 100vw, 48vw" className="scale-[1.5] object-cover object-[50%_18%]" />
          </div>
          <p className="mt-3 border-t border-white/20 pt-3 text-sm text-[var(--color-on-dark-muted)]">Marks, angles, and sequence are shown alongside the bend diagram.</p>
        </div>
      </div>
    </section>
  );
}
