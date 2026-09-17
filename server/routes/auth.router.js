import express from "express";
import { validData } from "../middlewares/authenticate.middleware.js";
import { register, login } from "../controllers/auth.controller.js";
import { registerSchema, loginSchema } from "../validations/schema.validaton.js";

const router = express.Router();

router.post("/register", validData(registerSchema), register);

router.post("/login", validData(loginSchema), login);

export default router;
