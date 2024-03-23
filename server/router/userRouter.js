import express from "express";
import { loginPatient, patientRegister } from "../controller/userController.js";
const router = express.Router();

router.post("/register", patientRegister); // firs paramenter is router and second is controller
router.get("/login",loginPatient)

export default router;
  