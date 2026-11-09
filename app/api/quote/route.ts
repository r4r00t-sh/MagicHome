import { NextResponse } from "next/server";
import { isCommunityServed } from "@/lib/site-config";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const phone = String(body.phone ?? "").trim();
    const community = String(body.community ?? body.zip ?? "").trim();
    const service = String(body.service ?? "").trim();
    const bedrooms = String(body.bedrooms ?? "").trim();
    const bathrooms = String(body.bathrooms ?? "").trim();
    const notes = String(body.notes ?? "").trim();
    const preferredDate = String(body.preferredDate ?? "").trim();

    if (!name || !email || !phone || !community || !service) {
      return NextResponse.json(
        { ok: false, error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { ok: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const served = isCommunityServed(community);
    const payload = {
      name,
      email,
      phone,
      community,
      service,
      bedrooms,
      bathrooms,
      notes,
      preferredDate,
      served,
      receivedAt: new Date().toISOString(),
    };

    // Placeholder for CRM/email (Resend, Formspree, etc.)
    console.info("[quote]", payload);

    return NextResponse.json({
      ok: true,
      served,
      message: served
        ? "Thanks! We received your request and will follow up shortly."
        : "Thanks! Your area is outside our listed Dubai coverage—we'll still review and contact you.",
    });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
