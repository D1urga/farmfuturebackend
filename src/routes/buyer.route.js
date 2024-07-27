import { Router } from "express";
import {
  buy,
  chat,
  getAllBuyers,
  getAllChat,
} from "../controllers/buyers.controllers.js";

const router = Router();

router.route("/buy/:owner").post(buy);
router.route("/allbuyers").get(getAllBuyers);
router.route("/sendmessage/:owner").post(chat);
router.route("/getmessages").get(getAllChat);

export default router;
