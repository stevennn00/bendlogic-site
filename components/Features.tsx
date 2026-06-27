import Reveal from "./Reveal";

const features = [
  {
    title: "Visual bend layouts",
    body: "Every calculation renders a clear diagram — see your marks, angles, and distances before you ever touch the bender.",
    icon: (
      <path
        d="M4 17 L9 17 L9 9 L15 9 L15 5 L20 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Field-ready accuracy",
    body: "Take-up, shrink, and deduct handled for you across conduit types and sizes, so the numbers match the pipe in your hands.",
    icon: (
      <>
        <path
          d="M5 12 L10 17 L19 6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    ),
  },
  {
    title: "Works offline, on site",
    body: "No signal in the basement? Everything runs locally on your device — no account, no tracking, no waiting.",
    icon: (
      <>
        <path
          d="M12 4 L12 14 M12 14 L8 10 M12 14 L16 10"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5 19 L19 19"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </>
    ),
  },
];

export default function Features() {
  return (
    <section id="features" className="relative mx-auto max-w-6xl px-6 py-28">
      <Reveal>
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-orange)]">
          Why BendLogic
        </p>
        <h2 className="max-w-2xl text-3xl font-black tracking-tight sm:text-5xl">
          The numbers you need, before the first bend.
        </h2>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
        {features.map((f, i) => (
          <Reveal key={f.title} delay={i * 0.1}>
            <div className="group h-full rounded-2xl border border-white/10 bg-[var(--color-surface)] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-orange)]/40 hover:bg-[var(--color-surface-2)]">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-orange)]/10 text-[var(--color-orange)] ring-1 ring-[var(--color-orange)]/20">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  {f.icon}
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold">{f.title}</h3>
              <p className="text-[var(--color-dim)]">{f.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
