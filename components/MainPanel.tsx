import type { ReactNode } from "react";
import Reveal from "./Reveal";

type Tool = { ckt: number; name: string; group: string; icon: ReactNode };

const s = {
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  fill: "none",
};

const tools: Tool[] = [
  { ckt: 1, name: "Simple Offset", group: "Bends", icon: <path d="M4 18 L9 18 L15 6 L20 6" {...s} /> },
  { ckt: 2, name: "3-Point Saddle", group: "Bends", icon: <path d="M3 18 L8 18 L12 8 L16 18 L21 18" {...s} /> },
  { ckt: 3, name: "4-Point Saddle", group: "Bends", icon: <path d="M3 18 L7 18 L9 9 L15 9 L17 18 L21 18" {...s} /> },
  {
    ckt: 4,
    name: "Rolling Offset",
    group: "Bends",
    icon: (
      <>
        <path d="M4 17 L9 17 L15 7 L20 7" {...s} />
        <path d="M4 20 L11 20 L17 10 L20 10" {...s} opacity={0.5} />
      </>
    ),
  },
  { ckt: 5, name: "Stub 90", group: "Bends", icon: <path d="M6 4 L6 14 Q6 18 10 18 L19 18" {...s} /> },
  {
    ckt: 6,
    name: "Box Fill",
    group: "Electrical",
    icon: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="2" {...s} />
        <path d="M9 9 H15 M9 13 H15 M9 17 H13" {...s} />
      </>
    ),
  },
  { ckt: 7, name: "Voltage Drop", group: "Electrical", icon: <path d="M13 3 L5 13 L11 13 L9 21 L19 9 L13 9 Z" {...s} /> },
  {
    ckt: 8,
    name: "NEC Reference",
    group: "Electrical",
    icon: (
      <>
        <path d="M6 4 H16 L19 7 V20 H6 Z" {...s} />
        <path d="M9 11 H15 M9 15 H15" {...s} />
      </>
    ),
  },
  {
    ckt: 9,
    name: "Calculator",
    group: "Electrical",
    icon: (
      <>
        <rect x="5" y="3" width="14" height="18" rx="2" {...s} />
        <path d="M8 7 H16 M8 12 H8.01 M12 12 H12.01 M16 12 H16.01 M8 16 H8.01 M12 16 H12.01 M16 16 H16.01" {...s} />
      </>
    ),
  },
];

// Real load-centers number odd circuits down the left, even down the right.
const leftCol = tools.filter((t) => t.ckt % 2 === 1);
const rightCol = tools.filter((t) => t.ckt % 2 === 0);

function Toggle({ on = true }: { on?: boolean }) {
  return (
    <span className="flex h-8 w-4 shrink-0 flex-col rounded-[4px] border border-white/15 bg-black/40 p-[2px] shadow-inner">
      <span
        className={`h-[14px] w-full rounded-[2px] ${
          on
            ? "bg-gradient-to-b from-[var(--color-orange-soft)] to-[var(--color-orange)] shadow-[0_0_6px_var(--color-orange)]"
            : "mt-auto bg-white/15"
        }`}
      />
    </span>
  );
}

function Breaker({ tool }: { tool: Tool }) {
  return (
    <div className="group relative flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2.5 transition-colors hover:border-[var(--color-orange)]/50 hover:bg-white/[0.07]">
      <Toggle />
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-[var(--color-orange)]/10 text-[var(--color-orange-soft)] ring-1 ring-[var(--color-orange)]/25 transition-colors group-hover:bg-[var(--color-orange)]/15">
        <svg width="20" height="20" viewBox="0 0 24 24">
          {tool.icon}
        </svg>
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-[0.6rem] font-bold uppercase tracking-[0.14em] text-white/35">
          CKT {tool.ckt} · {tool.group}
        </span>
        <span className="block text-sm font-bold leading-tight text-white">
          {tool.name}
        </span>
      </span>
      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-orange)] shadow-[0_0_8px_var(--color-orange)]" />
    </div>
  );
}

function SpareBreaker() {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-dashed border-white/10 bg-white/[0.015] px-3 py-2.5 opacity-60">
      <Toggle on={false} />
      <span className="flex-1 text-sm font-bold uppercase tracking-[0.14em] text-white/30">
        CKT 10 · Spare
      </span>
    </div>
  );
}

function Screw({ className }: { className: string }) {
  return (
    <span
      className={`absolute h-2.5 w-2.5 rounded-full bg-gradient-to-br from-white/45 to-white/5 ring-1 ring-black/50 ${className}`}
    >
      <span className="absolute left-1/2 top-1/2 h-px w-2 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-black/40" />
    </span>
  );
}

