import type { ReactNode } from "react";
import Link from "next/link";
import Logo from "./Logo";

export default function LegalShell({ title, updated, children }: { title: string; updated: string; children: ReactNode }) {
  return (
    <>
      <header className="border-b border-[var(--color-line)] bg-[var(--color-paper)]"><div className="container flex min-h-[72px] items-center justify-between gap-4"><Link href="/" aria-label="BendLogic home" className="inline-flex min-h-11 items-center"><Logo /></Link><Link href="/" className="inline-flex min-h-11 items-center text-sm font-semibold text-[var(--color-accent)] hover:underline"><span aria-hidden className="mr-2">←</span>Back to site</Link></div></header>
      <main id="content" className="min-h-screen bg-[var(--color-sheet)]">
        <div className="container grid gap-10 py-12 md:grid-cols-[180px_1fr] md:gap-14 md:py-20">
          <aside className="border-t-2 border-[var(--color-accent)] pt-4"><p className="technical-label text-[var(--color-accent)]">BendLogic / Reference</p><p className="technical-label mt-3 text-[var(--color-muted)]">{updated}</p></aside>
          <div><h1 className="section-title max-w-[750px]">{title}</h1><div className="legal-copy mt-10 border-t border-[var(--color-line)] pt-2">{children}</div></div>
        </div>
      </main>
      <footer className="border-t border-[var(--color-line)] bg-[var(--color-paper)]"><div className="container flex flex-wrap justify-between gap-4 py-7 text-sm text-[var(--color-muted)]"><span>© 2026 BendLogic · bendlogic.app</span><Link className="font-semibold text-[var(--color-accent)] hover:underline" href="/">Back to home ↑</Link></div></footer>
    </>
  );
}
