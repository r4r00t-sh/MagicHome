"use client";

import Image from "next/image";
import { Icon } from "@/components/ui/Icon";
import { siteConfig } from "@/lib/site-config";

type TestimonialCardProps = {
  name: string;
  role: string;
  quote: string;
  rating: number;
  avatar: string;
  source?: string;
};

export function TestimonialCard({
  name,
  role,
  quote,
  rating,
  avatar,
  source = "Google",
}: TestimonialCardProps) {
  return (
    <article className="relative flex h-full w-[85vw] max-w-sm shrink-0 snap-center flex-col overflow-hidden rounded-[1.75rem] bg-primary p-7 text-white shadow-xl md:w-auto md:max-w-none md:shrink md:p-8">
      <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-accent/10 blur-2xl" />
      <div className="relative mb-4 flex items-center justify-between gap-3">
        <div className="flex gap-1 text-accent">
          {Array.from({ length: rating }).map((_, i) => (
            <Icon key={i} name="star" className="h-4 w-4 fill-current" />
          ))}
        </div>
        <a
          href={siteConfig.googleReviewsUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white/80 backdrop-blur transition hover:bg-white/20"
        >
          <Icon name="google" className="h-3.5 w-3.5" />
          {source} Review
        </a>
      </div>
      <p className="relative flex-1 text-lg leading-relaxed text-white/90 sm:text-xl">
        “{quote}”
      </p>
      <div className="relative mt-6 flex items-center gap-3">
        <Image
          src={avatar}
          alt={`${name} avatar`}
          width={48}
          height={48}
          className="h-12 w-12 rounded-full object-cover ring-2 ring-accent/40"
        />
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-sm text-white/60">{role}</p>
        </div>
      </div>
    </article>
  );
}
