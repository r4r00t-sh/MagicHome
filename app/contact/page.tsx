import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { SiteShell } from "@/components/SiteShell";
import { QuoteSection } from "@/components/QuoteSection";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: `Contact | ${siteConfig.name}`,
  description: `Contact Magic Home for professional home cleaning in Austin. Call ${siteConfig.phone} or request a free quote.`,
};

export default function ContactPage() {
  return (
    <SiteShell>
      <main id="main" className="bg-background pb-16 pt-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h1 className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl">
            Contact Magic Home
          </h1>
          <p className="mt-4 max-w-2xl text-muted">
            Reach us by phone, email, or the quote form below. We typically respond
            within one business day.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <a
              href={siteConfig.phoneHref}
              className="rounded-[1.5rem] border border-primary/8 bg-surface p-5 shadow-sm"
            >
              <Icon name="phone" className="h-5 w-5 text-primary" />
              <p className="mt-3 font-bold text-primary">{siteConfig.phone}</p>
              <p className="text-sm text-muted">Tap to call</p>
            </a>
            <a
              href={siteConfig.emailHref}
              className="rounded-[1.5rem] border border-primary/8 bg-surface p-5 shadow-sm"
            >
              <Icon name="mail" className="h-5 w-5 text-primary" />
              <p className="mt-3 font-bold text-primary">{siteConfig.email}</p>
              <p className="text-sm text-muted">Email us</p>
            </a>
            <div className="rounded-[1.5rem] border border-primary/8 bg-surface p-5 shadow-sm">
              <Icon name="map" className="h-5 w-5 text-primary" />
              <p className="mt-3 font-bold text-primary">{siteConfig.address}</p>
              <p className="text-sm text-muted">{siteConfig.hours}</p>
            </div>
          </div>

          <div className="mt-8">
            <Button href="/#quote">Request a quote</Button>
          </div>
        </div>
        <QuoteSection />
      </main>
    </SiteShell>
  );
}
