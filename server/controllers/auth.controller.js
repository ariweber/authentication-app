import * as authService from "../services/auth.service.js";

export async function register(req, res, next) {
  try {
    const user = await authService.register(req.body);
    return res.status(201).json(user);
  } catch (error) {
    return next(error);
  }
}
