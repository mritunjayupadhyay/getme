import { Router } from "express";
import {
  getMe,
  createMe,
  createLocation,
} from "../controllers/get-me.controller.js";

const router = Router();

router.route("/get-me").get(getMe);
router.route("/add-me").post(createMe);
router.route("/add-location").post(createLocation);

export default router;
