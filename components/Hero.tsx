"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import StoreBadges from "./StoreBadges";

const ease = [0.22, 1, 0.36, 1] as const;

const trust = ["No account required", "Works offline", "iOS & Android"];

export default function Hero() {
  return (
    <section
      id="top"
      className="blueprint relative overflow-hidden bg-[var(--color-bg)] pt-32"
    >
      {/* Soft ambient tint to warm up the light background */}
      <div className="glow left-[-8%] top-[-6%] h-[460px] w-[460px] bg-[var(--color-orange)]/15" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-line)] to-transparent" />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 px-6 pb-24 pt-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        {/* Copy */}
        <div className="text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-white px-4 py-1.5 text-xs font-semibold text-[var(--color-muted)] shadow-[var(--shadow-card)] lg:mx-0"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-orange)]" />
            Built by the trade, for the trade
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05, ease }}
            className="text-[clamp(2.6rem,6vw,4.5rem)] font-black uppercase leading-[0.95] tracking-[-0.03em] text-[var(--color-ink)]"
          >
            Conduit bending
            <br />
            <span className="text-[var(--color-orange)]">
              for field electricians
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease }}
            className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[var(--color-muted)] lg:mx-0"
          >
            Field-ready bend layouts, mark spacing, shrink, take-up, box fill,
            voltage drop, and NEC references — built for the jobsite.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease }}
            className="mt-9"
          >
            <p className="mb-4 text-sm font-semibold text-[var(--color-ink)]">
              Available now on the App Store and Google Play
            </p>
            <StoreBadges className="justify-center lg:justify-start" />
          </motion.div>

          <motion.ul
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease }}
            className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-medium text-[var(--color-muted)] lg:justify-start"
          >
            {trust.map((t) => (
              <li key={t} className="inline-flex items-center gap-2">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                  className="text-[var(--color-orange)]"
                >
                  <path
                    d="M5 12 L10 17 L19 6"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {t}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Dark showcase panel holding the app mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 28 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-b from-[var(--color-dark)] to-[var(--color-dark-2)] p-6 shadow-[0_30px_70px_-30px_rgba(17,24,39,0.6)] ring-1 ring-black/5 sm:p-8">
            {/* blueprint grid overlay — kept on its own layer so it doesn't
                override the gradient's background-image */}
            <div className="blueprint-dark pointer-events-none absolute inset-0" />
            {/* inner orange glow */}
            <div className="glow left-1/2 top-1/3 h-[280px] w-[280px] -translate-x-1/2 bg-[var(--color-orange)]/30" />

            {/* corner blueprint ticks */}
            <span className="absolute left-4 top-4 h-4 w-4 border-l-2 border-t-2 border-white/15" />
            <span className="absolute right-4 top-4 h-4 w-4 border-r-2 border-t-2 border-white/15" />
            <span className="absolute bottom-4 left-4 h-4 w-4 border-b-2 border-l-2 border-white/15" />
            <span className="absolute bottom-4 right-4 h-4 w-4 border-b-2 border-r-2 border-white/15" />

            <div className="relative z-10 flex justify-center">
              <Image
                src="/hero-showcase.png"
                alt="BendLogic app screens showing parallel offset layout, saddles, box fill, voltage drop, and NEC reference tools"
                width={853}
                height={1844}
                priority
                className="animate-float w-full max-w-[440px] rounded-2xl drop-shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
