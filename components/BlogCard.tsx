"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Icon } from "@/components/ui/Icon";
import { fadeUp } from "@/lib/animations";

type BlogCardProps = {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  href: string;
  image: string;
  imageAlt: string;
};

export function BlogCard({
  title,
  excerpt,
  category,
  date,
  href,
  image,
  imageAlt,
}: BlogCardProps) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
      className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-primary/5 bg-surface shadow-[0_18px_40px_-28px_rgba(15,36,25,0.45)] hover:shadow-[0_28px_50px_-24px_rgba(15,36,25,0.35)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-primary-dark/0 transition duration-500 group-hover:bg-primary-dark/15" />
        <motion.span
          whileHover={{ scale: 1.05 }}
          className="absolute left-4 top-4 rounded-full bg-accent px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary-dark shadow-sm"
        >
          {category}
        </motion.span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <time className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
          {date}
        </time>
        <h3 className="mt-2 text-xl font-bold tracking-tight text-primary transition group-hover:text-primary-dark">
          {title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
          {excerpt}
        </p>
        <a
          href={href}
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all duration-300 group-hover:gap-3"
        >
          Read Article
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary/5 transition group-hover:bg-accent group-hover:text-primary-dark">
            <Icon name="arrow" className="h-3.5 w-3.5" />
          </span>
        </a>
      </div>
    </motion.article>
  );
}
