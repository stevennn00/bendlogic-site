import Reveal from "./Reveal";

const tools = [
  "Offsets",
  "3-Point Saddles",
  "4-Point Saddles",
  "Rolling Offsets",
  "Kicks",
  "Rack Layouts",
  "Box Fill",
  "Voltage Drop",
  "Conduit Fill",
  "Take-Up & Shrink",
  "Bend Deducts",
  "NEC Reference",
];

export default function Tools() {
  return (
    <section
      id="tools"
      className="bg-grid relative overflow-hidden border-y border-white/5 py-28"
    >
      <div className="glow left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 bg-[var(--color-orange)]/15" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-orange)]">
              One app, the whole bag
            </p>
            <h2 className="mx-auto max-w-2xl text-3xl font-black tracking-tight sm:text-5xl">
              Every calculation the field throws at you.
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 flex flex-wrap justify-center gap-3">
          {tools.map((tool, i) => (
            <Reveal key={tool} delay={i * 0.04} y={16}>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[var(--color-surface)] px-5 py-2.5 text-sm font-medium text-white/90 transition-colors hover:border-[var(--color-orange)]/50 hover:text-white">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-orange)]" />
                {tool}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
