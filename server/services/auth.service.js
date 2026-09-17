import { createUser, getUserByEmail, getUserById } from "../DAL/auth.js";
import { hashPassword, comparePassword } from "../utils/bcrpt.utils.js";
import { creatError } from "../utils/createError.js";

export async function register(user) {
  const existing = await getUserByEmail(user.email);
  if (existing) creatError(409, "email already registered");
  const password = await hashPassword(user.password);
  return createUser({ email: user.email, password, name: user.username });
}

export async function login(user) {
  const existing = await getUserByEmail(user.email);
  if (!existing) throw creatError(401, "invalid email or password");
  const isValid = await comparePassword(user.password, existing.password);
  if (!isValid) throw creatError(401, "invalid email or password");
  return { _id: existing._id, email: existing.email, name: existing.name };
}

export async function profile(payload) {
  const user = await getUserById(payload);
  if (!user) throw creatError(404, "user not found");
  return { _id: user._id, email: user.email, name: user.name };
}
