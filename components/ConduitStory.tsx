"use client";

import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import usePrefersReducedMotion from "./usePrefersReducedMotion";

type Pt = { x: number; y: number };

type CardPlace = { leftPct: number; topPct: number; widthPct: number };

type JBoxData = {
  tag: string;
  bend: string;
  title: string;
  body: string;
};

type Layout = {
  pts: Pt[];
  total: number;
  anchorFracs: number[];
  cards: CardPlace[];
  obstruction: { x: number; y: number; w: number; h: number } | null;
  labels: { x: number; y: number; text: string }[];
};

const JBOXES: JBoxData[] = [
  {
    tag: "J-BOX 01",
    bend: "Straight run",
    title: "Field-ready bend layouts",
    body: "Clear marks, bend order, spacing, shrink, and field steps.",
  },
  {
    tag: "J-BOX 02",
    bend: "45° offset",
    title: "Offsets made clear",
    body: "Simple offsets, parallel offsets, rolling offsets, and matching center offsets.",
  },
  {
    tag: "J-BOX 03",
    bend: "3-point saddle",
    title: "Saddles and stub 90s",
    body: "3-point saddles, 4-point saddles, stub 90s, and mark-from-end guidance.",
  },
  {
    tag: "J-BOX 04",
    bend: "90° into panel",
    title: "Electrical tools built in",
    body: "Box fill, voltage drop, NEC reference, and a built-in field calculator.",
  },
];

/** Cumulative length at each vertex of a straight-segment polyline. */
function cumulative(pts: Pt[]) {
  const cum = [0];
  for (let i = 1; i < pts.length; i++) {
    const dx = pts[i].x - pts[i - 1].x;
    const dy = pts[i].y - pts[i - 1].y;
    cum.push(cum[i - 1] + Math.hypot(dx, dy));
  }
  return cum;
}

