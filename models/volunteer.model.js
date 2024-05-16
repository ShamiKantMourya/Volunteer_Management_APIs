const mongoose = require("mongoose");

const volunteerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ["Male", "Female", "Other"],
  },
  contact: {
    type: String,
    required: true,
  },
  skills: {
    type: [String],
    required: true,
  },
  availability: {
    type: Boolean,
    required: true,
  },
  areasOfInterest: {
    type: [String],
    required: true,
  },
  assigned: {
    type: [String],
  },
});

const Volunteer = mongoose.model("Volunteer", volunteerSchema);

module.exports = Volunteer;
