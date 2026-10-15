"use client";

import { siteConfig } from "@/lib/site-config";
import {
  BookingPriceBreakdown,
  BookingSelections,
  formatMoney,
  getFrequencyOption,
} from "@/lib/booking";

type ReviewStepProps = {
  selections: BookingSelections;
  price: BookingPriceBreakdown;
  submitting: boolean;
  error: string;
};

export function ReviewStep({
  selections,
  price,
  submitting,
  error,
}: ReviewStepProps) {
  const frequency = getFrequencyOption(selections.frequency);
  const service =
    siteConfig.services.find((s) => s.id === selections.serviceId)?.title ??
    "Home Cleaning";

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-extrabold tracking-tight text-primary">
          Review & submit
        </h2>
        <p className="mt-2 text-sm text-muted">
          Confirm your details. Your booking is not confirmed until submission
          succeeds.
        </p>
      </div>

      {error ? (
        <div
          role="alert"
          className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
        >
          {error}
        </div>
      ) : null}

      {submitting ? (
        <p className="text-sm font-medium text-primary">Submitting booking…</p>
      ) : null}

      <div className="grid gap-4 rounded-[1.5rem] border border-primary/8 bg-background p-5 sm:grid-cols-2">
        <ReviewItem label="Service" value={service} />
        <ReviewItem
          label="Team"
          value={`${selections.cleaners} cleaner${selections.cleaners > 1 ? "s" : ""} · ${selections.hours} hours`}
        />
        <ReviewItem
          label="Materials"
          value={selections.materials ? "Yes" : "No"}
        />
        <ReviewItem
          label="Frequency"
          value={`${frequency?.label ?? selections.frequency}${
            price.discountPercent > 0
              ? ` (−${price.discountPercent}% per visit)`
              : ""
          }`}
        />
        <ReviewItem label="Name" value={selections.name} />
        <ReviewItem label="Phone" value={selections.phone} />
        <ReviewItem label="Email" value={selections.email} />
        <ReviewItem label="ZIP" value={selections.zip} />
        <ReviewItem
          label="Address"
          value={selections.address}
          className="sm:col-span-2"
        />
        <ReviewItem
          label="Preferred schedule"
          value={`${selections.preferredDate}${
            selections.preferredTime ? ` · ${selections.preferredTime}` : ""
          }`}
        />
        <ReviewItem
          label="Estimated total"
          value={`${formatMoney(price.total)} per visit`}
        />
        {selections.specialInstructions ? (
          <ReviewItem
            label="Special instructions"
            value={selections.specialInstructions}
            className="sm:col-span-2"
          />
        ) : null}
      </div>

      {price.placeholders.length > 0 ? (
        <div className="rounded-2xl border border-gold/40 bg-gold/10 px-4 py-3 text-xs text-primary">
          <p className="font-semibold">Configurable placeholders in this estimate</p>
          <ul className="mt-2 list-disc space-y-1 pl-4">
            {price.placeholders.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

function ReviewItem({
  label,
  value,
  className = "",
}: {
  label: string;
  value: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
        {label}
      </p>
      <p className="mt-1 text-sm font-medium text-primary">{value}</p>
    </div>
  );
}
