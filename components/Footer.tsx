import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-line)] bg-[var(--color-bg)] px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <Logo />

          <nav className="flex items-center gap-6 text-sm font-medium text-[var(--color-muted)]">
            <a
              href="/privacy"
              className="transition-colors hover:text-[var(--color-ink)]"
            >
              Privacy
            </a>
            <a
              href="/terms"
              className="transition-colors hover:text-[var(--color-ink)]"
            >
              Terms
            </a>
            <a
              href="mailto:bendlogic.app@gmail.com"
              className="transition-colors hover:text-[var(--color-ink)]"
            >
              Contact
            </a>
          </nav>
        </div>

        <div className="mt-8 border-t border-[var(--color-line)] pt-8 text-center text-xs leading-relaxed text-[var(--color-muted)]/80">
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
