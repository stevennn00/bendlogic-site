import Reveal from "./Reveal";
import StoreBadges from "./StoreBadges";

export default function CTA() {
  return (
    <section className="bg-[var(--color-surface-2)] px-6 py-24 sm:py-28">
      <Reveal>
        <div
          id="download"
          className="relative mx-auto max-w-5xl scroll-mt-24 overflow-hidden rounded-[28px] border border-[var(--color-line)] bg-[var(--color-surface)] px-8 py-16 text-center shadow-[var(--shadow-card)] sm:px-16"
        >
          {/* warm tint sweep */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[var(--color-orange-tint)] to-transparent" />
          <div className="glow left-1/2 top-0 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/3 bg-[var(--color-orange)]/25" />

          <div className="relative z-10">
            <h2 className="mx-auto max-w-2xl text-3xl font-black tracking-tight text-[var(--color-ink)] sm:text-5xl">
              Download Bend Logic
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-lg text-[var(--color-muted)]">
              Available on the App Store and Google Play.
            </p>
            <StoreBadges className="mt-9 justify-center" />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
