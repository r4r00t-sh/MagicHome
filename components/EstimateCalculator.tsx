"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { siteConfig, estimatePrice } from "@/lib/site-config";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { fadeUp, viewportOnce } from "@/lib/animations";

export function EstimateCalculator() {
  const [serviceId, setServiceId] = useState<string>(siteConfig.services[0].id);
  const [bedrooms, setBedrooms] = useState(2);
  const [bathrooms, setBathrooms] = useState(2);
  const [frequency, setFrequency] = useState<
    "one-time" | "weekly" | "biweekly" | "monthly"
  >("biweekly");
  const [addOnIds, setAddOnIds] = useState<string[]>([]);

  const total = useMemo(
    () =>
      estimatePrice({
        serviceId,
        bedrooms,
        bathrooms,
        frequency,
        addOnIds,
      }),
    [serviceId, bedrooms, bathrooms, frequency, addOnIds]
  );

  function toggleAddOn(id: string) {
    setAddOnIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  }

  return (
    <section id="estimate" className="relative scroll-mt-28 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Instant Estimate"
          title="Price Your Clean in Seconds."
          description="Adjust rooms, frequency, and add-ons for a transparent starting estimate—then book or request a final quote."
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto mt-12 grid max-w-5xl gap-6 rounded-[2rem] border border-primary/8 bg-surface p-6 shadow-[0_24px_60px_-35px_rgba(3,44,155,0.4)] lg:grid-cols-[1.2fr_0.8fr] lg:p-8"
        >
          <div className="space-y-4">
            <label className="block text-sm font-medium text-primary">
              Service
              <select
                value={serviceId}
                onChange={(e) => setServiceId(e.target.value)}
                className="mt-1.5 w-full rounded-2xl border border-primary/10 px-4 py-3 text-sm outline-none focus:border-accent"
              >
                {siteConfig.services.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.title}
                  </option>
                ))}
              </select>
            </label>

            <div className="grid grid-cols-2 gap-4">
              <label className="block text-sm font-medium text-primary">
                Bedrooms
                <input
                  type="range"
                  min={1}
                  max={6}
                  value={bedrooms}
                  onChange={(e) => setBedrooms(Number(e.target.value))}
                  className="mt-3 w-full accent-primary"
                />
                <span className="text-muted">{bedrooms}</span>
              </label>
              <label className="block text-sm font-medium text-primary">
                Bathrooms
                <input
                  type="range"
                  min={1}
                  max={4}
                  step={0.5}
                  value={bathrooms}
                  onChange={(e) => setBathrooms(Number(e.target.value))}
                  className="mt-3 w-full accent-primary"
                />
                <span className="text-muted">{bathrooms}</span>
              </label>
            </div>

            <fieldset>
              <legend className="text-sm font-medium text-primary">Frequency</legend>
              <div className="mt-2 flex flex-wrap gap-2">
                {(
                  [
                    ["one-time", "One-time"],
                    ["weekly", "Weekly (−15%)"],
                    ["biweekly", "Biweekly (−10%)"],
                    ["monthly", "Monthly (−5%)"],
                  ] as const
                ).map(([value, label]) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setFrequency(value)}
                    className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
                      frequency === value
                        ? "bg-primary text-white"
                        : "bg-primary/5 text-primary"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </fieldset>

            <fieldset>
              <legend className="text-sm font-medium text-primary">Add-ons</legend>
              <div className="mt-2 flex flex-wrap gap-2">
                {siteConfig.addOns.map((addOn) => {
                  const active = addOnIds.includes(addOn.id);
                  return (
                    <button
                      key={addOn.id}
                      type="button"
                      onClick={() => toggleAddOn(addOn.id)}
                      className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
                        active
                          ? "bg-accent text-primary-dark"
                          : "bg-primary/5 text-primary"
                      }`}
                    >
                      {addOn.name} (+${addOn.price})
                    </button>
                  );
                })}
              </div>
            </fieldset>
          </div>

          <div className="flex flex-col justify-between rounded-[1.5rem] bg-primary p-6 text-white">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mint">
                Estimated total
              </p>
              <p className="mt-3 text-5xl font-extrabold tracking-tight">${total}</p>
              <p className="mt-2 text-sm text-white/70">
                Includes a ${siteConfig.depositAmount} booking deposit when you
                schedule online. Final price confirmed before service.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-2">
              <Button href="/#booking" magnetic>
                Schedule & Pay Deposit
              </Button>
              <Button href="/#quote" variant="outline">
                Prefer a Custom Quote?
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
