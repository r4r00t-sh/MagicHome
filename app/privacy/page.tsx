import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { SiteShell } from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${siteConfig.name} home cleaning services.`,
};

export default function PrivacyPage() {
  return (
    <SiteShell>
      <main id="main" className="bg-background px-4 pb-24 pt-28 sm:px-6">
        <article className="mx-auto max-w-3xl">
          <Link href="/" className="text-sm font-semibold text-bright hover:underline">
            ← Back to home
          </Link>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-primary">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-muted">Last updated: March 2026</p>
          <div className="mt-8 space-y-4 text-base leading-relaxed text-muted">
            <p>
              Magic Home (“we”, “us”) collects information you submit through quote
              forms, booking requests, and newsletter signups—typically your name,
              email, phone, address or ZIP, and service preferences.
            </p>
            <p>
              We use this information to respond to inquiries, schedule services,
              improve our website, and (if you opt in) send occasional updates. We
              do not sell your personal information.
            </p>
            <p>
              We may use trusted processors (email delivery, analytics, scheduling)
              who only handle data as needed to provide those services. Contact us
              at {siteConfig.email} to request access, correction, or deletion of
              your data.
            </p>
          </div>
        </article>
      </main>
    </SiteShell>
  );
}
