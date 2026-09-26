export default function ProductProof() {
  return (
    <section id="proof" className="scroll-mt-20 bg-[var(--color-sheet)]">
      <div className="container grid gap-10 py-16 lg:grid-cols-[.8fr_1.2fr] lg:items-center lg:gap-20 lg:py-20">
        <div>
          <p className="eyebrow">01 / See it before you bend it</p>
          <h2 className="section-title mt-5">The layout is the answer.</h2>
          <p className="body-lead mt-5 max-w-[450px]">BendLogic turns inputs into a visual layout with marks and distances you can check against the pipe in front of you.</p>
        </div>
        <div className="relative border border-[var(--color-line)] bg-[var(--color-paper)] p-4 sm:p-8">
          <div className="mb-5 flex justify-between gap-2 border-b border-[var(--color-line)] pb-3 text-[var(--color-muted)] technical-label"><span>Layout study / Offset</span><span>Diagrammatic</span></div>
          <svg viewBox="0 0 640 230" role="img" aria-label="Diagram of two thirty-degree bends creating an offset" className="block w-full" fill="none">
            <path d="M20 180H260L468 60H620" stroke="#192021" strokeWidth="18" strokeLinejoin="round" strokeLinecap="round" />
            <path d="M20 180H260L468 60H620" stroke="#f3f0e7" strokeWidth="10" strokeLinejoin="round" strokeLinecap="round" />
            <path d="M260 180V205M468 60V205M260 205H468" stroke="#ad3e08" strokeWidth="1.5" />
            <path d="M550 60H596M596 60V180M550 180H596" stroke="#ad3e08" strokeWidth="1.5" />
            <circle cx="260" cy="180" r="6" fill="#ad3e08" /><circle cx="468" cy="60" r="6" fill="#ad3e08" />
            <text x="269" y="198" fill="#192021" fontSize="13" fontWeight="700">BEND 01</text><text x="478" y="48" fill="#192021" fontSize="13" fontWeight="700">BEND 02</text>
            <text x="323" y="222" fill="#ad3e08" fontSize="13" fontWeight="700">MARK SPACING</text><text x="604" y="126" fill="#ad3e08" fontSize="13" fontWeight="700" transform="rotate(-90 604 126)">RISE</text>
          </svg>
          <p className="mt-4 border-t border-[var(--color-line)] pt-3 text-sm text-[var(--color-muted)]">A quick visual reference for the marks and geometry; confirm each result against field conditions.</p>
        </div>
      </div>
    </section>
  );
}
