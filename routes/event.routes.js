const express = require("express");

const {
  GetAllEvents,
  AddEvent,
  DeleteEvent,
  UpdateEvent,
} = require("../controllers/event.controller");

const router = express.Router();

//Get all events
router.route("/").get(GetAllEvents);

//Add events
router.route("/").post(AddEvent);

//Delete events
router.route("/:eventId").delete(DeleteEvent);

//Update events
router.route("/:eventId").post(UpdateEvent);

module.exports = router;
