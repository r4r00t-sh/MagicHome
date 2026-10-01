"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import { siteConfig } from "@/lib/site-config";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon, type IconName } from "@/components/ui/Icon";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

function AnimatedCheck({ delay }: { delay: number }) {
  return (
    <motion.span
      initial={{ scale: 0.6, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={viewportOnce}
      transition={{ delay, type: "spring", stiffness: 260, damping: 18 }}
      className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gold text-primary-dark"
    >
      <Icon name="check" className="h-4 w-4" />
    </motion.span>
  );
}

function CountHint({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { stiffness: 60, damping: 20 });

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, motionValue, value]);

  useEffect(() => {
    const unsub = spring.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${Math.round(latest)}`;
      }
    });
    return unsub;
  }, [spring]);

  return <span ref={ref}>0</span>;
}

export function WhyMagicHome() {
  return (
    <section id="about" className="relative scroll-mt-28 overflow-hidden py-20 sm:py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
      <div className="pointer-events-none absolute -left-16 bottom-10 h-56 w-56 organic-blob bg-mint/30 blur-2xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          title="More Than Cleaning. It’s Peace of Mind."
          description="Every visit is designed around trust, consistency, and a home that feels cared for."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid gap-5 sm:grid-cols-2"
        >
          {siteConfig.features.map((feature, index) => {
            const inverted = index === siteConfig.features.length - 1;
            return (
            <motion.div
              key={feature.id}
              variants={fadeUp}
              whileHover={{ y: -6, scale: 1.015 }}
              transition={{ type: "spring", stiffness: 280, damping: 20 }}
              className={`group relative overflow-hidden rounded-[1.75rem] border p-7 shadow-[0_16px_40px_-30px_rgba(3,44,155,0.45)] ${
                inverted
                  ? "border-primary bg-primary text-white hover:shadow-[0_24px_50px_-28px_rgba(3,44,155,0.55)]"
                  : "border-primary/5 bg-surface hover:border-accent/40 hover:shadow-[0_24px_50px_-28px_rgba(3,44,155,0.35)]"
              }`}
            >
              {!inverted ? (
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(500px circle at 20% 0%, rgba(228,192,106,0.2), transparent 50%)",
                  }}
                />
              ) : (
                <div className="pointer-events-none absolute -right-8 -top-8 h-36 w-36 rounded-full bg-accent/20 blur-2xl" />
              )}
              <div className="relative flex items-start gap-4">
                <AnimatedCheck delay={0.1 * index} />
                <div>
                  <div
                    className={`mb-3 inline-flex h-10 w-10 items-center justify-center rounded-2xl transition ${
                      inverted
                        ? "bg-white/10 text-accent group-hover:bg-accent group-hover:text-primary-dark"
                        : "bg-primary/5 text-primary group-hover:bg-accent group-hover:text-primary-dark"
                    }`}
                  >
                    <Icon name={feature.icon as IconName} />
                  </div>
                  <h3
                    className={`text-xl font-bold ${
                      inverted ? "text-white" : "text-primary"
                    }`}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className={`mt-2 text-sm leading-relaxed ${
                      inverted ? "text-white/75" : "text-muted"
                    }`}
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
              <p
                className={`pointer-events-none absolute -right-2 -top-3 text-6xl font-extrabold ${
                  inverted ? "text-white/[0.06]" : "text-primary/[0.04]"
                }`}
              >
                0{index + 1}
              </p>
            </motion.div>
            );
          })}
        </motion.div>

        <p className="mt-8 text-center text-sm text-muted">
          Trusted across{" "}
          <span className="font-semibold text-primary">
            <CountHint value={500} />+
          </span>{" "}
          homes and counting.
        </p>
      </div>
    </section>
  );
}
