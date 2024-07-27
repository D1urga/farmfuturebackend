import mongoose from "mongoose";
import { type } from "os";

const chatSchema = new mongoose.Schema(
  {
    message: {
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

export const Chat = mongoose.model("Chat", chatSchema);
