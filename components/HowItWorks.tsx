"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/site-config";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative scroll-mt-28 overflow-hidden bg-primary py-12 text-white sm:py-14">
      <div className="pointer-events-none absolute inset-0 dashed-grid opacity-20" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          light
          eyebrow="Simple Process"
          title="How It Works"
          description="Three easy steps from booking to a home that feels brand new."
        />

        <div className="relative mt-8">
          <div className="pointer-events-none absolute left-[8%] right-[8%] top-8 hidden h-px overflow-hidden lg:block">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={viewportOnce}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="h-full origin-left bg-gradient-to-r from-transparent via-accent/70 to-transparent"
            />
          </div>

          <motion.ol
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid gap-8 lg:grid-cols-3"
          >
            {siteConfig.steps.map((step, index) => (
              <motion.li
                key={step.number}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="group relative flex gap-5 lg:flex-col lg:items-center lg:text-center"
              >
                {index < siteConfig.steps.length - 1 ? (
                  <div className="absolute left-[1.15rem] top-12 bottom-[-2rem] w-px bg-white/15 lg:hidden" />
                ) : null}
                <motion.div
                  whileHover={{ scale: 1.08, rotate: 3 }}
                  className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-primary-dark text-sm font-bold text-accent shadow-lg shadow-primary-dark/40 transition group-hover:border-accent group-hover:bg-accent group-hover:text-primary-dark"
                >
                  {step.number}
                </motion.div>
                <div className="pt-1 lg:pt-4">
                  <h3 className="text-xl font-bold tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70 lg:max-w-xs">
                    {step.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </div>
    </section>
  );
}
