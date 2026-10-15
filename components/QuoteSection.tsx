"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { fadeUp, viewportOnce } from "@/lib/animations";

const fieldClass =
  "w-full rounded-2xl border border-primary/10 bg-surface px-4 py-3 text-sm text-primary outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30";

export function QuoteSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) {
        setStatus("error");
        setMessage(json.error || "Unable to submit. Please try again.");
        return;
      }
      setStatus("success");
      setMessage(json.message);
      form.reset();
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "generate_lead", { method: "quote_form" });
      }
    } catch {
      setStatus("error");
      setMessage("Unable to submit. Please try again.");
    }
  }

  return (
    <section id="quote" className="relative scroll-mt-28 py-12 sm:py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Free Quote"
          title="Get a Free Quote."
          description="Prefer a custom estimate? Tell us about your home and we’ll follow up—usually within one business day. For Home Cleaning configuration, use Book a Cleaning."
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto mt-8 max-w-3xl rounded-[2rem] border border-primary/8 bg-surface p-6 shadow-[0_24px_60px_-35px_rgba(3,44,155,0.45)] sm:p-8"
        >
          <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2" noValidate>
            <label className="block text-sm font-medium text-primary">
              Full name *
              <input name="name" required className={`mt-1.5 ${fieldClass}`} />
            </label>
            <label className="block text-sm font-medium text-primary">
              Phone *
              <input
                name="phone"
                type="tel"
                required
                className={`mt-1.5 ${fieldClass}`}
              />
            </label>
            <label className="block text-sm font-medium text-primary">
              Email *
              <input
                name="email"
                type="email"
                required
                className={`mt-1.5 ${fieldClass}`}
              />
            </label>
            <label className="block text-sm font-medium text-primary">
              ZIP code *
              <input
                name="zip"
                inputMode="numeric"
                pattern="\d{5}"
                maxLength={5}
                required
                placeholder="78701"
                className={`mt-1.5 ${fieldClass}`}
              />
            </label>
            <label className="block text-sm font-medium text-primary sm:col-span-2">
              Service *
              <select name="service" required className={`mt-1.5 ${fieldClass}`}>
                <option value="">Select a service</option>
                {siteConfig.services.map((service) => (
                  <option key={service.id} value={service.id}>
                    {service.title}
                  </option>
                ))}
              </select>
            </label>
            <label className="block text-sm font-medium text-primary">
              Bedrooms
              <select name="bedrooms" className={`mt-1.5 ${fieldClass}`} defaultValue="2">
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </label>
            <label className="block text-sm font-medium text-primary">
              Bathrooms
              <select name="bathrooms" className={`mt-1.5 ${fieldClass}`} defaultValue="2">
                {[1, 1.5, 2, 2.5, 3, 4].map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </label>
            <label className="block text-sm font-medium text-primary sm:col-span-2">
              Preferred date
              <input name="preferredDate" type="date" className={`mt-1.5 ${fieldClass}`} />
            </label>
            <label className="block text-sm font-medium text-primary sm:col-span-2">
              Notes
              <textarea
                name="notes"
                rows={3}
                placeholder="Pets, access notes, add-ons…"
                className={`mt-1.5 resize-y ${fieldClass}`}
              />
            </label>

            <div className="sm:col-span-2">
              <Button type="submit" className="w-full sm:w-auto" magnetic>
                {status === "loading" ? "Sending…" : "Request Free Quote"}
              </Button>
            </div>

            {message ? (
              <p
                role="status"
                className={`sm:col-span-2 flex items-start gap-2 rounded-2xl px-4 py-3 text-sm ${
                  status === "success"
                    ? "bg-accent/20 text-primary-dark"
                    : "bg-red-50 text-red-800"
                }`}
              >
                <Icon
                  name={status === "success" ? "check" : "close"}
                  className="mt-0.5 h-4 w-4 shrink-0"
                />
                {message}
              </p>
            ) : null}
          </form>
        </motion.div>
      </div>
    </section>
  );
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}
