"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/site-config";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

export function ServiceArea() {
  const [active, setActive] = useState<string>(siteConfig.areas[0]?.id ?? "");
  const activeName =
    siteConfig.areas.find((a) => a.id === active)?.name ?? "Austin";

  return (
    <section id="areas" className="relative scroll-mt-28 py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Service Areas"
          title="Bringing a Little Magic to Your Neighborhood."
          description="We proudly serve Austin and surrounding communities. Select a city to explore coverage—easy to update as we grow."
        />

        <div className="mt-12 grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="relative overflow-hidden rounded-[2rem] border border-primary/8 bg-background p-5 shadow-[0_20px_50px_-35px_rgba(3,44,155,0.4)] sm:p-7"
          >
            <svg
              viewBox="0 0 500 360"
              className="relative z-10 h-auto w-full"
              role="img"
              aria-label="Stylized map highlighting Magic Home service coverage"
            >
              <defs>
                <linearGradient id="usaSoft" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#032C9B" stopOpacity="0.08" />
                  <stop offset="100%" stopColor="#03A4BE" stopOpacity="0.22" />
                </linearGradient>
                <filter id="softGlow">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Soft US-like silhouette */}
              <path
                d="M70 120 C110 70, 170 55, 230 70 C280 50, 340 60, 390 90 C430 110, 450 150, 440 190 C455 230, 430 270, 390 285 C340 310, 280 305, 230 290 C170 310, 110 280, 80 230 C55 190, 50 150, 70 120Z"
                fill="url(#usaSoft)"
                stroke="#032C9B"
                strokeOpacity="0.15"
                strokeWidth="2"
              />

              {/* Highlighted service region */}
              <path
                d="M210 160 C240 130, 290 135, 320 160 C345 185, 340 230, 305 245 C270 260, 225 250, 205 220 C190 195, 195 175, 210 160Z"
                fill="#0163DA"
                fillOpacity="0.55"
                stroke="#032C9B"
                strokeOpacity="0.35"
                strokeWidth="2"
                filter="url(#softGlow)"
              />

              {siteConfig.areas.slice(0, 6).map((area, index) => {
                const positions = [
                  [255, 185],
                  [295, 165],
                  [230, 175],
                  [280, 210],
                  [215, 205],
                  [310, 195],
                ];
                const [cx, cy] = positions[index] ?? [255, 190];
                const isActive = active === area.id;
                return (
                  <g key={area.id} className="cursor-pointer">
                    <circle
                      cx={cx}
                      cy={cy}
                      r={isActive ? 9 : 6}
                      fill={isActive ? "#032C9B" : "#76BC21"}
                      stroke="#ffffff"
                      strokeWidth="2"
                    />
                    {isActive ? (
                      <circle
                        cx={cx}
                        cy={cy}
                        r="16"
                        fill="none"
                        stroke="#032C9B"
                        strokeOpacity="0.35"
                        strokeWidth="1.5"
                      />
                    ) : null}
                  </g>
                );
              })}

              <text
                x="250"
                y="320"
                textAnchor="middle"
                fill="#032C9B"
                fillOpacity="0.55"
                fontSize="13"
                fontWeight="600"
                letterSpacing="2"
              >
                SERVING {activeName.toUpperCase()} & NEARBY
              </text>
            </svg>
          </motion.div>

          <div>
            <motion.h3
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="text-2xl font-extrabold tracking-tight text-primary sm:text-3xl"
            >
              Things to love about cleaning in {activeName}
            </motion.h3>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="mt-3 text-sm leading-relaxed text-muted sm:text-base"
            >
              From busy weeknights to move-in resets, Magic Home keeps homes
              fresh across {activeName} with reliable, eco-conscious care.
            </motion.p>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="mt-6 grid grid-cols-2 gap-3"
            >
              {siteConfig.areas.map((area) => {
                const isActive = active === area.id;
                return (
                  <motion.button
                    key={area.id}
                    type="button"
                    variants={fadeUp}
                    whileHover={{ y: -3, scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setActive(area.id)}
                    className={`rounded-2xl border px-4 py-3.5 text-left transition ${
                      isActive
                        ? "border-primary bg-primary text-white shadow-md"
                        : "border-primary/10 bg-surface text-primary hover:border-primary/25 hover:shadow-sm"
                    }`}
                  >
                    <span
                      className={`block text-[10px] font-semibold uppercase tracking-[0.2em] ${
                        isActive ? "text-accent" : "opacity-70"
                      }`}
                    >
                      City
                    </span>
                    <span className="mt-1 block text-base font-bold">
                      {area.name}
                    </span>
                  </motion.button>
                );
              })}
            </motion.div>

            <div className="mt-7 flex flex-wrap gap-3">
              <Button href="/#quote">Get a Quote</Button>
              <Button
                href={`/areas/${active || siteConfig.areas[0].slug}`}
                variant="secondary"
              >
                View {activeName} Page
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