export default function MainPanel() {
  // Horizontal position of the conduit entry — matches the conduit's drop
  // point (≈13% on mobile, ≈82% on desktop) so the run connects cleanly.
  return (
    <section id="tools" className="relative bg-[var(--color-surface-2)] px-6 pb-24 pt-0 sm:pb-28">
      <div className="relative mx-auto max-w-6xl pt-16">
        {/* Conduit entry: a final straight run + coupling fitting into a
            knockout on the panel. Aligns with the conduit drop above. */}
        <div
          aria-hidden
          className="absolute top-0 left-[9%] z-20 flex -translate-x-1/2 flex-col items-center md:left-[82%]"
        >
          <div className="h-11 w-3.5 bg-gradient-to-b from-[var(--color-orange-soft)] to-[var(--color-orange)] shadow-[var(--shadow-glow)]" />
          {/* metal coupling / connector */}
          <div className="relative h-5 w-7 rounded-[3px] bg-gradient-to-b from-[#9aa3af] via-[#6b7280] to-[#3a414f] shadow-md ring-1 ring-black/50">
            <span className="absolute inset-x-1 top-[5px] h-px bg-black/30" />
            <span className="absolute inset-x-1 bottom-[5px] h-px bg-black/30" />
          </div>
        </div>

        <Reveal>
          <div className="relative overflow-hidden rounded-[26px] border border-white/10 bg-gradient-to-b from-[#222a39] via-[var(--color-dark)] to-[var(--color-dark-2)] p-5 shadow-[0_44px_90px_-34px_rgba(17,24,39,0.75)] ring-1 ring-black/40 sm:p-8">
            {/* metal sheen + blueprint texture (separate layers so the dark
                gradient isn't overridden — see blueprint-dark note) */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white/[0.06] to-transparent" />
            <div className="blueprint-dark pointer-events-none absolute inset-0 opacity-60" />
            <div className="glow left-1/2 top-0 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/3 bg-[var(--color-orange)]/18" />

            {/* Panel door outline + corner screws */}
            <div className="pointer-events-none absolute inset-3 rounded-[18px] border border-white/[0.08] sm:inset-4" />
            <Screw className="left-5 top-5 sm:left-6 sm:top-6" />
            <Screw className="right-5 top-5 sm:right-6 sm:top-6" />
            <Screw className="bottom-5 left-5 sm:bottom-6 sm:left-6" />
            <Screw className="bottom-5 right-5 sm:bottom-6 sm:right-6" />

            {/* Conduit-entry knockout straddling the top edge */}
            <span
              aria-hidden
              className="absolute -top-px left-[9%] z-10 flex h-7 w-7 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white/15 bg-[var(--color-dark-2)] md:left-[82%]"
            >
              <span className="h-2 w-2 rounded-full bg-[var(--color-orange)] shadow-[0_0_8px_var(--color-orange)]" />
            </span>

            <div className="relative z-10">
              {/* Panel schedule header */}
              <div className="flex flex-col gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="mb-1.5 text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-orange-soft)]">
                    Main panel
                  </p>
                  <h2 className="text-2xl font-black tracking-tight text-white sm:text-4xl">
                    BendLogic tool board
                  </h2>
                </div>
                <span className="inline-flex items-center gap-2 self-start rounded-md border border-white/12 bg-white/[0.06] px-3 py-2 text-xs font-bold uppercase tracking-wider text-white/70 sm:self-auto">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-orange)] shadow-[0_0_8px_var(--color-orange)]" />
                  9 circuits · live
                </span>
              </div>

              {/* Main breaker (the incoming feed) */}
              <div className="mt-5 flex items-center gap-3 rounded-lg border border-[var(--color-orange)]/30 bg-[var(--color-orange)]/[0.08] px-4 py-3">
                <Toggle />
                <span className="flex-1">
                  <span className="block text-[0.6rem] font-bold uppercase tracking-[0.16em] text-white/40">
                    Main · feed
                  </span>
                  <span className="block text-sm font-black tracking-tight text-white sm:text-base">
                    BendLogic Toolboard
                  </span>
                </span>
                <span className="rounded border border-white/15 bg-black/30 px-2 py-1 text-[0.65rem] font-bold tracking-wider text-white/70">
                  200A
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-orange)] shadow-[0_0_8px_var(--color-orange)]" />
              </div>

              {/* Breaker rows around the bus bar */}
              <div className="mt-4 flex flex-col gap-3 md:flex-row md:gap-4">
                <div className="flex-1 space-y-3">
                  {leftCol.map((t) => (
                    <Breaker key={t.ckt} tool={t} />
                  ))}
                </div>

                {/* center bus bar */}
                <div
                  aria-hidden
                  className="hidden w-2 shrink-0 self-stretch rounded-full bg-gradient-to-b from-white/25 via-white/10 to-white/20 shadow-[inset_0_0_4px_rgba(0,0,0,0.5)] md:block"
                />

                <div className="flex-1 space-y-3">
                  {rightCol.map((t) => (
                    <Breaker key={t.ckt} tool={t} />
                  ))}
                  <SpareBreaker />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
