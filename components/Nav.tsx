"use client";

import { motion } from "framer-motion";

export default function Nav() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-orange)] shadow-[var(--shadow-glow)]">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden
            >
              <path
                d="M4 18 L10 18 L10 8 L20 8"
                stroke="#0a0a0a"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="text-lg font-extrabold tracking-tight">
            Bend<span className="text-[var(--color-orange)]">Logic</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-[var(--color-dim)] sm:flex">
          <a href="#features" className="transition-colors hover:text-white">
            Features
          </a>
          <a href="#tools" className="transition-colors hover:text-white">
            Tools
          </a>
          <a
            href="#download"
            className="rounded-full bg-white/5 px-4 py-2 text-white ring-1 ring-white/10 transition-colors hover:bg-white/10"
          >
            Download
          </a>
        </nav>
      </div>
    </motion.header>
  );
}
