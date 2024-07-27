import { Router } from "express";
import { getAllSeller, sell } from "../controllers/buyers.controllers.js";

const router = Router();

router.route("/sell/:owner").post(sell);
router.route("/allseller").get(getAllSeller);

export default router;
