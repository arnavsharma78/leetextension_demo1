const mongoose = require("mongoose");

const leetcodesubSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "A true must have a name"],
    unique: true,
  },
  problemTitle: {
    type: String,
    required: true,
    unique: true,
  },
  problemLink: {
    type: String,
    required: [true, "A Problem link must exist"],
    unique: true,
  },
  attempt: {
    type: Number,
    required: true,
    default: 0,
  },
  timestamp: {
    type: String,
    required: true,
  },
  platform: {
    type: String,
    required: true,
  },
});

const LeetcodeSubmission = mongoose.model(
  "LeetcodeSubmission",
  leetcodesubSchema
);

module.exports = LeetcodeSubmission;
