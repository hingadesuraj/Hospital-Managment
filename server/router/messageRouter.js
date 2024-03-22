import express from "express";
import { sendMessage } from "../controller/messageController.js";
const router = express.Router();

router.post("/send", sendMessage); // firs paramenter is router and second is controller

export default router;
