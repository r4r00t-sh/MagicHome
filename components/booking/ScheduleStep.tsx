"use client";

import { BookingSelections } from "@/lib/booking";

const fieldClass =
  "w-full rounded-2xl border border-primary/10 bg-surface px-4 py-3 text-sm text-primary outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30";

type ScheduleStepProps = {
  selections: BookingSelections;
  onChange: (patch: Partial<BookingSelections>) => void;
  errors: string[];
};

export function ScheduleStep({
  selections,
  onChange,
  errors,
}: ScheduleStepProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-extrabold tracking-tight text-primary">
          Schedule & contact
        </h2>
        <p className="mt-2 text-sm text-muted">
          Tell us where and when to clean. We’ll confirm availability before the
          booking is finalized.
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

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium text-primary">
          Full name *
          <input
            value={selections.name}
            onChange={(e) => onChange({ name: e.target.value })}
            autoComplete="name"
            className={`mt-1.5 ${fieldClass}`}
          />
        </label>
        <label className="block text-sm font-medium text-primary">
          Phone *
          <input
            type="tel"
            value={selections.phone}
            onChange={(e) => onChange({ phone: e.target.value })}
            autoComplete="tel"
            className={`mt-1.5 ${fieldClass}`}
          />
        </label>
        <label className="block text-sm font-medium text-primary sm:col-span-2">
          Email *
          <input
            type="email"
            value={selections.email}
            onChange={(e) => onChange({ email: e.target.value })}
            autoComplete="email"
            className={`mt-1.5 ${fieldClass}`}
          />
        </label>
        <label className="block text-sm font-medium text-primary sm:col-span-2">
          Service address *
          <input
            value={selections.address}
            onChange={(e) => onChange({ address: e.target.value })}
            autoComplete="street-address"
            placeholder="Street, unit, city"
            className={`mt-1.5 ${fieldClass}`}
          />
        </label>
        <label className="block text-sm font-medium text-primary">
          ZIP code *
          <input
            value={selections.zip}
            onChange={(e) =>
              onChange({ zip: e.target.value.replace(/\D/g, "").slice(0, 5) })
            }
            inputMode="numeric"
            autoComplete="postal-code"
            placeholder="78701"
            className={`mt-1.5 ${fieldClass}`}
          />
        </label>
        <label className="block text-sm font-medium text-primary">
          Preferred time
          <input
            type="time"
            value={selections.preferredTime}
            onChange={(e) => onChange({ preferredTime: e.target.value })}
            className={`mt-1.5 ${fieldClass}`}
          />
        </label>
        <label className="block text-sm font-medium text-primary sm:col-span-2">
          Preferred date *
          <input
            type="date"
            value={selections.preferredDate}
            onChange={(e) => onChange({ preferredDate: e.target.value })}
            className={`mt-1.5 ${fieldClass}`}
          />
        </label>
      </div>
    </div>
  );
}
