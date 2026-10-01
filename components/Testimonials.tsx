"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { siteConfig } from "@/lib/site-config";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TestimonialCard } from "@/components/TestimonialCard";
import { Icon } from "@/components/ui/Icon";
import { fadeUp, floatSoft, viewportOnce } from "@/lib/animations";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const total = siteConfig.testimonials.length;

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % total);
    }, 5200);
    return () => window.clearInterval(id);
  }, [total]);

  return (
    <section id="reviews" className="relative scroll-mt-28 overflow-hidden py-12 sm:py-14">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Testimonials"
          title="Loved by Homeowners."
          description="Real stories from families who came home to a little more magic."
        />
        <div className="mt-4 text-center">
          <a
            href={siteConfig.googleReviewsUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-surface px-4 py-2 text-sm font-semibold text-primary shadow-sm transition hover:border-accent"
          >
            <Icon name="google" className="h-4 w-4" />
            Read more Google reviews
          </a>
        </div>

        <div className="relative mx-auto mt-6 flex h-16 max-w-lg items-center justify-center">
          {siteConfig.testimonials.map((item, i) => {
            const offsets = [-72, 0, 72];
            const sizes = [52, 64, 52];
            const isActive = index === i;
            return (
              <motion.button
                key={item.id}
                type="button"
                onClick={() => setIndex(i)}
                variants={floatSoft}
                initial="initial"
                animate="animate"
                transition={{ delay: i * 0.35 }}
                className="absolute"
                style={{
                  left: `calc(50% + ${offsets[i]}px)`,
                  transform: "translateX(-50%)",
                  zIndex: isActive ? 3 : 1,
                }}
                aria-label={`Show review from ${item.name}`}
              >
                <motion.div
                  animate={{
                    scale: isActive ? 1.12 : 1,
                    boxShadow: isActive
                      ? "0 0 0 3px rgba(200,245,66,0.85)"
                      : "0 0 0 0px transparent",
                  }}
                  className="rounded-full"
                >
                  <Image
                    src={item.avatar}
                    alt=""
                    width={sizes[i]}
                    height={sizes[i]}
                    className="rounded-full border-4 border-background object-cover shadow-md"
                    style={{ width: sizes[i], height: sizes[i] }}
                  />
                </motion.div>
              </motion.button>
            );
          })}
        </div>

        {/* Mobile / tablet carousel */}
        <div className="relative mt-6 md:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={siteConfig.testimonials[index].id}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="flex justify-center"
            >
              <TestimonialCard {...siteConfig.testimonials[index]} />
            </motion.div>
          </AnimatePresence>

          <div className="mt-5 flex items-center justify-center gap-3">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() => setIndex((prev) => (prev - 1 + total) % total)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary/15 bg-surface text-primary transition hover:bg-accent"
            >
              <Icon name="arrow" className="h-4 w-4 rotate-180" />
            </button>
            <div className="flex gap-2">
              {siteConfig.testimonials.map((item, i) => (
                <button
                  key={item.id}
                  type="button"
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-2.5 rounded-full transition-all ${
                    i === index ? "w-7 bg-accent" : "w-2.5 bg-primary/20"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() => setIndex((prev) => (prev + 1) % total)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary/15 bg-surface text-primary transition hover:bg-accent"
            >
              <Icon name="arrow" className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Desktop grid */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-4 hidden gap-5 md:grid md:grid-cols-3"
        >
          {siteConfig.testimonials.map((item, i) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -8, scale: 1.02 }}
              animate={{
                opacity: index === i ? 1 : 0.72,
                scale: index === i ? 1.02 : 1,
              }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              onMouseEnter={() => setIndex(i)}
              className="cursor-pointer"
            >
              <TestimonialCard {...item} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
