import mongoose, { Schema, model, models } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);

const PassQSchema = new Schema(
  {
    cCode: {
      type: String,
      required: true,
    },
    cTitle: {
      type: String,
      required: true,
    },
    section: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
      enum: ["Test", "Exams"],
    },
    level: {
      type: String,
      required: true,
      enum: ["100L", "200L", "300L", "400L"],
    },
    imgUrl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const PassQTable = models.PassQTable || model("PassQTable", PassQSchema);
