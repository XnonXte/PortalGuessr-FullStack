// ========================================
// Copyright (c) 2023 XnonXte
// This project is released under MIT License.
// GitHub repo: https://github.com/XnonXte/PortalGuessr-FullStack
// ========================================

// REST server for PortalGuesser written in JavaScript with Express.js.

import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { config } from "dotenv";

import chamberRouter from "./routes/chamber.js";

const app = express();

app.use(cors());
app.use(express.json());

config();

const PORT = 5000;
const DATABASE_URI = process.env.DATABASE_URI;

async function main() {
  await mongoose.connect(DATABASE_URI);
}

main().catch((err) => console.error(err));

mongoose.connection
  .on("open", () => console.log("Database connected!"))
  .on("error", (err) => console.error(err.message));

app.use("/chambers", chamberRouter);

app.listen(PORT, () => {
  console.log(`Server is up at http://localhost:${PORT}/`);
});

app.get("/", (req, res) => {
  res.send("Hello, PortalGuesser!");
});
