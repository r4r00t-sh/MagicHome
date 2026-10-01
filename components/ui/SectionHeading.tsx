"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/animations";
import { useMounted } from "@/lib/use-mounted";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
  className = "",
}: SectionHeadingProps) {
  const mounted = useMounted();

  return (
    <motion.div
      variants={fadeUp}
      initial={mounted ? "hidden" : false}
      whileInView="visible"
      viewport={viewportOnce}
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : "text-left"} ${className}`}
    >
      {eyebrow ? (
        <p
          className={`mb-3 text-xs font-semibold uppercase tracking-[0.22em] ${
            light ? "text-mint" : "text-primary/70"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`text-3xl font-extrabold tracking-tight sm:text-4xl ${
          light ? "text-white" : "text-primary"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            light ? "text-white/75" : "text-muted"
          }`}
        >
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}
