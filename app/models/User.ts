import mongoose, { Schema, models } from "mongoose";

const userSchema = new Schema(
  {
    name: String,
    email: { type: String, required: true },
    phone: String,
    dob: Date,
    university: String,
    position: {
      type: String,

    },
  },
  { timestamps: true }
);
delete mongoose.models.User;
export default mongoose.model("User", userSchema);