import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { SiteShell } from "@/components/SiteShell";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: `Pricing | ${siteConfig.name}`,
  description:
    "Transparent starting prices for standard, deep, and move-in/out cleaning packages in Austin.",
};

export default function PricingPage() {
  return (
    <SiteShell>
      <main id="main" className="bg-background pb-24 pt-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary/70">
            Pricing
          </p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-primary sm:text-5xl">
            Packages built for real homes.
          </h1>
          <p className="mt-4 max-w-2xl text-muted">
            Starting prices below. Final quotes depend on size and condition—use
            the calculator or request a free estimate.
          </p>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {siteConfig.pricing.map((plan) => (
              <article
                key={plan.id}
                className={`flex flex-col rounded-[1.75rem] border p-7 ${
                  plan.popular
                    ? "border-accent bg-primary text-white"
                    : "border-primary/8 bg-surface"
                }`}
              >
                <h2 className="text-xl font-bold">{plan.name}</h2>
                <p
                  className={`mt-2 text-sm ${
                    plan.popular ? "text-white/70" : "text-muted"
                  }`}
                >
                  {plan.description}
                </p>
                <p className="mt-6 text-4xl font-extrabold">${plan.price}</p>
                <ul className="mt-6 flex-1 space-y-2 text-sm">
                  {plan.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <Icon name="check" className="h-4 w-4 shrink-0 text-accent" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button href="/#quote" className="mt-8" variant={plan.popular ? "primary" : "dark"}>
                  Get a Quote
                </Button>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-[1.75rem] border border-primary/8 bg-surface p-6">
            <h3 className="font-bold text-primary">Add-ons</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {siteConfig.addOns.map((a) => (
                <span
                  key={a.id}
                  className="rounded-full bg-background px-3 py-1.5 text-sm text-primary"
                >
                  {a.name} · ${a.price}
                </span>
              ))}
            </div>
            <Link
              href="/#estimate"
              className="mt-4 inline-block text-sm font-semibold text-bright underline"
            >
              Open estimate calculator →
            </Link>
          </div>
        </div>
      </main>
    </SiteShell>
  );
}
