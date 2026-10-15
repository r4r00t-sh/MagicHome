"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { siteConfig } from "@/lib/site-config";
import {
  BOOKING_STORAGE_KEY,
  BookingSelections,
  BookingStep,
  calculateBookingPrice,
  createDefaultBookingSelections,
} from "@/lib/booking";

type StoredBooking = {
  step: BookingStep;
  selections: BookingSelections;
};

function readStored(): StoredBooking | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(BOOKING_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as StoredBooking;
    if (!parsed?.selections || ![1, 2, 3].includes(parsed.step)) return null;
    return {
      step: parsed.step,
      selections: {
        ...createDefaultBookingSelections(),
        ...parsed.selections,
      },
    };
  } catch {
    return null;
  }
}

export function useBooking(initialServiceId?: string) {
  const serviceId = initialServiceId || siteConfig.booking.serviceId;
  const [hydrated, setHydrated] = useState(false);
  const [step, setStep] = useState<BookingStep>(1);
  const [selections, setSelections] = useState<BookingSelections>(() =>
    createDefaultBookingSelections(serviceId)
  );

  useEffect(() => {
    const stored = readStored();
    if (stored) {
      setStep(stored.step);
      setSelections({
        ...stored.selections,
        serviceId,
      });
    } else {
      setSelections((prev) => ({ ...prev, serviceId }));
    }
    setHydrated(true);
  }, [serviceId]);

  useEffect(() => {
    if (!hydrated) return;
    const payload: StoredBooking = { step, selections };
    window.localStorage.setItem(BOOKING_STORAGE_KEY, JSON.stringify(payload));
  }, [hydrated, step, selections]);

  const price = useMemo(
    () => calculateBookingPrice(selections),
    [selections]
  );

  const update = useCallback((patch: Partial<BookingSelections>) => {
    setSelections((prev) => ({ ...prev, ...patch }));
  }, []);

  const goTo = useCallback((next: BookingStep) => {
    setStep(next);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  const reset = useCallback(() => {
    const next = createDefaultBookingSelections(serviceId);
    setSelections(next);
    setStep(1);
    window.localStorage.removeItem(BOOKING_STORAGE_KEY);
  }, [serviceId]);

  return {
    hydrated,
    step,
    selections,
    price,
    update,
    goTo,
    setStep,
    reset,
  };
}
