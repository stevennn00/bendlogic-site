const benefits = [
  { label: "Offline", title: "No signal required", copy: "Run calculations locally when service drops out on site." },
  { label: "Visual", title: "See the bend", copy: "Check a layout before you mark or bend the pipe." },
  { label: "Practical", title: "More than bends", copy: "Reach box fill, voltage drop, conduit fill, and NEC reference tools from the same app." },
];

export default function Workflow() {
  return (
    <section id="field" className="section-pad scroll-mt-20">
      <div className="container">
        <div className="grid gap-5 lg:grid-cols-[.75fr_1.25fr] lg:gap-20"><p className="eyebrow">05 / On the job</p><h2 className="section-title max-w-[750px]">Made for the moment you need an answer.</h2></div>
        <div className="mt-12 grid border-t-2 border-[var(--color-ink)] md:grid-cols-3">
          {benefits.map((benefit) => <div key={benefit.label} className="border-b border-[var(--color-line)] py-7 md:border-b-0 md:border-r md:px-7 md:first:pl-0 md:last:border-r-0 md:last:pr-0"><p className="technical-label text-[var(--color-accent)]">{benefit.label}</p><h3 className="mt-6 font-[var(--font-display)] text-[2rem] font-bold uppercase leading-none">{benefit.title}</h3><p className="mt-3 max-w-[320px] leading-relaxed text-[var(--color-muted)]">{benefit.copy}</p></div>)}
        </div>
      </div>
    </section>
  );
}
