import express from "express";
import Chamber from "../models/chamber.model.js";

const router = express.Router();

// Get all chambers.
router.get("/", (req, res) => {
  Chamber.find()
    .then((result) => res.json(result))
    .catch((error) => res.status(400).send({ message: error.message }));
});

// Get a specific chamber.
router.get("/:id", (req, res) => {
  const id = req.params.id;

  Chamber.findById(id)
    .then((result) => res.json(result))
    .catch((error) => res.status(400).send({ message: error.message }));
});

// Get a random chamber, amount is the parameter for how much do we want to retrieve.
router.get("/random/:amount", (req, res) => {
  const amount = req.params.amount;

  Chamber.aggregate([{ $sample: { size: parseInt(amount) } }])
    .then((result) => res.json(result))
    .catch((error) => res.status(400).send({ message: error.message }));
});

// Post a new chamber.
router.post("/new", (req, res) => {
  const { url, difficulty, answer } = req.body;

  const newChamber = new Chamber({
    url,
    difficulty,
    answer,
  });

  newChamber
    .save()
    .then(() => res.status(204))
    .catch((error) => res.status(400).send({ message: error.message }));
});

// Edit a chamber.
router.patch("/:id", (req, res) => {
  const id = req.params.id;
  const { url, difficulty, answer } = req.body;

  Chamber.findByIdAndUpdate(id, {
    url,
    difficulty,
    answer,
    updatedAt: new Date(),
  })
    .then((res) => res.json(res))
    .catch((error) => res.status(400).send({ message: error.message }));
});

// Delete a chamber.
router.delete("/:id", (req, res) => {
  const id = req.params.id;

  Chamber.findByIdAndDelete(id)
    .then(() => res.status(204))
    .catch((error) => res.status(400).send({ message: error.message }));
});

export default router;
