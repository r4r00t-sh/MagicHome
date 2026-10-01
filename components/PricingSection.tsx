"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

export function PricingSection() {
  return (
    <section id="pricing" className="relative scroll-mt-28 py-12 sm:py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Transparent Pricing"
          title="Simple Packages. Clear Starting Prices."
          description="Know what to expect before you book. Final quotes depend on home size and condition."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-8 grid gap-4 lg:grid-cols-3"
        >
          {siteConfig.pricing.map((plan) => (
            <motion.article
              key={plan.id}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className={`relative flex h-full flex-col rounded-[1.75rem] border p-7 shadow-[0_18px_40px_-28px_rgba(3,44,155,0.4)] ${
                plan.popular
                  ? "border-accent bg-primary text-white"
                  : "border-primary/8 bg-surface text-primary"
              }`}
            >
              {plan.popular ? (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary-dark">
                  Most Popular
                </span>
              ) : null}
              <h3 className="text-xl font-bold">{plan.name}</h3>
              <p
                className={`mt-2 text-sm ${
                  plan.popular ? "text-white/70" : "text-muted"
                }`}
              >
                {plan.description}
              </p>
              <p className="mt-6 flex items-end gap-1">
                <span className="text-4xl font-extrabold tracking-tight">
                  ${plan.price}
                </span>
                <span
                  className={`pb-1 text-sm ${
                    plan.popular ? "text-white/60" : "text-muted"
                  }`}
                >
                  {plan.frequency}
                </span>
              </p>
              <ul className="mt-6 flex-1 space-y-2.5">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Icon
                      name="check"
                      className={`mt-0.5 h-4 w-4 shrink-0 ${
                        plan.popular ? "text-accent" : "text-primary"
                      }`}
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                href={plan.href}
                variant={plan.popular ? "primary" : "dark"}
                className="mt-8 w-full"
                magnetic
              >
                Get This Package
              </Button>
            </motion.article>
          ))}
        </motion.div>

        <div className="mt-10 rounded-[1.75rem] border border-primary/8 bg-surface p-6 sm:p-8">
          <h3 className="text-lg font-bold text-primary">Popular add-ons</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            {siteConfig.addOns.map((addOn) => (
              <span
                key={addOn.id}
                className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-background px-4 py-2 text-sm font-medium text-primary"
              >
                {addOn.name}
                <span className="text-muted">+${addOn.price}</span>
              </span>
            ))}
          </div>
          <p className="mt-4 text-sm text-muted">
            Recurring weekly and biweekly plans unlock automatic discounts in our{" "}
            <Link href="/#quote" className="font-semibold text-bright underline">
              free quote form
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
