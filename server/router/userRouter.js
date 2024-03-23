import express from "express";
import { patientRegister } from "../controller/userController.js";
const router = express.Router();

router.post("/register", patientRegister); // firs paramenter is router and second is controller

export default router;
  