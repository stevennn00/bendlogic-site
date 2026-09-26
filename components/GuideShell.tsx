import Link from "next/link";
import Logo from "./Logo";
import StoreBadges from "./StoreBadges";
import { Guide, guides } from "@/app/guides/guide-content";

export default function GuideShell({ guide }: { guide: Guide }) {
  return (
    <>
      <header className="border-b border-[var(--color-line)] bg-[var(--color-paper)]">
        <div className="container flex min-h-[72px] items-center justify-between gap-4">
          <Link href="/" aria-label="BendLogic home" className="inline-flex min-h-11 items-center"><Logo /></Link>
          <Link href="/" className="inline-flex min-h-11 items-center text-sm font-semibold text-[var(--color-accent)] hover:underline"><span aria-hidden className="mr-2">←</span>Back to BendLogic home</Link>
        </div>
      </header>

      <main id="content" className="bg-[var(--color-sheet)]">
        <section className="grid-paper border-b border-[var(--color-line)]">
          <div className="container grid gap-10 py-14 md:grid-cols-[180px_1fr] md:gap-14 md:py-20">
            <aside className="border-t-2 border-[var(--color-accent)] pt-4">
              <p className="technical-label text-[var(--color-accent)]">BendLogic / Field guide</p>
            </aside>
            <div className="max-w-[780px]">
              <h1 className="section-title">{guide.h1}</h1>
              <p className="mt-8 font-[var(--font-display)] text-[clamp(1.6rem,3vw,2.2rem)] font-bold leading-tight text-[var(--color-ink)]">{guide.heroLine}</p>
              <p className="body-lead mt-5 max-w-[680px]">{guide.heroCopy}</p>
              <div className="mt-9 border-t border-[var(--color-ink)] pt-5">
                <p className="technical-label mb-3 text-[var(--color-muted)]">{guide.cta} — App Store + Google Play</p>
                <StoreBadges guideSlug={guide.slug} />
              </div>
            </div>
          </div>
        </section>

        <div className="container grid gap-10 py-12 md:grid-cols-[180px_1fr] md:gap-14 md:py-20">
          <aside className="border-t-2 border-[var(--color-ink)] pt-4">
            <p className="technical-label text-[var(--color-muted)]">In this guide</p>
            <ol className="mt-5 space-y-3 text-sm font-semibold text-[var(--color-ink)]">
              {guide.sections.map((section, index) => <li key={section.heading}><a className="hover:text-[var(--color-accent)] hover:underline" href={`#section-${index + 1}`}>{section.heading}</a></li>)}
              <li><a className="hover:text-[var(--color-accent)] hover:underline" href="#faq">FAQ</a></li>
            </ol>
          </aside>
          <div className="max-w-[780px]">
            {guide.sections.map((section, index) => (
              <section key={section.heading} id={`section-${index + 1}`} className="scroll-mt-8 border-t border-[var(--color-line)] pb-12 pt-6 first:border-t-2 first:border-[var(--color-ink)]">
                <p className="technical-label text-[var(--color-accent)]">{String(index + 1).padStart(2, "0")} / Field notes</p>
                <h2 className="mt-4 font-[var(--font-display)] text-[clamp(1.8rem,3vw,2.5rem)] font-bold uppercase leading-tight">{section.heading}</h2>
                <div className="legal-copy mt-6">
                  {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  {section.bullets && <ul>{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul>}
                  {section.steps && <ol className="guide-steps">{section.steps.map((step) => <li key={step}>{step}</li>)}</ol>}
                  {section.afterList?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
              </section>
            ))}

            <section id="faq" className="scroll-mt-8 border-t-2 border-[var(--color-ink)] py-8">
              <p className="technical-label text-[var(--color-accent)]">Field questions</p>
              <h2 className="mt-4 font-[var(--font-display)] text-[clamp(1.8rem,3vw,2.5rem)] font-bold uppercase leading-tight">FAQ</h2>
              <dl className="mt-7 divide-y divide-[var(--color-line)] border-b border-[var(--color-line)]">
                {guide.faq.map(({ question, answer }) => <div key={question} className="py-5"><dt className="font-semibold text-[var(--color-ink)]">{question}</dt><dd className="mt-2 leading-relaxed text-[var(--color-muted)]">{answer}</dd></div>)}
              </dl>
            </section>

            <nav aria-label="Related bends" className="border-t-2 border-[var(--color-ink)] py-8">
              <p className="technical-label text-[var(--color-accent)]">Keep planning</p>
              <h2 className="mt-4 font-[var(--font-display)] text-[clamp(1.8rem,3vw,2.5rem)] font-bold uppercase leading-tight">Related bends</h2>
              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {guide.related.map((slug) => <li key={slug}><Link href={`/guides/${slug}`} className="flex min-h-16 items-center justify-between gap-4 border border-[var(--color-line)] bg-[var(--color-paper)] px-4 py-3 font-semibold hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"><span>{guides[slug].h1}</span><span aria-hidden>↗</span></Link></li>)}
              </ul>
            </nav>
          </div>
        </div>
      </main>

      <footer className="border-t border-[var(--color-line)] bg-[var(--color-paper)]">
        <div className="container flex flex-wrap items-center justify-between gap-4 py-7 text-sm text-[var(--color-muted)]">
          <span>© 2026 BendLogic · bendlogic.app</span>
          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2 font-semibold text-[var(--color-accent)]">
            <Link href="/" className="hover:underline">Back to BendLogic home</Link>
            <Link href="/privacy" className="hover:underline">Privacy</Link>
            <Link href="/terms" className="hover:underline">Terms</Link>
          </nav>
        </div>
      </footer>
    </>
  );
}
