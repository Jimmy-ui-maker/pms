import mongoose, { Schema, model, models } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);

const SiwesSchema = new Schema(
  {
    orgName: {
      type: String,
      required: true,
    },
    number: {
      type: String,
      required: true,
    },

    state: {
      type: String,
      required: true,
      enum: ["Kaduna", "Kano", "Kebbi"],
    },
    desc: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    courses: {
      type: String,
      required: true,
      enum: ["Computer", "Biology", "Statistics"],
    },
  },
  { timestamps: true }
);

export const SiwesTableGuide =
  models.SiwesTableGuide || model("SiwesTableGuide", SiwesSchema);
