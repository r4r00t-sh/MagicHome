"use client";

import { siteConfig } from "@/lib/site-config";
import { BookingSelections } from "@/lib/booking";
import { OptionChip } from "@/components/booking/OptionChip";

const fieldClass =
  "w-full rounded-2xl border border-primary/10 bg-surface px-4 py-3 text-sm text-primary outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30";

type CleaningDetailsStepProps = {
  selections: BookingSelections;
  onChange: (patch: Partial<BookingSelections>) => void;
  errors: string[];
};

export function CleaningDetailsStep({
  selections,
  onChange,
  errors,
}: CleaningDetailsStepProps) {
  const max = siteConfig.booking.specialInstructionsMax;
  const remaining = max - selections.specialInstructions.length;

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-extrabold tracking-tight text-primary">
          Cleaning details
        </h2>
        <p className="mt-2 text-sm text-muted">
          Configure your Home Cleaning visit. Your selections stay saved as you
          continue.
        </p>
      </div>

      {errors.length > 0 ? (
        <div
          role="alert"
          className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
        >
          <ul className="list-disc space-y-1 pl-4">
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        </div>
      ) : null}

      <fieldset>
        <legend className="text-sm font-semibold text-primary">
          Number of cleaners
        </legend>
        <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {siteConfig.booking.cleanerOptions.map((count) => (
            <OptionChip
              key={count}
              selected={selections.cleaners === count}
              onClick={() => onChange({ cleaners: count })}
              ariaLabel={`${count} cleaner${count > 1 ? "s" : ""}`}
            >
              {count}
            </OptionChip>
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend className="text-sm font-semibold text-primary">
          Cleaning duration
        </legend>
        <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {siteConfig.booking.durationOptions.map((hours) => (
            <OptionChip
              key={hours}
              selected={selections.hours === hours}
              onClick={() => onChange({ hours })}
              ariaLabel={`${hours} hours`}
            >
              {hours} hours
            </OptionChip>
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend className="text-sm font-semibold text-primary">
          Cleaning materials
        </legend>
        <p className="mt-1 text-xs text-muted">
          {siteConfig.booking.materials.fee == null
            ? "Placeholder: materials fee is not configured yet ($0 until set in site config)."
            : `Materials add $${siteConfig.booking.materials.fee} if needed.`}
        </p>
        <div className="mt-3 grid grid-cols-2 gap-2">
          <OptionChip
            selected={!selections.materials}
            onClick={() => onChange({ materials: false })}
          >
            No
          </OptionChip>
          <OptionChip
            selected={selections.materials}
            onClick={() => onChange({ materials: true })}
          >
            Yes
          </OptionChip>
        </div>
      </fieldset>

      <fieldset>
        <legend className="text-sm font-semibold text-primary">
          Cleaning frequency
        </legend>
        <div className="mt-3 grid gap-2">
          {siteConfig.booking.frequencies.map((option) => {
            const selected = selections.frequency === option.id;
            const discountText =
              option.discountPercent == null
                ? "No discount configured"
                : option.discountPercent > 0
                  ? `−${option.discountPercent}% per visit`
                  : "No discount";
            return (
              <button
                key={option.id}
                type="button"
                aria-pressed={selected}
                onClick={() => onChange({ frequency: option.id })}
                className={`rounded-2xl border px-4 py-3 text-left transition ${
                  selected
                    ? "border-primary bg-primary text-white shadow-md"
                    : "border-primary/10 bg-surface text-primary hover:border-primary/30"
                }`}
              >
                <span className="flex items-center justify-between gap-3">
                  <span className="font-semibold">{option.label}</span>
                  <span
                    className={`text-xs font-medium ${
                      selected ? "text-white/80" : "text-muted"
                    }`}
                  >
                    {discountText}
                  </span>
                </span>
                <span
                  className={`mt-1 block text-sm ${
                    selected ? "text-white/75" : "text-muted"
                  }`}
                >
                  {option.description}
                </span>
              </button>
            );
          })}
        </div>
      </fieldset>

      <label className="block text-sm font-semibold text-primary">
        Special instructions
        <textarea
          value={selections.specialInstructions}
          onChange={(e) =>
            onChange({
              specialInstructions: e.target.value.slice(0, max),
            })
          }
          rows={4}
          maxLength={max}
          placeholder="Gate codes, pets, focus areas…"
          className={`mt-2 resize-y ${fieldClass}`}
        />
        <span
          className={`mt-1.5 block text-xs ${
            remaining <= 20 ? "font-semibold text-primary" : "text-muted"
          }`}
        >
          {selections.specialInstructions.length}/{max} characters
        </span>
      </label>
    </div>
  );
}
