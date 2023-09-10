const { Schema, model } = require("mongoose");

const StatsSchema = new Schema({
  // Items prefixed with the name game- is related to a user's game statistics.
  gameHistory: {
    type: Array,
    required: true,
  },
  gamePlayed: {
    type: Number,
    default: 0,
  },
  gameGuessedCorrectly: {
    type: Number,
    default: 0,
  },
  gameGuessedIncorrectly: {
    type: Number,
    default: 0,
  },
  userId: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  updatedAt: {
    type: Date,
    default: new Date(),
  },
});

const Stats = model("Stats", StatsSchema);

module.exports = Stats;
