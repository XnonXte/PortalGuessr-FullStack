import mongoose from "mongoose";
import crypto from "crypto";

const ChamberSchema = new mongoose.Schema({
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
  fileId: {
    type: String,
    required: true,
    unique: true,
    default: crypto.randomBytes(16).toString("hex"),
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

const Chamber = mongoose.model("Chamber", ChamberSchema);

export default Chamber;
