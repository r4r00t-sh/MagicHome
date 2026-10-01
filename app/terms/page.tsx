import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { SiteShell } from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `Terms and conditions for ${siteConfig.name} home cleaning services.`,
};

export default function TermsPage() {
  return (
    <SiteShell>
      <main id="main" className="bg-background px-4 pb-24 pt-28 sm:px-6">
        <article className="mx-auto max-w-3xl">
          <Link href="/" className="text-sm font-semibold text-bright hover:underline">
            ← Back to home
          </Link>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-primary">
            Terms & Conditions
          </h1>
          <p className="mt-2 text-sm text-muted">Last updated: March 2026</p>
          <div className="mt-8 space-y-4 text-base leading-relaxed text-muted">
            <p>
              By requesting a quote or booking Magic Home services, you agree to
              provide accurate access information and a safe working environment for
              our team.
            </p>
            <p>
              Quotes are estimates based on the details you provide. Final pricing
              may change if home condition or scope differs on arrival. Recurring
              plans may be paused or cancelled with reasonable notice.
            </p>
            <p>
              Satisfaction guarantee: if something was missed on the checklist,
              contact us within 24 hours and we will make it right. Deposits, when
              collected, are applied toward your scheduled service.
            </p>
            <p>
              Questions? Email {siteConfig.email} or call {siteConfig.phone}.
            </p>
          </div>
        </article>
      </main>
    </SiteShell>
  );
}
