"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { siteConfig } from "@/lib/site-config";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { fadeUp, viewportOnce } from "@/lib/animations";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative scroll-mt-28 py-12 pb-16 sm:py-14">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions, Answered."
          description="Everything you need to know before booking your first clean."
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-10 space-y-3"
        >
          {siteConfig.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={faq.question}
                layout
                whileHover={{ y: -2 }}
                className={`overflow-hidden rounded-[1.5rem] border bg-surface shadow-[0_12px_30px_-24px_rgba(15,36,25,0.45)] transition-colors ${
                  isOpen
                    ? "border-accent/50 shadow-[0_18px_40px_-22px_rgba(27,61,47,0.35)]"
                    : "border-primary/8 hover:border-primary/20"
                }`}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
                >
                  <span className="text-base font-semibold text-primary sm:text-lg">
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ type: "spring", stiffness: 320, damping: 22 }}
                    className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                      isOpen
                        ? "bg-accent text-primary-dark"
                        : "bg-primary/5 text-primary"
                    }`}
                  >
                    <Icon name="chevron" className="h-4 w-4" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-sm leading-relaxed text-muted sm:px-6 sm:pb-6 sm:text-base">
                        {faq.answer}
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
