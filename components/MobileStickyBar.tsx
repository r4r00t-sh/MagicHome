"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { Icon } from "@/components/ui/Icon";

export function MobileStickyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-primary/10 bg-surface/95 p-3 shadow-[0_-8px_30px_-12px_rgba(3,44,155,0.35)] backdrop-blur-xl md:hidden">
      <div className="mx-auto flex max-w-lg gap-2">
        <a
          href={siteConfig.phoneHref}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-primary/15 bg-surface px-4 py-3 text-sm font-semibold text-primary"
        >
          <Icon name="phone" className="h-4 w-4" />
          Call
        </a>
        <Link
          href="/book"
          className="btn-shine inline-flex flex-1 items-center justify-center overflow-hidden rounded-full bg-accent px-4 py-3 text-sm font-semibold text-primary-dark"
        >
          Book / Quote
        </Link>
      </div>
    </div>
  );
}
