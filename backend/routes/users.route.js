const express = require("express");
const router = express.Router();
const Users = require("../schemas/users.schema");

router.get("/", (req, res) => {
  Users.find()
    .then((res) => res.json(res))
    .catch((err) => res.status(400).send({ message: err }));
});

router.get("/:id", (req, res) => {
  const id = req.params.id;

  Users.findById(id)
    .then((res) => res.json(res))
    .catch((err) => res.status(400).send({ message: err }));
});

router.post("/new", (req, res) => {
  const { username, password } = req.body;

  const newUser = new Users({
    username,
    password,
  });

  newUser
    .save()
    .then(() =>
      res.json({ message: "Successfully added new user into the database!" })
    )
    .catch((err) => res.status(400).send({ message: err }));
});

router.patch("/:id", (req, res) => {
  const id = req.params.id;
  const { username, password } = req.body;

  Users.findByIdAndUpdate(id, {
    username,
    password,
    updatedAt: new Date(),
  })
    .then((res) => res.json(res))
    .catch((err) => res.status(400).send({ message: err }));
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;

  Users.findByIdAndDelete(id)
    .then(() =>
      res.json({ message: "Successfully deleted user from the database!" })
    )
    .catch((err) => res.status(400).send({ message: err }));
});

module.exports = router;
