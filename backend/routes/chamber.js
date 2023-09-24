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
// Assuming the difficulty is random.
router.get("/random/:amount", (req, res) => {
  const amount = req.params.amount;
  const query = { $sample: { size: parseInt(amount) } };

  Chamber.aggregate([query])
    .then((result) => res.json(result))
    .catch((error) => res.status(400).send({ message: error.message }));
});

// Get a random number based on the difficulty.
router.get("/random/:amount/:difficulty", (req, res) => {
  const amount = req.params.amount;
  const difficulty = req.params.difficulty;

  let difficultyContinuation;
  switch (difficulty) {
    case "e":
      difficultyContinuation = "Easy";
      break;
    case "m":
      difficultyContinuation = "Medium";
      break;
    case "h":
      difficultyContinuation = "Hard";
      break;
    case "vh":
      difficultyContinuation = "Very Hard";
      break;
  }

  Chamber.find({ difficulty: difficultyContinuation })
    .then((result) => {
      const shuffledResult = shuffleArray(result);
      const slicedResult = shuffledResult.slice(0, amount);

      res.json(slicedResult);
    })
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

function shuffleArray(array) {
  // Shuffling array using Fisher-Yates sorting algorithm.
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export default router;
