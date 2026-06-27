import Reveal from "./Reveal";
import StoreBadges from "./StoreBadges";

export default function CTA() {
  return (
    <section id="download" className="mx-auto max-w-6xl px-6 py-28">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-[var(--color-surface-2)] to-[var(--color-surface)] px-8 py-16 text-center sm:px-16">
          <div className="glow left-1/2 top-0 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 bg-[var(--color-orange)]/40" />
          <div className="relative z-10">
            <h2 className="mx-auto max-w-2xl text-3xl font-black tracking-tight sm:text-5xl">
              Put the math in your pocket.
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-lg text-[var(--color-dim)]">
              Download BendLogic and spend less time figuring marks — and more
              time bending pipe.
            </p>
            <StoreBadges className="mt-9 justify-center" />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
