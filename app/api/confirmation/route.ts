
export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Payment from "@/models/Payment";
import User from "@/models/User";

export async function GET(req: Request) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);
    const orderId = searchParams.get("orderId");

    if (!orderId) {
      return NextResponse.json(
        { error: "orderId missing" },
        { status: 400 }
      );
    }

    const payment = await Payment.findOne({
      razorpayOrderId: orderId,
      status: "paid",
    }).populate("userId");

    if (!payment) {
      return NextResponse.json(
        { error: "Payment not found" },
        { status: 404 }
      );
    }

    const user = payment.userId as any;

    return NextResponse.json({
      registrationId: `REG-${payment._id.toString().slice(-8).toUpperCase()}`,
      user: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        university: user.university,
      },
      tournament: {
        game: "CLUTCH ARENA",
        platform: "Hotfut, SPR Sportsa",
        format: "1v1 Single Elimination",
        date: "February 15, 2026",
      },
    });
  } catch (error: any) {
    console.error("CONFIRMATION API ERROR:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
