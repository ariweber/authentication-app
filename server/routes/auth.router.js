import express from "express";
import { validData } from "../middlewares/validData.middleware.js";
import { register, login, profile } from "../controllers/auth.controller.js";
import { registerSchema, loginSchema } from "../validations/schema.validaton.js";
import {authenticate} from "../middlewares/authenticate.middleware.js"

const router = express.Router();

router.post("/register", validData(registerSchema), register);

router.post("/login", validData(loginSchema), login);

router.get("/profile", authenticate, profile)


export default router;
