"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/site-config";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

export function BeforeAfter() {
  return (
    <section id="projects" className="relative scroll-mt-28 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Our Projects"
          title="Before & After That Speak for Themselves."
          description="Real transformations from kitchens, baths, and living spaces across Greater Austin."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 grid gap-6 md:grid-cols-3"
        >
          {siteConfig.beforeAfter.map((item) => (
            <CompareCard key={item.id} {...item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function CompareCard({
  title,
  caption,
  before,
  after,
}: {
  title: string;
  caption: string;
  before: string;
  after: string;
}) {
  const [showAfter, setShowAfter] = useState(true);

  return (
    <motion.article
      variants={fadeUp}
      className="overflow-hidden rounded-[1.75rem] border border-primary/8 bg-surface shadow-[0_18px_40px_-28px_rgba(3,44,155,0.4)]"
    >
      <div className="relative aspect-[4/3]">
        <Image
          src={showAfter ? after : before}
          alt={`${title} ${showAfter ? "after" : "before"}`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />
        <span className="absolute left-3 top-3 rounded-full bg-primary px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
          {showAfter ? "After" : "Before"}
        </span>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-primary">{title}</h3>
        <p className="mt-1 text-sm text-muted">{caption}</p>
        <div className="mt-4 flex gap-2">
          <button
            type="button"
            onClick={() => setShowAfter(false)}
            className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
              !showAfter
                ? "bg-primary text-white"
                : "bg-primary/5 text-primary"
            }`}
          >
            Before
          </button>
          <button
            type="button"
            onClick={() => setShowAfter(true)}
            className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
              showAfter
                ? "bg-accent text-primary-dark"
                : "bg-primary/5 text-primary"
            }`}
          >
            After
          </button>
        </div>
      </div>
    </motion.article>
  );
}
