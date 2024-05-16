const Event = require("../models/event.model");

//Get all events
exports.GetAllEvents = async (req, res) => {
  try {
    const events = await Event.find({});
    if (events) {
      res.status(200).json({
        success: true,
        count: events.length,
        data: events,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "No events found",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to get events",
      errorMessage: error.message,
    });
  }
};

//Add Events
exports.AddEvent = async (req, res) => {
  try {
    const data = req.body;
    const newEvent = new Event(data);
    const savedEvent = await newEvent.save();
    if (savedEvent) {
      res.status(201).json({
        success: true,
        message: "Event added successfully",
        data: savedEvent,
      });
    } else {
      res.status(400).json({
        success: false,
        message: "Failed to add event",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      errorMessage: error.message,
    });
  }
};

//Delete events
exports.DeleteEvent = async (req, res) => {
  try {
    const eventId = req.params.eventId;
    const deletedEvent = await Event.findByIdAndDelete(eventId);
    if (deletedEvent) {
      res.status(200).json({
        success: true,
        message: "Event deleted successfully",
        data: deletedEvent,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Event not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      errorMessage: error.message,
    });
  }
};

//Update events
exports.UpdateEvent = async (req, res) => {
  try {
    const eventId = req.params.eventId;
    const eventData = req.body;
    const updatedEvent = await Event.findByIdAndUpdate(eventId, eventData, {
      new: true,
    });
    if (updatedEvent) {
      res.status(200).json({
        success: true,
        message: "Event updated successfully",
        data: updatedEvent,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Event not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      errorMessage: error.message,
    });
  }
};
