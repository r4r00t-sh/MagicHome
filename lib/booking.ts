import { siteConfig } from "@/lib/site-config";

export type BookingFrequencyId = "once" | "weekly" | "multi-weekly";
export type BookingStep = 1 | 2 | 3;

export type BookingSelections = {
  serviceId: string;
  cleaners: number;
  hours: number;
  materials: boolean;
  frequency: BookingFrequencyId;
  specialInstructions: string;
  name: string;
  phone: string;
  email: string;
  address: string;
  zip: string;
  preferredDate: string;
  preferredTime: string;
};

export type PriceLine = {
  id: string;
  label: string;
  amount: number;
  note?: string;
  isPlaceholder?: boolean;
};

export type BookingPriceBreakdown = {
  labor: number;
  materials: number;
  discount: number;
  discountPercent: number;
  discountLabel: string | null;
  tax: number;
  taxRatePercent: number;
  serviceFee: number;
  subtotalBeforeDiscount: number;
  total: number;
  lines: PriceLine[];
  amountScope: "per visit";
  placeholders: string[];
};

export const BOOKING_STORAGE_KEY = "magic-home-booking-v1";

export function createDefaultBookingSelections(
  serviceId: string = siteConfig.booking.serviceId
): BookingSelections {
  return {
    serviceId,
    cleaners: siteConfig.booking.defaultCleaners,
    hours: siteConfig.booking.defaultHours,
    materials: false,
    frequency: "once",
    specialInstructions: "",
    name: "",
    phone: "",
    email: "",
    address: "",
    zip: "",
    preferredDate: "",
    preferredTime: "",
  };
}

export function getFrequencyOption(id: BookingFrequencyId) {
  return siteConfig.booking.frequencies.find((f) => f.id === id);
}

