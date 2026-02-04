import mongoose, { Schema, models } from "mongoose";

const paymentSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    razorpayOrderId: { type: String },
    razorpayPaymentId: String,
    razorpaySignature: String,
    amount: Number,
    paymentProvider: {
      type: String,
      default: "razorpay_link",
    },
    paymentLinkUrl: String,
    status: {
      type: String,
      enum: ["created", "paid", "failed"],
      default: "created",
    },
    paidAt: Date,
  },
  { timestamps: true }
);

export default models.Payment || mongoose.model("Payment", paymentSchema);
