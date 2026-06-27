export default function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2.5">
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[var(--color-orange)]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M4 18 L10 18 L10 8 L20 8"
                  stroke="#0a0a0a"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="font-extrabold tracking-tight">
              Bend<span className="text-[var(--color-orange)]">Logic</span>
            </span>
          </div>

          <nav className="flex items-center gap-6 text-sm text-[var(--color-dim)]">
            <a href="/privacy" className="transition-colors hover:text-white">
              Privacy
            </a>
            <a href="/terms" className="transition-colors hover:text-white">
              Terms
            </a>
            <a
              href="mailto:bendlogic.app@gmail.com"
              className="transition-colors hover:text-white"
            >
              Contact
            </a>
          </nav>
        </div>

        <div className="mt-8 border-t border-white/5 pt-8 text-center text-xs leading-relaxed text-[var(--color-dim)]/70">
          <p>&copy; 2026 BendLogic App · bendlogic.app</p>
          <p className="mx-auto mt-3 max-w-2xl">
            Apple, the Apple logo, iPhone, and App Store are trademarks of Apple
            Inc., registered in the U.S. and other countries and regions. Google
            Play and the Google Play logo are trademarks of Google LLC.
          </p>
        </div>
      </div>
    </footer>
  );
}
