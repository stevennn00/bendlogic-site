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
      className="blueprint-dark relative overflow-hidden bg-[var(--color-dark)] py-24 text-white sm:py-28"
    >
      <div className="glow left-1/2 top-1/2 h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 bg-[var(--color-orange)]/18" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-orange-soft)]">
              One app, the whole bag
            </p>
            <h2 className="mx-auto max-w-2xl text-3xl font-black tracking-tight sm:text-5xl">
              Every calculation the field throws at you.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-white/60">
              From rough-in to trim, the math that used to live in a worn-out
              notebook — now in your pocket.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 flex flex-wrap justify-center gap-3">
          {tools.map((tool, i) => (
            <Reveal key={tool} delay={i * 0.04} y={16}>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.06] px-5 py-2.5 text-sm font-medium text-white/90 backdrop-blur-sm transition-colors hover:border-[var(--color-orange)]/60 hover:bg-white/10 hover:text-white">
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
