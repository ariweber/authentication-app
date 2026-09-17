import { verifyToken } from "../utils/jwtToken.utils.js";

export const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) return res.status(401).json({ message: "" });

  try {
    req.user = verifyToken(token);
    next();
  } catch {
    return res.status(401).json({ message: "invalid token" });
  }
};
