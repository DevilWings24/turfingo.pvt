import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import Payment from "@/models/Payment";
import { TOURNAMENT } from "@/lib/tournament";

const PAYMENT_LINK_URL =
  "https://pages.razorpay.com/pl_SC2n9aRqQ4joj2/view";

export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();
    const { name, email, phone, dob, university, position } = body;

    // 1️⃣ Upsert user (save latest details)
    const user = await User.findOneAndUpdate(
      { email },
      { name, email, phone, dob, university, position },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );

    // 2️⃣ Save payment intent (payment handled via Razorpay link)
    await Payment.create({
      userId: user._id,
      amount: TOURNAMENT.fee,
      status: "created",
      paymentProvider: "razorpay_link",
      paymentLinkUrl: PAYMENT_LINK_URL,
    });

    return NextResponse.json({
      success: true,
    });

  } catch (error: any) {
    console.error("REGISTER API ERROR:", error);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
