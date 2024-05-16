const express = require("express");

const {
  GetAllVolunteers,
  AddVolunteer,
  updateVolunteer,
  deleteVolunteer,
} = require("../controllers/volunteer.controller");

const router = express.Router();

//Get all volunteers
router.route("/").get(GetAllVolunteers);

//Add new volunteer
router.route("/").post(AddVolunteer);

//update volunteer
router.route("/:volunteerId").post(updateVolunteer);

//delete volunteer
router.route("/:volunteerId").delete(deleteVolunteer);

module.exports = router;
