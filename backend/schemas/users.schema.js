/* TODO: Learn how to encrypt and decrypt user password (future me problem). */

const { Schema, model } = require("mongoose");

const UsersSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
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

const Users = model("Users", UsersSchema);

module.exports = Users;
