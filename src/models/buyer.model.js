import mongoose from "mongoose";
import { type } from "os";

const buyerSchema = new mongoose.Schema(
  {
    opentobuy: {
      type: String,
    },
    quantity: {
      type: String,
    },
    note: {
      type: String,
    },
    isorganic: {
      type: String,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  },
);

export const Buyer = mongoose.model("Buyer", buyerSchema);