export function calculateBookingPrice(
  selections: Pick<
    BookingSelections,
    "cleaners" | "hours" | "materials" | "frequency"
  >
): BookingPriceBreakdown {
  const cfg = siteConfig.booking;
  const placeholders: string[] = [];

  if (cfg.referenceHours.isPlaceholder) {
    placeholders.push(cfg.referenceHours.note);
  }

  const labor =
    cfg.laborBasePrice *
    (selections.cleaners / cfg.referenceCleaners) *
    (selections.hours / cfg.referenceHours.value);

  let materials = 0;
  if (selections.materials) {
    if (cfg.materials.fee == null) {
      placeholders.push(cfg.materials.note);
      materials = 0;
    } else {
      materials = cfg.materials.fee;
    }
  }

  let serviceFee = 0;
  if (cfg.serviceFee.value == null) {
    if (cfg.serviceFee.isPlaceholder) {
      placeholders.push(cfg.serviceFee.note);
    }
    serviceFee = 0;
  } else {
    serviceFee = cfg.serviceFee.value;
  }

  const subtotalBeforeDiscount = labor + materials + serviceFee;

  const frequency = getFrequencyOption(selections.frequency);
  const discountPercent =
    frequency?.discountPercent == null ? 0 : frequency.discountPercent;
  const discount =
    discountPercent > 0 ? subtotalBeforeDiscount * (discountPercent / 100) : 0;
  const discountLabel =
    discountPercent > 0
      ? `${frequency?.label} discount (−${discountPercent}%)`
      : null;

  if (
    selections.frequency === "multi-weekly" &&
    frequency?.discountPercent == null
  ) {
    placeholders.push(
      "Multiple Times a Week discount is not configured — no discount applied."
    );
  }

  const afterDiscount = subtotalBeforeDiscount - discount;

  let taxRatePercent = 0;
  let tax = 0;
  if (cfg.taxRatePercent.value == null) {
    if (cfg.taxRatePercent.isPlaceholder) {
      placeholders.push(cfg.taxRatePercent.note);
    }
  } else {
    taxRatePercent = cfg.taxRatePercent.value;
    tax = afterDiscount * (taxRatePercent / 100);
  }

  const total = afterDiscount + tax;

  const lines: PriceLine[] = [
    {
      id: "labor",
      label: `Labor (${selections.cleaners} cleaner${selections.cleaners > 1 ? "s" : ""} × ${selections.hours}h)`,
      amount: roundMoney(labor),
      isPlaceholder: cfg.referenceHours.isPlaceholder,
      note: cfg.referenceHours.isPlaceholder
        ? cfg.referenceHours.note
        : undefined,
    },
  ];

  if (selections.materials) {
    lines.push({
      id: "materials",
      label: "Cleaning materials",
      amount: roundMoney(materials),
      isPlaceholder: cfg.materials.fee == null,
      note: cfg.materials.fee == null ? cfg.materials.note : undefined,
    });
  }

  if (serviceFee > 0 || cfg.serviceFee.value != null) {
    lines.push({
      id: "service-fee",
      label: "Service fee",
      amount: roundMoney(serviceFee),
      isPlaceholder: cfg.serviceFee.value == null,
      note: cfg.serviceFee.value == null ? cfg.serviceFee.note : undefined,
    });
  }

  if (discount > 0 && discountLabel) {
    lines.push({
      id: "discount",
      label: discountLabel,
      amount: -roundMoney(discount),
      note: "Applied per visit for the selected frequency.",
    });
  }

  if (taxRatePercent > 0 || cfg.taxRatePercent.value != null) {
    lines.push({
      id: "tax",
      label: `Tax (${taxRatePercent}%)`,
      amount: roundMoney(tax),
      isPlaceholder: cfg.taxRatePercent.value == null,
      note:
        cfg.taxRatePercent.value == null
          ? cfg.taxRatePercent.note
          : undefined,
    });
  }

  return {
    labor: roundMoney(labor),
    materials: roundMoney(materials),
    discount: roundMoney(discount),
    discountPercent,
    discountLabel,
    tax: roundMoney(tax),
    taxRatePercent,
    serviceFee: roundMoney(serviceFee),
    subtotalBeforeDiscount: roundMoney(subtotalBeforeDiscount),
    total: roundMoney(total),
    lines,
    amountScope: "per visit",
    placeholders: [...new Set(placeholders)],
  };
}

export function roundMoney(value: number): number {
  return Math.round(value * 100) / 100;
}

export function formatMoney(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: value % 1 === 0 ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(value);
}

export function validateCleaningStep(selections: BookingSelections): string[] {
  const errors: string[] = [];
  const cfg = siteConfig.booking;

  if (!(cfg.cleanerOptions as readonly number[]).includes(selections.cleaners)) {
    errors.push("Select a valid number of cleaners.");
  }
  if (!(cfg.durationOptions as readonly number[]).includes(selections.hours)) {
    errors.push("Select a valid cleaning duration.");
  }
  if (!cfg.frequencies.some((f) => f.id === selections.frequency)) {
    errors.push("Select a cleaning frequency.");
  }
  if (selections.specialInstructions.length > cfg.specialInstructionsMax) {
    errors.push(
      `Special instructions must be ${cfg.specialInstructionsMax} characters or fewer.`
    );
  }
  return errors;
}

export function validateScheduleStep(selections: BookingSelections): string[] {
  const errors: string[] = [];
  if (!selections.name.trim()) errors.push("Enter your full name.");
  if (!selections.phone.trim()) errors.push("Enter a phone number.");
  if (!selections.email.trim()) errors.push("Enter an email address.");
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(selections.email.trim())) {
    errors.push("Enter a valid email address.");
  }
  if (!selections.address.trim()) errors.push("Enter your service address.");
  if (!/^\d{5}$/.test(selections.zip.trim())) {
    errors.push("Enter a valid 5-digit ZIP code.");
  }
  if (!selections.preferredDate) errors.push("Choose a preferred date.");
  return errors;
}
