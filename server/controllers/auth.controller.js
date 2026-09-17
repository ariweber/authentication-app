import * as authService from "../services/auth.service.js";
import { generateToken } from "../utils/jwtToken.utils.js";

export async function register(req, res, next) {
  try {
    const user = await authService.register(req.body);
    const token = generateToken(user._id);
    return res.status(201).json({ user, token });
  } catch (error) {
    return next(error);
  }
}