function toPath(pts: Pt[]) {
  return pts
    .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x.toFixed(1)} ${p.y.toFixed(1)}`)
    .join(" ");
}

/**
 * Desktop: a real EMT run that marches left → right and steps down.
 * Straight horizontal runs, 90° elbow drops, one 45° offset and one
 * 3-point saddle over an obstruction, then a 90° drop into the panel.
 */
function buildDesktop(w: number, h: number): Layout {
  const X = (f: number) => f * w;
  const Y = (f: number) => f * h;

  const yA = Y(0.12); // run 1
  const yB = Y(0.3); // run 2 (entry)
  const yB2 = Y(0.36); // run 2 (after offset)
  const yC = Y(0.58); // run 3 (saddle)
  const yD = Y(0.82); // drop into panel

  const offRise = yB2 - yB; // 45° offset → horizontal advance == vertical rise
  const sd = Y(0.045); // saddle apex depth (45° outer bends)
  const panelX = X(0.82); // where the run drops into the panel below

  const sBaseL = { x: X(0.64), y: yC };
  const sApex = { x: X(0.64) + sd, y: yC - sd };
  const sBaseR = { x: X(0.64) + 2 * sd, y: yC };

  const pts: Pt[] = [
    { x: X(0.1), y: 0 }, // 0  entry from hero (top-left)
    { x: X(0.1), y: yA }, // 1  90° elbow
    { x: X(0.38), y: yA }, // 2  RUN 1 end          (J1)
    { x: X(0.38), y: yB }, // 3  90° drop
    { x: X(0.5), y: yB }, // 4  run 2 a
    { x: X(0.5) + offRise, y: yB2 }, // 5  45° OFFSET end (J2)
    { x: X(0.62), y: yB2 }, // 6  run 2 b end
    { x: X(0.62), y: yC }, // 7  90° drop
    sBaseL, // 8  saddle base-left
    sApex, // 9  saddle apex (center bend)
    sBaseR, // 10 saddle base-right    (J3)
    { x: panelX, y: yC }, // 11 straight run toward panel
    { x: panelX, y: yD }, // 12 final drop (J4 activates here)
    { x: panelX, y: h }, // 13 terminate into panel below
  ];

  const cum = cumulative(pts);
  const total = cum[cum.length - 1];
  const anchorFracs = [2, 5, 10, 12].map((i) => cum[i] / total);

  const cards: CardPlace[] = [
    { leftPct: 4, topPct: 22, widthPct: 33 },
    { leftPct: 30, topPct: 47, widthPct: 35 },
    { leftPct: 5, topPct: 66, widthPct: 35 },
    { leftPct: 30, topPct: 86, widthPct: 35 },
  ];

  return {
    pts,
    total,
    anchorFracs,
    cards,
    obstruction: { x: sApex.x - sd * 0.6, y: yC, w: sd * 1.2, h: sd * 0.7 },
    labels: [
      { x: X(0.5) + offRise / 2, y: yB - Y(0.022), text: "45° OFFSET" },
      { x: sApex.x, y: yC - sd - Y(0.018), text: "3-PT SADDLE" },
    ],
  };
}

/**
 * Mobile: a simplified vertical conduit timeline — straight sections,
 * one offset jog, one saddle bump over an obstruction, then into the panel.
 * Cards stack to the right of the rail.
 */
function buildMobile(w: number, h: number): Layout {
  const X = (f: number) => f * w;
  const Y = (f: number) => f * h;
  const railX = X(0.07);

  // Kept small so the rail + saddle stay clear (left) of the cards.
  const offShift = Y(0.013); // 45° offset jog to the right
  const sd = Y(0.018); // saddle depth

  const railX2 = railX + offShift;
  const sTop = { x: railX2, y: Y(0.52) };
  const sApex = { x: railX2 + sd, y: Y(0.52) + sd };
  const sBot = { x: railX2, y: Y(0.52) + 2 * sd };

  const pts: Pt[] = [
    { x: railX, y: 0 }, // 0 entry
    { x: railX, y: Y(0.12) }, // 1 RUN 1            (J1)
    { x: railX, y: Y(0.28) }, // 2 offset start
    { x: railX2, y: Y(0.28) + offShift }, // 3 45° OFFSET end (J2)
    sTop, // 4 saddle top
    sApex, // 5 saddle apex
    sBot, // 6 saddle bottom        (J3)
    { x: railX2, y: Y(0.78) }, // 7 RUN into panel    (J4)
    { x: railX2, y: h }, // 8 exit
  ];

  const cum = cumulative(pts);
  const total = cum[cum.length - 1];
  const anchorFracs = [1, 3, 6, 7].map((i) => cum[i] / total);

  const cardLeft = 30;
  const cardW = 66;
  const cards: CardPlace[] = [
    { leftPct: cardLeft, topPct: 11, widthPct: cardW },
    { leftPct: cardLeft, topPct: 33, widthPct: cardW },
    { leftPct: cardLeft, topPct: 57, widthPct: cardW },
    { leftPct: cardLeft, topPct: 80, widthPct: cardW },
  ];

  return {
    pts,
    total,
    anchorFracs,
    cards,
    obstruction: {
      x: sApex.x,
      y: sApex.y - sd * 0.5,
      w: sd * 0.9,
      h: sd,
    },
    labels: [],
  };
}

export default function ConduitStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<SVGPathElement>(null);
  const reduced = usePrefersReducedMotion();

  const [size, setSize] = useState({ w: 0, h: 0 });
  const [layout, setLayout] = useState<Layout | null>(null);

  // Measure the stage and (re)build the conduit geometry in pixel space so the
  // bend angles stay true and the marker lines up with each j-box at any size.
  useLayoutEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => {
      // Use the padding box (clientWidth/Height) — the same box the absolutely
      // positioned SVG (inset-0) and the % positioned cards resolve against —
      // so SVG coordinates, j-box cards, and the panel entry all align.
      setSize({ w: el.clientWidth, h: el.clientHeight });
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const { w, h } = size;
    if (!w || !h) return;
    setLayout(w < 768 ? buildMobile(w, h) : buildDesktop(w, h));
  }, [size]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.6", "end 0.75"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 28,
    restDelta: 0.0005,
  });

  // Travelling signal marker, positioned along the path (SVG pixel space).
  // Driven entirely by motion values — no React state — so scrolling never
  // re-renders the section (a key source of conduit flicker).
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const markerOpacity = useTransform(
    progress,
    [0, 0.02, 0.985, 1],
    [0, 1, 1, 0],
  );

  const moveMarker = (p: number) => {
    const track = trackRef.current;
    if (!track) return;
    const len = track.getTotalLength();
    const pt = track.getPointAtLength(Math.max(0, Math.min(1, p)) * len);
    mx.set(pt.x);
    my.set(pt.y);
  };

  useMotionValueEvent(progress, "change", moveMarker);

  useEffect(() => {
    if (!layout) return;
    moveMarker(reduced ? 1 : progress.get());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [layout, reduced]);

  const d = layout ? toPath(layout.pts) : "";

  return (
    <section
      ref={sectionRef}
      id="features"
      className="blueprint relative overflow-hidden bg-[var(--color-bg)]"
    >
      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-24 text-center sm:pt-28">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-orange)]">
          The run
        </p>
        <h2 className="mx-auto max-w-2xl text-3xl font-black tracking-tight text-[var(--color-ink)] sm:text-5xl">
          Follow the run, bend by bend.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-[var(--color-muted)]">
          One clean EMT run — straight pulls, a measured offset, a 3-point
          saddle over an obstruction, then into the panel.
        </p>
      </div>

      <div
        ref={stageRef}
        className="relative mx-auto mt-12 min-h-[2200px] w-full max-w-6xl px-6 sm:mt-16 md:min-h-[1580px]"
      >
        {layout && size.w > 0 && (
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full"
            width={size.w}
            height={size.h}
            viewBox={`0 0 ${size.w} ${size.h}`}
            fill="none"
            aria-hidden
          >
            <defs>
              <linearGradient id="conduitLive" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="var(--color-orange-soft)" />
                <stop offset="100%" stopColor="var(--color-orange)" />
              </linearGradient>
              <filter
                id="markerGlow"
                x="-150%"
                y="-150%"
                width="400%"
                height="400%"
              >
                <feGaussianBlur stdDeviation="6" result="b" />
                <feMerge>
                  <feMergeNode in="b" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Obstruction the saddle jumps over */}
            {layout.obstruction && (
              <g>
                <rect
                  x={layout.obstruction.x}
                  y={layout.obstruction.y}
                  width={layout.obstruction.w}
                  height={layout.obstruction.h}
                  rx={3}
                  fill="rgba(17,24,39,0.82)"
                />
                <rect
                  x={layout.obstruction.x}
                  y={layout.obstruction.y}
                  width={layout.obstruction.w}
                  height={layout.obstruction.h}
                  rx={3}
                  fill="none"
                  stroke="var(--color-orange)"
                  strokeWidth={1.5}
                  strokeDasharray="4 3"
                  opacity={0.7}
                />
              </g>
            )}

            {/* Static conduit shell (unpowered pipe) */}
            <path
              ref={trackRef}
              d={d}
              stroke="rgba(17,24,39,0.16)"
              strokeWidth={13}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d={d}
              stroke="rgba(255,255,255,0.75)"
              strokeWidth={4}
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Energised section that draws with scroll. This is the ONLY
                animated conduit path — a single stable body, so there are no
                overlapping/duplicate paths to flicker against each other. */}
            <motion.path
              d={d}
              stroke="url(#conduitLive)"
              strokeWidth={13}
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ pathLength: reduced ? 1 : progress }}
            />

            {/* Bend annotations */}
            {layout.labels.map((l) => (
              <text
                key={l.text}
                x={l.x}
                y={l.y}
                textAnchor="middle"
                className="fill-[var(--color-muted)]"
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                }}
              >
                {l.text}
              </text>
            ))}

            {/* Travelling orange current/marker — always mounted, kept
                separate from the conduit body, faded in/out via a motion
                value (no mount/unmount, no re-render → no flicker). */}
            <motion.g
              style={{ x: mx, y: my, opacity: reduced ? 0 : markerOpacity }}
            >
              <circle
                r={16}
                fill="var(--color-orange)"
                opacity={0.28}
                className="marker-pulse"
              />
              <circle
                r={7}
                fill="var(--color-orange)"
                filter="url(#markerGlow)"
              />
              <circle r={3} fill="#fff" />
            </motion.g>
          </svg>
        )}

        {layout &&
          JBOXES.map((box, i) => (
            <JBox
              key={box.tag}
              data={box}
              place={layout.cards[i]}
              frac={layout.anchorFracs[i]}
              progress={progress}
              reduced={reduced}
            />
          ))}
      </div>
    </section>
  );
}

function JBox({
  data,
  place,
  frac,
  progress,
  reduced,
}: {
  data: JBoxData;
  place: CardPlace;
  frac: number;
  progress: MotionValue<number>;
  reduced: boolean;
}) {
  const [active, setActive] = useState(false);

  useMotionValueEvent(progress, "change", (p) => {
    setActive(p >= frac - 0.012);
  });

  const powered = reduced || active;

  return (
    <motion.div
      className="absolute z-10 -translate-y-1/2"
      style={{
        left: `${place.leftPct}%`,
        top: `${place.topPct}%`,
        width: `${place.widthPct}%`,
      }}
      initial={reduced ? false : { opacity: 0, y: 24, filter: "blur(2px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className={`group relative overflow-hidden rounded-2xl border p-5 shadow-[var(--shadow-card)] transition-all duration-500 sm:p-6 ${
          powered
            ? "border-[var(--color-orange)]/45 bg-[var(--color-surface)] shadow-[var(--shadow-lift)]"
            : "border-[var(--color-line)] bg-[var(--color-surface)]"
        }`}
      >
        <span className="jbox-screw left-2.5 top-2.5" />
        <span className="jbox-screw right-2.5 top-2.5" />
        <span className="jbox-screw bottom-2.5 left-2.5" />
        <span className="jbox-screw bottom-2.5 right-2.5" />

        <div className="mb-3.5 flex flex-wrap items-center gap-2.5">
          <span
            className={`relative flex h-2.5 w-2.5 items-center justify-center rounded-full transition-colors duration-500 ${
              powered ? "bg-[var(--color-orange)]" : "bg-[var(--color-line)]"
            }`}
          >
            {powered && (
              <span className="absolute h-2.5 w-2.5 animate-ping rounded-full bg-[var(--color-orange)]/60" />
            )}
          </span>
          <span className="text-[0.7rem] font-bold uppercase tracking-[0.18em] text-[var(--color-muted)]">
            {data.tag}
          </span>
          <span className="rounded-full border border-[var(--color-line)] bg-[var(--color-surface-2)] px-2 py-0.5 text-[0.62rem] font-bold uppercase tracking-[0.1em] text-[var(--color-muted)]">
            {data.bend}
          </span>
        </div>

        <h3 className="text-lg font-black tracking-tight text-[var(--color-ink)] sm:text-xl">
          {data.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)] sm:text-base">
          {data.body}
        </p>

        <div
          className={`mt-4 h-1 rounded-full bg-[var(--color-orange)] transition-all duration-700 ${
            powered ? "w-14 opacity-100" : "w-0 opacity-0"
          }`}
        />
      </div>
    </motion.div>
  );
}
