"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/site-config";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BlogCard } from "@/components/BlogCard";
import { staggerContainer, viewportOnce } from "@/lib/animations";

export function BlogSection() {
  return (
    <section id="blog" className="relative scroll-mt-28 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Recent Blog Posts"
          title="Helpful Tips for a Happier Home."
          description="Practical ideas to keep your space fresh between professional visits."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {siteConfig.blogPosts.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
