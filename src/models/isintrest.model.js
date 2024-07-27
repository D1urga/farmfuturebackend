import mongoose from "mongoose";
import { type } from "os";

const interestBuyerSchema = new mongoose.Schema(
  {
    interester: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Buyer",
    },
    interestedin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Buyer",
    },
  },
  {
    timestamps: true,
  },
);

export const Interest = mongoose.model("Interest", interestSchema);
