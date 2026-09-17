import express from "express";
import { register as validate } from "../middlewares/auth.middleware.js";
import { register } from "../controllers/auth.controller.js";
import { registerSchema } from "../validations/schema.validaton.js";

const router = express.Router();

router.post("/register", validate(registerSchema), register);

export default router;
