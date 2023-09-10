const express = require("express");
const router = express.Router();
const Chambers = require("../schemas/chambers.schema");

router.get("/", (req, res) => {
  Chambers.find()
    .then((res) => res.json(res))
    .catch((err) => res.status(400).send({ message: err }));
});

router.get("/:id", (req, res) => {
  const id = req.params.id;

  Chambers.findById(id)
    .then((res) => res.json(res))
    .catch((err) => res.status(400).send({ message: err }));
});

router.post("/new", (req, res) => {
  const { url, difficulty, answer } = req.body;

  const newChamber = new Chambers({
    url,
    difficulty,
    answer,
  });

  newChamber
    .save()
    .then(() =>
      res.json({
        message: "Successfully added new chamber image into the database!",
      })
    )
    .catch((err) => res.status(400).send({ message: err }));
});

router.patch("/:id", (req, res) => {
  const id = req.params.id;
  const { url, difficulty, answer } = req.body;

  Chambers.findByIdAndUpdate(id, {
    url,
    difficulty,
    answer,
    updatedAt: new Date(),
  })
    .then((res) => res.json(res))
    .catch((err) => res.status(400).send({ message: err }));
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;

  Chambers.findByIdAndDelete(id)
    .then(() =>
      res.json({
        message: "Successfully deleted chamber image from the database!",
      })
    )
    .catch((err) => res.status(400).send({ message: err }));
});

module.exports = router;
