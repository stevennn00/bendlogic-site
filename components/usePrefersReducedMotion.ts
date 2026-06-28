"use client";

import { useEffect, useState } from "react";

/**
 * Returns true when the user has requested reduced motion.
 * Used to fall back to a static, fully-drawn conduit instead of the
 * scroll-driven animation.
 */
export default function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return reduced;
}
