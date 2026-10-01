"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useMounted } from "@/lib/use-mounted";

export function ScrollProgress() {
  const mounted = useMounted();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  if (!mounted) {
    return (
      <div
        className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-accent"
        style={{ transform: "scaleX(0)" }}
        aria-hidden="true"
      />
    );
  }

  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-accent"
      style={{ scaleX }}
      aria-hidden="true"
    />
  );
}
