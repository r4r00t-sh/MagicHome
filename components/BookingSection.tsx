"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/site-config";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { fadeUp, viewportOnce } from "@/lib/animations";

export function BookingSection() {
  const [depositPaid, setDepositPaid] = useState(false);

  return (
    <section id="booking" className="relative scroll-mt-28 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Online Booking"
          title="Pick a Time. Secure Your Spot."
          description="Use our scheduling embed for real availability. A small deposit holds your appointment—applied to your first clean."
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div className="overflow-hidden rounded-[2rem] border border-primary/8 bg-surface shadow-[0_20px_50px_-30px_rgba(3,44,155,0.45)]">
            <div className="border-b border-primary/8 bg-primary/5 px-5 py-3 text-sm font-medium text-primary">
              Scheduling calendar (Cal.com / Launch27 ready)
            </div>
            <div className="flex min-h-[420px] flex-col items-center justify-center gap-4 bg-[#f3f7f4] p-6 text-center">
              <Icon name="clock" className="h-10 w-10 text-primary" />
              <p className="max-w-sm text-sm text-muted">
                Embed your live calendar here by setting{" "}
                <code className="rounded bg-white px-1.5 py-0.5 text-xs">
                  bookingEmbedUrl
                </code>{" "}
                in site config. Demo mode shows the booking shell.
              </p>
              <a
                href={siteConfig.bookingEmbedUrl}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold text-bright underline"
              >
                Open scheduling link
              </a>
              <iframe
                title="Booking calendar placeholder"
                src="about:blank"
                className="hidden h-[360px] w-full rounded-2xl border border-primary/10 bg-white"
              />
            </div>
          </div>

          <div className="rounded-[2rem] border border-primary/8 bg-surface p-6 sm:p-8">
            <h3 className="text-xl font-bold text-primary">Secure deposit</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Pay a ${siteConfig.depositAmount} deposit to confirm your booking.
              This is a Stripe-ready checkout placeholder—connect your payment
              provider when going live.
            </p>

            <ul className="mt-6 space-y-2 text-sm text-primary">
              <li className="flex gap-2">
                <Icon name="check" className="h-4 w-4 text-accent" />
                Applied to your first cleaning invoice
              </li>
              <li className="flex gap-2">
                <Icon name="check" className="h-4 w-4 text-accent" />
                Card details never stored on this demo site
              </li>
              <li className="flex gap-2">
                <Icon name="check" className="h-4 w-4 text-accent" />
                Reschedule with 24-hour notice
              </li>
            </ul>

            {!depositPaid ? (
              <Button
                type="button"
                className="mt-8 w-full"
                magnetic
                onClick={() => {
                  setDepositPaid(true);
                  if (typeof window !== "undefined" && window.gtag) {
                    window.gtag("event", "begin_checkout", {
                      value: siteConfig.depositAmount,
                      currency: "USD",
                    });
                  }
                }}
              >
                Pay ${siteConfig.depositAmount} Deposit (Demo)
              </Button>
            ) : (
              <p
                role="status"
                className="mt-8 rounded-2xl bg-accent/25 px-4 py-3 text-sm font-medium text-primary-dark"
              >
                Deposit recorded in demo mode. Connect Stripe Checkout to collect
                real payments.
              </p>
            )}

            <Button href="/#quote" variant="ghost" className="mt-3 w-full">
              Or request a quote first
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
