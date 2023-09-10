const { Schema, model } = require("mongoose");

const ChambersSchema = new Schema({
  url: {
    type: String,
    unique: true,
    required: true,
  },
  difficulty: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  updatedDate: {
    type: Date,
    default: new Date(),
  },
});

const Chambers = model("Chambers", ChambersSchema);

module.exports = Chambers;
