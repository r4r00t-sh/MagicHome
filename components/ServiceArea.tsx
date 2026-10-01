"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ServiceArea() {
  return (
    <section id="areas" className="relative scroll-mt-28 py-12 sm:py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Service Areas"
          title="Greater Austin."
          description="We clean homes across Austin and nearby cities. Pick yours for local details."
        />
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {siteConfig.areas.map((area) => (
            <Link
              key={area.id}
              href={`/areas/${area.slug}`}
              className="rounded-full border border-primary/10 bg-surface px-4 py-2 text-sm font-semibold text-primary transition hover:border-primary hover:bg-primary hover:text-white"
            >
              {area.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
