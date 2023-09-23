// Copyright (c) 2023 XnonXte.
// REST API server for PortalGuesser written in JavaScript with Express.js.

/*
-- Server Endpoints --
GET /chambers - Returns a list of the chambers collection.
GET /chambers/:id - Returns a single of the chambers collection.
POST /chambers/new - Creates a new document.
PATCH /chambers/:id - Updates a document with a given body.
DELETE /chambers/:id - Deletes a document from the database. 
*/

// TODO: Create user auth with JWT?
// TODO: Create a home page (possibly one explaining all the possible routes?).

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
  .on("open", () => {
    console.log("Successfully connected to database!");
  })
  .on("close", () => {
    console.log("Closed the database.");
  })
  .on("error", (err) => {
    console.error(err);
  });

app.use("/chambers", chamberRouter);

app.listen(PORT, () => {
  console.log(`Server is up at: ${PORT}`);
});
