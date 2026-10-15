"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import {
  validateCleaningStep,
  validateScheduleStep,
} from "@/lib/booking";
import { useBooking } from "@/lib/use-booking";
import { CleaningDetailsStep } from "@/components/booking/CleaningDetailsStep";
import { ScheduleStep } from "@/components/booking/ScheduleStep";
import { ReviewStep } from "@/components/booking/ReviewStep";
import { BookingSummary } from "@/components/booking/BookingSummary";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

const steps = [
  { id: 1 as const, label: "Cleaning details" },
  { id: 2 as const, label: "Schedule & contact" },
  { id: 3 as const, label: "Review" },
];

type BookingWizardProps = {
  initialServiceId?: string;
};

export function BookingWizard({
  initialServiceId = siteConfig.booking.serviceId,
}: BookingWizardProps) {
  const { hydrated, step, selections, price, update, goTo, reset } =
    useBooking(initialServiceId);
  const [errors, setErrors] = useState<string[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const continueLabel = useMemo(() => {
    if (step === 1) return "Continue to schedule";
    if (step === 2) return "Continue to review";
    return submitting ? "Submitting…" : "Submit booking request";
  }, [step, submitting]);

  async function handleContinue() {
    setSubmitError("");

    if (step === 1) {
      const nextErrors = validateCleaningStep(selections);
      setErrors(nextErrors);
      if (nextErrors.length) return;
      goTo(2);
      return;
    }

    if (step === 2) {
      const nextErrors = validateScheduleStep(selections);
      setErrors(nextErrors);
      if (nextErrors.length) return;
      goTo(3);
      return;
    }

    setErrors([]);
    setSubmitting(true);
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...selections,
          estimate: price,
        }),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) {
        setSubmitError(json.error || "Unable to submit booking. Please try again.");
        return;
      }
      setSubmitted(true);
      reset();
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "generate_lead", { method: "home_cleaning_booking" });
      }
    } catch {
      setSubmitError("Unable to submit booking. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (!hydrated) {
    return (
      <div className="rounded-[2rem] border border-primary/8 bg-surface p-8 text-sm text-muted">
        Loading your booking…
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="rounded-[2rem] border border-primary/8 bg-surface p-8 text-center shadow-[0_18px_40px_-28px_rgba(3,44,155,0.35)]">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent text-primary-dark">
          <Icon name="check" className="h-6 w-6" />
        </span>
        <h2 className="mt-4 text-2xl font-extrabold text-primary">
          Request received
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm text-muted">
          Thanks! Your Home Cleaning request was submitted successfully. We’ll
          confirm availability and final pricing shortly — nothing is booked until
          we follow up.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Button href="/" magnetic>
            Back to home
          </Button>
          <Button
            type="button"
            variant="secondary"
            onClick={() => {
              setSubmitted(false);
              goTo(1);
            }}
          >
            Start another booking
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1.35fr_0.85fr] lg:items-start">
      <div className="rounded-[2rem] border border-primary/8 bg-surface p-5 shadow-[0_18px_40px_-28px_rgba(3,44,155,0.35)] sm:p-8">
        <nav aria-label="Booking steps" className="mb-8">
          <ol className="flex flex-wrap gap-2">
            {steps.map((item) => {
              const active = step === item.id;
              const done = step > item.id;
              return (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => {
                      if (done) {
                        setErrors([]);
                        goTo(item.id);
                      }
                    }}
                    disabled={!done && !active}
                    className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                      active
                        ? "bg-primary text-white"
                        : done
                          ? "bg-accent/25 text-primary-dark"
                          : "bg-primary/5 text-muted"
                    }`}
                  >
                    {item.id}. {item.label}
                  </button>
                </li>
              );
            })}
          </ol>
        </nav>

        {step === 1 ? (
          <CleaningDetailsStep
            selections={selections}
            onChange={(patch) => {
              setErrors([]);
              update(patch);
            }}
            errors={errors}
          />
        ) : null}

        {step === 2 ? (
          <ScheduleStep
            selections={selections}
            onChange={(patch) => {
              setErrors([]);
              update(patch);
            }}
            errors={errors}
          />
        ) : null}

        {step === 3 ? (
          <ReviewStep
            selections={selections}
            price={price}
            submitting={submitting}
            error={submitError}
          />
        ) : null}

        <p className="mt-8 text-sm text-muted lg:hidden">
          Prefer a free quote instead?{" "}
          <Link href="/#quote" className="font-semibold text-bright underline">
            Use the quote form
          </Link>
          .
        </p>
      </div>

      <div className="lg:sticky lg:top-28">
        <BookingSummary
          selections={selections}
          price={price}
          continueLabel={continueLabel}
          onContinue={handleContinue}
          continueDisabled={submitting}
          showBack={step > 1}
          onBack={() => {
            setErrors([]);
            setSubmitError("");
            goTo((step - 1) as 1 | 2);
          }}
        />
        <p className="mt-4 hidden text-sm text-muted lg:block">
          Prefer a free quote instead?{" "}
          <Link href="/#quote" className="font-semibold text-bright underline">
            Use the quote form
          </Link>
          .
        </p>
      </div>
    </div>
  );
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}
