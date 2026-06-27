"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Logo from "./Logo";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-[var(--color-line)] bg-white/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" aria-label="BendLogic home">
          <Logo />
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-[var(--color-muted)] sm:flex">
          <a
            href="#features"
            className="transition-colors hover:text-[var(--color-ink)]"
          >
            Features
          </a>
          <a
            href="#tools"
            className="transition-colors hover:text-[var(--color-ink)]"
          >
            Tools
          </a>
          <a
            href="#download"
            className="rounded-full bg-[var(--color-orange)] px-4 py-2 font-semibold text-white shadow-[var(--shadow-glow)] transition-transform hover:-translate-y-0.5"
          >
            Get the app
          </a>
        </nav>
      </div>
    </motion.header>
  );
}
