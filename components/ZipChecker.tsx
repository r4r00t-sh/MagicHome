"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { siteConfig, isZipServed } from "@/lib/site-config";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { fadeUp, viewportOnce } from "@/lib/animations";

export function ZipChecker() {
  const [zip, setZip] = useState("");
  const [result, setResult] = useState<"idle" | "yes" | "no" | "invalid">("idle");

  function check() {
    if (!/^\d{5}$/.test(zip.trim())) {
      setResult("invalid");
      return;
    }
    setResult(isZipServed(zip.trim()) ? "yes" : "no");
  }

  return (
    <section className="relative py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="rounded-[2rem] border border-primary/8 bg-primary px-6 py-8 text-white sm:px-10 sm:py-10"
        >
          <div className="grid items-end gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <SectionHeading
                light
                align="left"
                eyebrow="Service Coverage"
                title="Do We Serve Your ZIP?"
                description="Enter your ZIP code to confirm Magic Home coverage in Greater Austin."
                className="!mx-0 !max-w-xl !text-left"
              />
            </div>
            <div>
              <div className="flex flex-col gap-2 sm:flex-row">
                <input
                  value={zip}
                  onChange={(e) => {
                    setZip(e.target.value);
                    setResult("idle");
                  }}
                  maxLength={5}
                  inputMode="numeric"
                  placeholder="e.g. 78701"
                  aria-label="ZIP code"
                  className="w-full rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-white/50 outline-none focus:border-accent"
                />
                <Button type="button" onClick={check} className="shrink-0">
                  Check
                </Button>
              </div>
              {result !== "idle" ? (
                <p className="mt-3 flex items-center gap-2 text-sm text-white/85">
                  <Icon
                    name={result === "yes" ? "check" : "close"}
                    className="h-4 w-4 text-accent"
                  />
                  {result === "yes" && "Great news — we serve your area."}
                  {result === "no" &&
                    "Not listed yet — still request a quote and we’ll confirm."}
                  {result === "invalid" && "Please enter a valid 5-digit ZIP."}
                </p>
              ) : (
                <p className="mt-3 text-xs text-white/55">
                  Serving {siteConfig.areas.length}+ communities ·{" "}
                  <Link href="/#quote" className="text-bright underline hover:text-primary">
                    Or get a quote
                  </Link>
                </p>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
