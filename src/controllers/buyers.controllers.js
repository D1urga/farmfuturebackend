import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import { User } from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { Buyer } from "../models/buyer.model.js";
import { Seller } from "../models/seller.model.js";
import { Chat } from "../models/chat.model.js";

const buy = asyncHandler(async (req, res) => {
  const { owner } = req.params;
  const { opentobuy, note, quantity, isorganic } = req.body;
  if (opentobuy.trim() === "") {
    throw new ApiError(400, "open to buy required");
  }
  const data = await Buyer.create({
    opentobuy,
    note,
    quantity,
    owner,
    isorganic,
  });
  return res
    .status(200)
    .json(new ApiResponse(200, data, "posted successfully"));
});

const sell = asyncHandler(async (req, res) => {
  const { owner } = req.params;
  const { opentosell, note, quantity, price, isorganic } = req.body;

  const data = await Seller.create({
    opentosell,
    note,
    quantity,
    price,
    isorganic,
    owner,
  });
  return res
    .status(200)
    .json(new ApiResponse(200, data, "posted successfully"));
});

const getAllBuyers = asyncHandler(async (req, res) => {
  const data = await Buyer.aggregate([
    {
      $lookup: {
        localField: "owner",
        foreignField: "_id",
        from: "users",
        as: "owner",
      },
    },
  ]);
  return res.status(200).json(new ApiResponse(200, data, "fetched data"));
});
const getAllSeller = asyncHandler(async (req, res) => {
  const data = await Seller.aggregate([
    {
      $lookup: {
        localField: "owner",
        foreignField: "_id",
        from: "users",
        as: "owner",
      },
    },
  ]);
  return res.status(200).json(new ApiResponse(200, data, "fetched data"));
});

const chat = asyncHandler(async (req, res) => {
  const { owner } = req.params;
  const { message } = req.body;
  const data = await Chat.create({ owner, message });
  return res
    .status(200)
    .json(new ApiResponse(200, data, "posted successfully"));
});

const getAllChat = asyncHandler(async (req, res) => {
  const data = await Chat.aggregate([
    {
      $lookup: {
        localField: "owner",
        foreignField: "_id",
        from: "users",
        as: "owner",
      },
    },
  ]);
  return res.status(200).json(new ApiResponse(200, data, "fetched"));
});
export { buy, sell, getAllBuyers, getAllSeller, chat, getAllChat };
