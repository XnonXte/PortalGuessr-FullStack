// Copyright (c) 2023 XnonXte.
// REST API server for PortalGuessr written in JavaScript with Express.js.

/*
List of available endpoints:

-- Chambers Collection --
GET /chambers - Returns a list of the chambers collection.
GET /chambers/:id - Returns a single of the chambers collection.
POST /chambers/new - Creates a new document.
PATCH /chambers/:id - Updates a document with a given body.
DELETE /chambers/:id - Deletes a document from the database. 
-------------------------

-- Users Collection --
GET /users - Returns a list of the users collection.
GET /users/:id - Returns a single of the users collection.
POST /users/new - Creates a new document.
PATCH /users/:id - Updates a document with a given body.
DELETE /users/:id - Deletes a document from the database. 
----------------------

-- Stats Collection --
GET /stats - Returns a list of the stats collection.
GET /stats/:userId - Returns a single of the stats collection.
POST /stats/new - Creates a new document.
PATCH /stats/:userId - Updates a document with a given body.
DELETE /stats/:userId - Deletes a document from the database. 
----------------------
*/

const express = require("express");
const app = express();
const cors = require("cors");
const { connect, connection } = require("mongoose");

app.use(cors());
app.use(express.json());

app.listen(SERVER_PORT, () => {
  console.log(`Server has been listening to port: ${SERVER_PORT}`);
});

// Using private variables.
require("dotenv").config();
const SERVER_PORT = process.env.SERVER_PORT;
const DATABASE_URI = process.env.DATABASE_URI;

async function main() {
  await connect(DATABASE_URI);
}

main().catch((err) => console.error(err));

connection
  .on("open", () => {
    console.log("Successfully connected to database!");
  })
  .on("close", () => {
    console.log("Closed the database.");
  })
  .on("error", (err) => {
    console.error(err);
  });

const usersRouter = require("./routes/users.route");
const chambersRouter = require("./routes/chambers.route");
const statsRouter = require("./routes/stats.route");

app.use("/chambers", chambersRouter);
app.use("/users", usersRouter);
app.use("/stats", statsRouter);

app.get("/", (req, res) => {
  res.send("Hello");
});
