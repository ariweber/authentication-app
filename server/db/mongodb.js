import { MongoClient } from "mongodb";
import "dotenv/config"

const client = new MongoClient(process.env.MONGO_URI);
export const db = client.db("authentication-app")

try {
  await client.connect();
  console.log("connected db");
} catch (error) {
  console.log(error.message);
  process.exit(1);
}
