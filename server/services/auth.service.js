import { createUser, getUserByEmail } from "../DAL/auth.js";
import { hashPassword } from "../utils/bcrpt.utils.js";
import { creatError } from "../utils/createError.js";

export async function register(user) {
  const existing = await getUserByEmail(user.email);
  if (existing) creatError(409, "email already registered");
  const password = await hashPassword(user.password);
  return createUser({ email: user.email, password, name: user.username });
}
