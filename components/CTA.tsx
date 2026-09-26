import StoreBadges from "./StoreBadges";

export default function CTA() {
  return (
    <section id="download" className="scroll-mt-20 border-y border-[var(--color-line)] bg-[var(--color-accent-soft)]">
      <div className="container grid gap-8 py-16 md:grid-cols-[1fr_auto] md:items-end md:py-20">
        <div><p className="eyebrow">06 / Ready for the next run</p><h2 className="section-title mt-5 max-w-[720px]">Put the field guide in your pocket.</h2><p className="body-lead mt-5 max-w-[550px]">Download BendLogic for iPhone or Android and bring the calculations to the pipe.</p></div>
        <div className="md:pb-2"><p className="technical-label mb-3 text-[var(--color-muted)]">Available now</p><StoreBadges /></div>
      </div>
    </section>
  );
}
