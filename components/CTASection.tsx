"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/Button";
import { fadeUp, viewportOnce } from "@/lib/animations";

export function CTASection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section ref={ref} className="relative overflow-visible py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative overflow-visible rounded-[2rem] bg-[#d8ef8a] px-6 py-12 sm:px-10 sm:py-14 lg:px-14"
        >
          <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.55),transparent_55%)]" />

          <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[1.25fr_0.75fr]">
            <div className="max-w-xl">
              <h2 className="text-3xl font-extrabold tracking-tight text-primary-dark sm:text-4xl lg:text-5xl">
                {siteConfig.cta.heading}
              </h2>
              <p className="mt-4 text-base text-primary-dark/70 sm:text-lg">
                {siteConfig.cta.text}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="/book" variant="dark" magnetic>
                  Book a Cleaning
                </Button>
                <Button
                  href={siteConfig.phoneHref}
                  variant="secondary"
                  className="!border-primary-dark/15 !bg-white/70"
                >
                  Call Us
                </Button>
              </div>
            </div>

            <motion.div
              style={{ y: imageY }}
              className="relative mx-auto h-60 w-52 sm:h-72 sm:w-60 lg:-mb-28 lg:h-80 lg:w-64"
            >
              <div className="absolute inset-x-4 bottom-0 h-8 rounded-[100%] bg-primary/15 blur-md" />
              <div className="absolute inset-0 overflow-hidden rounded-[2rem] border-4 border-white/60 shadow-2xl shadow-primary-dark/20">
                <Image
                  src={siteConfig.cta.image}
                  alt={siteConfig.cta.imageAlt}
                  fill
                  sizes="256px"
                  className="object-cover object-top"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
