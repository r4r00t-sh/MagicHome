"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/site-config";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { staggerContainer, viewportOnce } from "@/lib/animations";

export function ServicesSection() {
  return (
    <section id="services" className="relative scroll-mt-28 py-20 sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute right-8 top-10 hidden h-40 w-40 sunburst lg:block" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Our Services"
          title="Cleaning That Fits Your Life."
          description="From weekly upkeep to deep resets, choose the care your home needs—and we’ll handle the rest."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {siteConfig.services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
