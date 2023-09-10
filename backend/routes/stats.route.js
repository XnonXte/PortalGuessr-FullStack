/* User stats should be created as soon as a user account is created. And update when a game finishes. */

const express = require("express");
const router = express.Router();
const Stats = require("../schemas/stats.schema");

router.get("/", (req, res) => {
  Stats.find()
    .then((res) => res.json(res))
    .catch((err) => res.status(400).send({ message: err }));
});

router.get("/:userId", (req, res) => {
  const userId = req.params.userId;

  Stats.findOne({ userId })
    .then((res) => res.json(res))
    .catch((err) => res.status(400).send({ message: err }));
});

router.post("/new", (req, res) => {
  const userId = req.body.userId;
  const newStats = new Stats({
    userId,
  });

  newStats
    .save()
    .then(() =>
      res.json({ message: "Successfully added new stats into the database!" })
    )
    .catch((err) => res.status(400).send({ message: err }));
});

router.patch("/:userId", (req, res) => {
  const userId = req.params.userId;
  const {
    gameHistory,
    gamePlayed,
    gameGuessedIncorrectly,
    gameGuessedCorrectly,
  } = req.body;

  Stats.findOneAndUpdate(
    { userId },
    {
      gameHistory,
      gamePlayed,
      gameGuessedIncorrectly,
      gameGuessedCorrectly,
      updatedAt: new Date(),
    }
  )
    .then((res) => res.json(res))
    .catch((err) => res.status(400).send({ message: err }));
});

router.delete("/:userId", (req, res) => {
  const userId = req.params.userId;

  Stats.findOneAndDelete({ userId })
    .then(() =>
      res.json({ message: "Successfully deleted stats from the database!" })
    )
    .catch((err) => res.status(400).send({ message: err }));
});

module.exports = router;
