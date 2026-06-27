"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import StoreBadges from "./StoreBadges";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section
      id="top"
      className="bg-grid relative flex min-h-screen items-center overflow-hidden pt-28"
    >
      {/* Ambient glows */}
      <div className="glow left-[-10%] top-[10%] h-[420px] w-[420px] bg-[var(--color-orange)]/40" />
      <div className="glow bottom-[-10%] right-[-5%] h-[380px] w-[380px] bg-[#ff3d00]/25" />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 py-16 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Copy */}
        <div className="text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-[var(--color-dim)] backdrop-blur lg:mx-0"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-orange)]" />
            Built by the trade, for the trade
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05, ease }}
            className="text-[clamp(2.6rem,6vw,4.6rem)] font-black uppercase leading-[0.92] tracking-[-0.03em]"
          >
            <span className="text-gradient">Conduit bending</span>
            <br />
            <span className="orange-gradient">for field electricians</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease }}
            className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[var(--color-dim)] lg:mx-0"
          >
            Offsets, 3- and 4-point saddles, rolling offsets, box fill, voltage
            drop, and more — with fast visual layouts and field-ready results
            that hold up on the job.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease }}
            className="mt-9"
          >
            <p className="mb-4 text-sm font-semibold tracking-wide text-white/80">
              Available now on the App Store and Google Play
            </p>
            <StoreBadges className="justify-center lg:justify-start" />
          </motion.div>
        </div>

        {/* Phone mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease }}
          className="relative flex justify-center"
        >
          <div className="absolute inset-0 -z-10 mx-auto h-3/4 w-3/4 self-center rounded-full bg-[var(--color-orange)]/20 blur-[90px]" />
          <Image
            src="/hero-mockup.png"
            alt="BendLogic conduit bending calculator app shown on a phone"
            width={900}
            height={1200}
            priority
            className="animate-float w-full max-w-[460px] drop-shadow-[0_40px_80px_rgba(0,0,0,0.85)]"
          />
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[var(--color-dim)]"
      >
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-white/15 p-1">
          <motion.span
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            className="h-1.5 w-1.5 rounded-full bg-[var(--color-orange)]"
          />
        </div>
      </motion.div>
    </section>
  );
}
