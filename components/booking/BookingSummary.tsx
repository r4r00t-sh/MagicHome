"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site-config";
import {
  BookingPriceBreakdown,
  BookingSelections,
  formatMoney,
  getFrequencyOption,
} from "@/lib/booking";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

type BookingSummaryProps = {
  selections: BookingSelections;
  price: BookingPriceBreakdown;
  continueLabel: string;
  onContinue: () => void;
  continueDisabled?: boolean;
  showBack?: boolean;
  onBack?: () => void;
};

export function BookingSummary({
  selections,
  price,
  continueLabel,
  onContinue,
  continueDisabled = false,
  showBack = false,
  onBack,
}: BookingSummaryProps) {
  const [expanded, setExpanded] = useState(true);
  const frequency = getFrequencyOption(selections.frequency);
  const service =
    siteConfig.services.find((s) => s.id === selections.serviceId) ??
    siteConfig.services[0];

  return (
    <aside className="rounded-[1.75rem] border border-primary/8 bg-surface p-5 shadow-[0_18px_40px_-28px_rgba(3,44,155,0.35)] sm:p-6">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/70">
            Booking summary
          </p>
          <p className="mt-1 text-sm font-medium text-muted">{service.title}</p>
        </div>
        <button
          type="button"
          aria-expanded={expanded}
          onClick={() => setExpanded((v) => !v)}
          className="inline-flex items-center gap-1 rounded-full border border-primary/10 px-3 py-1.5 text-xs font-semibold text-primary"
        >
          Total
          <Icon
            name="chevron"
            className={`h-3.5 w-3.5 transition ${expanded ? "rotate-180" : ""}`}
          />
        </button>
      </div>

      <div className="mt-4 flex items-end justify-between gap-3">
        <div>
          <p className="text-3xl font-extrabold tracking-tight text-primary">
            {formatMoney(price.total)}
          </p>
          <p className="mt-1 text-xs text-muted">
            Estimated {price.amountScope}
            {price.discountPercent > 0
              ? ` · includes ${price.discountPercent}% recurring discount`
              : ""}
          </p>
        </div>
      </div>

      {expanded ? (
        <div className="mt-5 space-y-3 border-t border-primary/8 pt-4">
          <SummaryRow
            label="Cleaners"
            value={`${selections.cleaners}`}
          />
          <SummaryRow label="Duration" value={`${selections.hours} hours`} />
          <SummaryRow
            label="Materials"
            value={selections.materials ? "Yes" : "No"}
          />
          <SummaryRow
            label="Frequency"
            value={frequency?.label ?? selections.frequency}
          />

          <div className="space-y-2 border-t border-primary/8 pt-3">
            {price.lines.map((line) => (
              <div key={line.id} className="space-y-0.5">
                <div className="flex items-start justify-between gap-3 text-sm">
                  <span className="text-muted">{line.label}</span>
                  <span
                    className={`font-semibold tabular-nums ${
                      line.amount < 0 ? "text-accent" : "text-primary"
                    }`}
                  >
                    {formatMoney(line.amount)}
                  </span>
                </div>
                {line.note ? (
                  <p className="text-[11px] leading-snug text-muted/80">
                    {line.isPlaceholder ? "Placeholder: " : ""}
                    {line.note}
                  </p>
                ) : null}
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between border-t border-primary/8 pt-3 text-sm font-bold text-primary">
            <span>Estimated total</span>
            <span className="tabular-nums">{formatMoney(price.total)}</span>
          </div>
          <p className="text-[11px] text-muted">
            Amounts shown are estimates for a single visit. Final pricing is
            confirmed before service.
          </p>
        </div>
      ) : null}

      <div className="mt-5 flex flex-col gap-2">
        <Button
          type="button"
          className="w-full"
          magnetic
          onClick={onContinue}
          ariaLabel={continueLabel}
        >
          {continueDisabled ? "…" : continueLabel}
        </Button>
        {showBack && onBack ? (
          <Button type="button" variant="ghost" className="w-full" onClick={onBack}>
            Back
          </Button>
        ) : null}
      </div>
    </aside>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-3 text-sm">
      <span className="text-muted">{label}</span>
      <span className="font-semibold text-primary">{value}</span>
    </div>
  );
}
