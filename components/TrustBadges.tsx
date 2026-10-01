"use client";

import { siteConfig } from "@/lib/site-config";
import { Icon, type IconName } from "@/components/ui/Icon";

export function TrustBadges() {
  return (
    <section className="relative py-6 sm:py-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-3 rounded-[2rem] border border-primary/8 bg-surface p-4 shadow-[0_16px_40px_-30px_rgba(3,44,155,0.4)] sm:grid-cols-4 sm:gap-4 sm:p-6">
          {siteConfig.trustBadges.map((badge) => (
            <div
              key={badge.id}
              className="flex flex-col items-start gap-2 rounded-2xl p-3 sm:p-4"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gold text-primary-dark">
                <Icon name={badge.icon as IconName} />
              </span>
              <h3 className="text-sm font-bold text-primary sm:text-base">
                {badge.title}
              </h3>
              <p className="text-xs leading-relaxed text-muted sm:text-sm">
                {badge.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
