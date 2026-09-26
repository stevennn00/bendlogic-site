import Image from "next/image";

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
          <div className="mb-5 flex flex-wrap justify-between gap-2 border-b border-[var(--color-line)] pb-3 text-[var(--color-muted)] technical-label"><span>Field work / Conduit bending</span><span>On site</span></div>
          <Image src="/women-bending.jpg" alt="A woman wearing a hard hat and gloves bends conduit with a manual bender" width={1792} height={1008} sizes="(max-width: 1024px) 100vw, 60vw" className="block h-auto w-full" />
          <p className="mt-4 border-t border-[var(--color-line)] pt-3 text-sm text-[var(--color-muted)]">Confirm your marks and measurements against field conditions before bending.</p>
        </div>
      </div>
    </section>
  );
}
