import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log("Booking request", body);
    return NextResponse.json({ ok: true, message: "Booked successfully" });
  } catch {
    return NextResponse.json({ ok: false, message: "Failed" }, { status: 500 });
  }
}
