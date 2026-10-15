import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { SiteShell } from "@/components/SiteShell";
import { BookingWizard } from "@/components/booking/BookingWizard";

export const metadata: Metadata = {
  title: "Book Home Cleaning",
  description:
    "Configure cleaners, hours, materials, and frequency for Magic Home cleaning, then submit your booking request.",
};

type Props = {
  searchParams: Promise<{ service?: string }>;
};

export default async function BookPage({ searchParams }: Props) {
  const params = await searchParams;
  const requested = params.service?.trim();
  const serviceId =
    siteConfig.services.some((s) => s.id === requested)
      ? requested
      : siteConfig.booking.serviceId;

  return (
    <SiteShell>
      <main id="main" className="bg-background pb-24 pt-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Link
            href="/services/regular-house-cleaning"
            className="text-sm font-semibold text-bright hover:underline"
          >
            ← Home Cleaning
          </Link>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
            Book Home Cleaning
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-muted sm:text-base">
            Choose your team size, duration, materials, and frequency. The estimate
            updates as you go. Your booking is only confirmed after we accept the
            request.
          </p>

          <div className="mt-8">
            <BookingWizard initialServiceId={serviceId} />
          </div>
        </div>
      </main>
    </SiteShell>
  );
}
