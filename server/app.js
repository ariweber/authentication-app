import express from "express";
import cors from "cors";
import "dotenv/config";

import "./db/mongodb.js";
import authRouter from "./routes/auth.router.js";

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(cors());
app.use("/auth", authRouter);

app.get("/", (_req, res) => {
  res.json({ status: "ok" });
});

app.use((err, _req, res, _next) => {
  return res.status(err.status || 500).json({ message: err.message });
});

app.listen(port, () => {
  console.log(`server running on http://localhost:${port}`);
});
