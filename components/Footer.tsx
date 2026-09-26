import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-paper)]">
      <div className="container py-10">
        <div className="flex flex-col gap-7 border-b border-[var(--color-line)] pb-8 sm:flex-row sm:items-center sm:justify-between"><a href="#top" aria-label="Back to BendLogic home" className="inline-flex min-h-11 items-center self-start"><Logo /></a><nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold"><a className="inline-flex min-h-11 items-center hover:underline" href="/privacy">Privacy</a><a className="inline-flex min-h-11 items-center hover:underline" href="/terms">Terms</a><a className="inline-flex min-h-11 items-center hover:underline" href="mailto:bendlogic.app@gmail.com">Contact</a></nav></div>
        <div className="flex flex-col gap-3 pt-6 text-xs leading-relaxed text-[var(--color-muted)] sm:flex-row sm:justify-between"><p>© 2026 BendLogic App · bendlogic.app</p><p className="max-w-[580px]">Apple, the Apple logo, iPhone, and App Store are trademarks of Apple Inc., registered in the U.S. and other countries and regions. Google Play and the Google Play logo are trademarks of Google LLC.</p></div>
      </div>
    </footer>
  );
}
