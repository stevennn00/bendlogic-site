import type { ReactNode } from "react";

export default function LegalShell({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <main className="bg-grid min-h-screen">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-orange)] transition-opacity hover:opacity-80"
        >
          <span aria-hidden>←</span> Back to home
        </a>

        <h1 className="mt-8 text-4xl font-black uppercase tracking-tight sm:text-5xl">
          {title}
        </h1>
        <p className="mt-3 text-sm text-[var(--color-dim)]">{updated}</p>

        <div className="legal mt-10 space-y-6 text-[var(--color-dim)]">
          {children}
        </div>

        <footer className="mt-16 border-t border-white/10 pt-8 text-sm text-[var(--color-dim)]/70">
          &copy; 2026 BendLogic · bendlogic.app
        </footer>
      </div>
    </main>
  );
}
