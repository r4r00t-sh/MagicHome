import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { SiteShell } from "@/components/SiteShell";
import { FAQ } from "@/components/FAQ";

export const metadata: Metadata = {
  title: "FAQ",
  description: `Answers to common questions about ${siteConfig.name} cleaning services, pricing, and coverage.`,
};

export default function FaqPage() {
  return (
    <SiteShell>
      <main id="main" className="bg-background pb-16 pt-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <Link href="/" className="text-sm font-semibold text-bright hover:underline">
            ← Back to home
          </Link>
        </div>
        <FAQ />
      </main>
    </SiteShell>
  );
}
