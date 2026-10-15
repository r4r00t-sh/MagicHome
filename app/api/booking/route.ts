import { NextResponse } from "next/server";
import { isZipServed } from "@/lib/site-config";
import {
  calculateBookingPrice,
  validateCleaningStep,
  validateScheduleStep,
  type BookingSelections,
} from "@/lib/booking";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const selections: BookingSelections = {
      serviceId: String(body.serviceId ?? "regular").trim(),
      cleaners: Number(body.cleaners),
      hours: Number(body.hours),
      materials: Boolean(body.materials),
      frequency: body.frequency,
      specialInstructions: String(body.specialInstructions ?? "").trim(),
      name: String(body.name ?? "").trim(),
      phone: String(body.phone ?? "").trim(),
      email: String(body.email ?? "").trim(),
      address: String(body.address ?? "").trim(),
      zip: String(body.zip ?? "").trim(),
      preferredDate: String(body.preferredDate ?? "").trim(),
      preferredTime: String(body.preferredTime ?? "").trim(),
    };

    const errors = [
      ...validateCleaningStep(selections),
      ...validateScheduleStep(selections),
    ];

    if (errors.length) {
      return NextResponse.json(
        { ok: false, error: errors[0] },
        { status: 400 }
      );
    }

    const estimate = calculateBookingPrice(selections);
    const served = isZipServed(selections.zip);

    const payload = {
      type: "home_cleaning_booking",
      ...selections,
      estimate,
      served,
      confirmed: false,
      receivedAt: new Date().toISOString(),
    };

    // Placeholder for CRM / scheduling provider
    console.info("[booking]", payload);

    return NextResponse.json({
      ok: true,
      confirmed: false,
      served,
      estimate,
      message: served
        ? "Thanks! Your booking request was received. We’ll confirm availability shortly."
        : "Thanks! Your ZIP is outside our listed coverage—we’ll still review and contact you.",
    });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
