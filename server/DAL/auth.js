import { db } from "../db/mongodb.js";

const users = db.collection("users");

export async function createUser({ email, password, name }) {
  const result = await users.insertOne({
    email,
    password,
    name,
  });

  return { _id: result.insertedId, email, name };
}

export async function getUserByEmail(email) {
  return users.findOne({ email });
}
