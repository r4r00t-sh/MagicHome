"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { siteConfig, isCommunityServed } from "@/lib/site-config";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { fadeUp, viewportOnce } from "@/lib/animations";

export function ZipChecker() {
  const [community, setCommunity] = useState("");
  const [result, setResult] = useState<"idle" | "yes" | "no" | "invalid">("idle");

  function check() {
    if (!community.trim()) {
      setResult("invalid");
      return;
    }
    setResult(isCommunityServed(community.trim()) ? "yes" : "no");
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
                title="Do We Serve Your Area?"
                description="Select your Dubai community to confirm Dubai Magic Home coverage."
                className="!mx-0 !max-w-xl !text-left"
              />
            </div>
            <div>
              <div className="flex flex-col gap-2 sm:flex-row">
                <select
                  value={community}
                  onChange={(e) => {
                    setCommunity(e.target.value);
                    setResult("idle");
                  }}
                  aria-label="Dubai community"
                  className="w-full rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm text-white outline-none focus:border-accent"
                >
                  <option value="" className="text-primary">
                    Select community
                  </option>
                  {siteConfig.areas.map((area) => (
                    <option key={area.slug} value={area.slug} className="text-primary">
                      {area.name}
                    </option>
                  ))}
                </select>
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
                  {result === "yes" && "Great news — we serve your Dubai community."}
                  {result === "no" &&
                    "Not listed yet — still request a quote and we’ll confirm."}
                  {result === "invalid" && "Please select a Dubai community."}
                </p>
              ) : (
                <p className="mt-3 text-xs text-white/55">
                  Serving {siteConfig.areas.length}+ Dubai communities ·{" "}
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
