import { ObjectId } from "mongodb";
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

export async function getUserById(id) {
  return users.findOne({ _id: new ObjectId(id) });
}
