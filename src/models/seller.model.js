import mongoose from "mongoose";

const sellerSchema = new mongoose.Schema(
  {
    opentosell: {
      type: String,
    },
    quantity: {
      type: String,
    },
    price: {
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

export const Seller = mongoose.model("Seller", sellerSchema);
