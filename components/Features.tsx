const reasons = [
  { number: "01", title: "Know your marks", copy: "Clear visual bend layouts show distances and angles before the first bend." },
  { number: "02", title: "Account for the bender", copy: "Take-up, shrink, and deduct are handled across conduit types and sizes." },
  { number: "03", title: "Keep moving", copy: "Calculations run locally, so the tool is ready even when the jobsite has no signal." },
];

export default function Features() {
  return (
    <section className="section-pad border-y border-[var(--color-line)]">
      <div className="container">
        <div className="grid gap-6 lg:grid-cols-[.8fr_1.2fr] lg:gap-20"><p className="eyebrow">02 / Why BendLogic</p><h2 className="section-title max-w-[720px]">The details matter when the pipe is in your hands.</h2></div>
        <div className="mt-12 grid border-t border-[var(--color-ink)] md:grid-cols-3">
          {reasons.map((item) => <div key={item.number} className="border-b border-[var(--color-line)] py-7 md:border-b-0 md:border-r md:px-6 md:first:pl-0 md:last:border-r-0 md:last:pr-0">
            <span className="technical-label text-[var(--color-accent)]">{item.number} / Field note</span>
            <h3 className="mt-7 font-[var(--font-display)] text-[2rem] font-bold uppercase leading-none">{item.title}</h3>
            <p className="mt-3 max-w-[320px] leading-relaxed text-[var(--color-muted)]">{item.copy}</p>
          </div>)}
        </div>
      </div>
    </section>
  );
}
