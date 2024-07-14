import { Router } from "express";
import {
    getMe, createMe
  } from "../controllers/get-me.controller.js";

const router = Router();

router
.route("/get-me")
.get(getMe)

router
.route("/add-me")
.post(createMe)

export default router;