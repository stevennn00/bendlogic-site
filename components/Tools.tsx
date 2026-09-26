import Link from "next/link";

const guideLinks: Record<string, string> = {
  Offsets: "/guides/conduit-offset-calculator",
  "Rolling Offsets": "/guides/rolling-offset-conduit",
  "3-Point Saddles": "/guides/3-point-saddle-bend",
  "4-Point Saddles": "/guides/4-point-saddle-bend",
};

const groups = [
  { number: "01", title: "Offsets & layouts", description: "Move conduit around obstacles and keep runs aligned.", tools: ["Offsets", "Rolling Offsets", "Kicks", "Rack Layouts"] },
  { number: "02", title: "Saddles", description: "Plan your marks around what is in the way.", tools: ["3-Point Saddles", "4-Point Saddles"] },
  { number: "03", title: "Bender math", description: "Keep the adjustments in the calculation.", tools: ["Take-Up & Shrink", "Bend Deducts"] },
  { number: "04", title: "Electrical field tools", description: "Reference calculations for the rest of the install.", tools: ["Box Fill", "Voltage Drop", "Conduit Fill", "NEC Reference"] },
];

export default function Tools() {
  return (
    <section id="tools" className="section-pad scroll-mt-20 bg-[var(--color-sheet)]">
      <div className="container">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="eyebrow">03 / Calculator index</p><h2 className="section-title mt-5 max-w-[640px]">The right tool for the next bend.</h2></div><p className="body-lead max-w-[350px]">Twelve field tools, organized by the work in front of you.</p></div>
        <div className="mt-12 grid border-t-2 border-[var(--color-ink)] lg:grid-cols-2 lg:gap-x-12">
          {groups.map((group) => <article key={group.number} className="grid gap-4 border-b border-[var(--color-line)] py-8 sm:grid-cols-[64px_1fr]">
            <span className="technical-label pt-1 text-[var(--color-accent)]">{group.number} /</span>
            <div><h3 className="font-[var(--font-display)] text-[2rem] font-bold uppercase leading-none">{group.title}</h3><p className="mt-2 max-w-[420px] text-sm leading-relaxed text-[var(--color-muted)]">{group.description}</p>
              <ul className="mt-6 grid gap-2 sm:grid-cols-2">{group.tools.map((tool) => <li key={tool} className="flex min-h-10 items-start gap-2 border-t border-[var(--color-line)] pt-2 text-sm font-semibold"><span aria-hidden className="text-[var(--color-accent)]">↳</span>{guideLinks[tool] ? <Link href={guideLinks[tool]} className="text-[var(--color-accent)] underline decoration-[var(--color-line)] hover:decoration-current">{tool}</Link> : tool}</li>)}</ul>
            </div>
          </article>)}
        </div>
      </div>
    </section>
  );
}
