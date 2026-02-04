import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import Payment from "@/models/Payment";
import { razorpay } from "@/lib/razorpay";
import { TOURNAMENT } from "@/lib/tournament";

export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();
    const { name, email, phone, dob, university, position } = body;

    // 1️⃣ Find or create user
    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({
        name,
        email,
        phone,
        dob,
        university,
        position,
      });
    }

    // 2️⃣ Create Razorpay order (backend decides amount)
    const order = await razorpay.orders.create({
      amount: TOURNAMENT.fee * 100, // paise
      currency: TOURNAMENT.currency,
      notes: {
        tournament: TOURNAMENT.name,
      },
    });

    // 3️⃣ Save payment record
    await Payment.create({
      userId: user._id,
      razorpayOrderId: order.id,
      amount: TOURNAMENT.fee,
      status: "created",
    });

    return NextResponse.json({
      orderId: order.id,
      amount: TOURNAMENT.fee,
    });

  } catch (error: any) {
    console.error("REGISTER API ERROR:", error);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
