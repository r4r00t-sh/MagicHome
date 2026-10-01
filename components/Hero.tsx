"use client";

import Image from "next/image";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { floatSoft, popIn } from "@/lib/animations";
import { useMounted } from "@/lib/use-mounted";

const headingLines = ["Come Home to a", "Little More Magic."];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [videoOpen, setVideoOpen] = useState(false);
  const mounted = useMounted();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-background">
      {/* Dark green hero band */}
      <div className="relative bg-primary pb-40 pt-28 sm:pb-48 sm:pt-32 lg:pb-56 lg:pt-36">
        <div className="pointer-events-none absolute inset-0 dashed-grid opacity-25" />
        <div className="pointer-events-none absolute -right-16 top-20 h-56 w-56 organic-blob bg-mint/20 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <motion.p
              initial={mounted ? { opacity: 0, y: 12 } : false}
              animate={mounted ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-mint backdrop-blur"
            >
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
              {siteConfig.hero.eyebrow}
            </motion.p>

            <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
              {headingLines.map((line, index) => (
                <span key={line} className="block overflow-hidden">
                  <motion.span
                    initial={mounted ? { opacity: 0, y: "100%" } : false}
                    animate={mounted ? { opacity: 1, y: 0 } : undefined}
                    transition={{
                      duration: 0.75,
                      delay: 0.28 + index * 0.14,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="block"
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p
              initial={mounted ? { opacity: 0, y: 18 } : false}
              animate={mounted ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg"
            >
              {siteConfig.hero.supporting}
            </motion.p>

            <motion.div
              initial={mounted ? { opacity: 0, y: 16 } : false}
              animate={mounted ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.55, delay: 0.72 }}
              className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
            >
              <Button href="/#quote" magnetic className="w-full sm:w-auto">
                {siteConfig.hero.primaryCta}
              </Button>
              <Button
                href="/#quote"
                variant="outline"
                className="w-full sm:w-auto"
              >
                {siteConfig.hero.secondaryCta}
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Soft curve into light page */}
        <div className="pointer-events-none absolute inset-x-0 -bottom-px leading-[0]">
          <svg
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            className="h-16 w-full sm:h-20 lg:h-24"
            aria-hidden
          >
            <path
              d="M0,40 C320,120 560,0 720,40 C880,80 1120,120 1440,40 L1440,120 L0,120 Z"
              fill="var(--background)"
            />
          </svg>
        </div>
      </div>

      {/* Overlapping hero image card */}
      <div className="relative z-10 mx-auto -mt-36 max-w-5xl px-4 sm:-mt-44 sm:px-6 lg:-mt-52">
        <motion.div
          initial={mounted ? { opacity: 0, scale: 0.94, y: 40 } : false}
          animate={mounted ? { opacity: 1, scale: 1, y: 0 } : undefined}
          transition={{ duration: 0.9, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-[1.75rem] border border-primary/5 bg-surface shadow-[0_30px_80px_-30px_rgba(3,44,155,0.45)] sm:rounded-[2rem]">
            <motion.div
              style={{ y: imageY, scale: imageScale }}
              className="relative aspect-[16/10] w-full sm:aspect-[16/9]"
            >
              <Image
                src={siteConfig.hero.image}
                alt={siteConfig.hero.imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/25 via-transparent to-transparent" />
            </motion.div>

            <button
              type="button"
              aria-label="Play brand story video"
              onClick={() => setVideoOpen(true)}
              className="group absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-primary shadow-xl transition hover:scale-110 sm:h-20 sm:w-20"
            >
              <span className="absolute inset-0 animate-ping-slow rounded-full bg-white/50" />
              <span className="absolute -inset-3 rounded-full border border-white/50 opacity-70 transition group-hover:scale-110" />
              <Icon name="play" className="relative ml-1 h-7 w-7" />
            </button>
          </div>

          <AnimatePresence>
            {videoOpen ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[80] flex items-center justify-center bg-primary-dark/80 p-4 backdrop-blur-sm"
                onClick={() => setVideoOpen(false)}
              >
                <motion.div
                  initial={{ scale: 0.94, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.94, opacity: 0 }}
                  className="relative aspect-video w-full max-w-4xl overflow-hidden rounded-[1.5rem] bg-black shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                >
                  <iframe
                    title="Magic Home brand story"
                    src={siteConfig.videoUrl}
                    className="h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  <button
                    type="button"
                    aria-label="Close video"
                    onClick={() => setVideoOpen(false)}
                    className="absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary"
                  >
                    <Icon name="close" className="h-5 w-5" />
                  </button>
                </motion.div>
              </motion.div>
            ) : null}
          </AnimatePresence>

          <motion.div
            variants={popIn}
            initial={mounted ? "hidden" : false}
            animate={mounted ? "visible" : undefined}
            transition={{ delay: 1.1 }}
            className="absolute -left-2 top-6 hidden sm:block lg:-left-6"
          >
            <motion.div
              variants={floatSoft}
              initial="initial"
              animate="animate"
              className="flex items-center gap-2 rounded-full border border-primary/8 bg-surface px-3.5 py-2 shadow-lg"
            >
              <span className="text-accent">
                <Icon name="star" className="h-4 w-4 fill-current" />
              </span>
              <span className="text-xs font-semibold text-primary">
                5.0 Customer Rating
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            variants={popIn}
            initial={mounted ? "hidden" : false}
            animate={mounted ? "visible" : undefined}
            transition={{ delay: 1.25 }}
            className="absolute -right-2 top-10 hidden md:block lg:-right-4"
          >
            <motion.div
              variants={floatSoft}
              initial="initial"
              animate="animate"
              className="rounded-2xl border border-primary/10 bg-primary px-3.5 py-2.5 text-white shadow-lg"
            >
              <p className="text-xs font-semibold">Trusted by 500+ Homes</p>
              <div className="mt-2 flex -space-x-2">
                {siteConfig.avatarStack.map((src) => (
                  <Image
                    key={src}
                    src={src}
                    alt=""
                    width={28}
                    height={28}
                    className="h-7 w-7 rounded-full border-2 border-primary object-cover"
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={popIn}
            initial={mounted ? "hidden" : false}
            animate={mounted ? "visible" : undefined}
            transition={{ delay: 1.4 }}
            className="absolute -bottom-4 left-4 sm:left-8"
          >
            <motion.div
              variants={floatSoft}
              initial="initial"
              animate="animate"
              className="flex items-center gap-2 rounded-full bg-accent px-3.5 py-2 text-xs font-semibold text-primary-dark shadow-lg"
            >
              <Icon name="leaf" className="h-4 w-4" />
              Eco-Friendly Cleaning
            </motion.div>
          </motion.div>

          <motion.div
            variants={popIn}
            initial={mounted ? "hidden" : false}
            animate={mounted ? "visible" : undefined}
            transition={{ delay: 1.55 }}
            className="absolute -bottom-2 right-4 hidden sm:block sm:right-10"
          >
            <motion.div
              variants={floatSoft}
              initial="initial"
              animate="animate"
              className="flex items-center gap-2 rounded-full border border-primary/10 bg-surface px-3.5 py-2 text-xs font-semibold text-primary shadow-lg"
            >
              <Icon name="shield" className="h-4 w-4 text-primary" />
              Fully Insured
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <div className="h-16 sm:h-20" />
    </section>
  );
}
