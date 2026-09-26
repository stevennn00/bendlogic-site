"use client";

import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";

const links = [
  { href: "#proof", label: "How it works" },
  { href: "#tools", label: "Calculators" },
  { href: "#field", label: "In the field" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-line)] bg-[var(--color-paper)]/95 backdrop-blur-sm">
      <div className="container flex min-h-[72px] items-center justify-between gap-4">
        <a href="#top" aria-label="BendLogic home" onClick={() => setOpen(false)} className="inline-flex min-h-11 items-center"><Logo /></a>
        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {links.map((link) => <a key={link.href} href={link.href} className="inline-flex min-h-11 items-center text-sm font-semibold text-[var(--color-ink)] underline-offset-8 hover:underline">{link.label}</a>)}
          <a href="#download" className="inline-flex min-h-11 items-center bg-[var(--color-accent)] px-5 text-sm font-bold text-white hover:bg-[#8f3106]">Get the app <span aria-hidden className="ml-3">↗</span></a>
        </nav>
        <button ref={triggerRef} type="button" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen((value) => !value)} className="inline-flex min-h-11 min-w-11 items-center justify-center gap-2 border border-[var(--color-ink)] px-3 text-xs font-bold uppercase tracking-[.12em] lg:hidden">
          <span>{open ? "Close" : "Menu"}</span><span aria-hidden>{open ? "×" : "☰"}</span>
        </button>
      </div>
      <nav id="mobile-navigation" aria-label="Mobile primary" className={`${open ? "" : "hidden"} border-t border-[var(--color-line)] bg-[var(--color-sheet)] lg:hidden`}>
        <div className="container flex flex-col py-2">
          {links.map((link, index) => <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="flex min-h-14 items-center justify-between border-b border-[var(--color-line)] text-base font-semibold"><span>{link.label}</span><span aria-hidden className="technical-label text-[var(--color-accent)]">0{index + 1} ↗</span></a>)}
          <a href="#download" onClick={() => setOpen(false)} className="my-3 flex min-h-12 items-center justify-between bg-[var(--color-accent)] px-4 font-bold text-white">Get the app <span aria-hidden>↗</span></a>
        </div>
      </nav>
    </header>
  );
}
