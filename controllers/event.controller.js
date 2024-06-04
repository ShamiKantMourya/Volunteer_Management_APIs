const Event = require("../models/event.model");

//Get all events
exports.GetAllEvents = async (req, res) => {
  try {
    const events = await Event.find({});

    res.status(200).json({
      success: true,
      count: events.length,
      data: events,
    });
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
    res.status(201).json({
      success: true,
      message: "Event added successfully",
      data: savedEvent,
    });
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
    const event = await Event.findById(eventId);
    const deletedEvent = await Event.findByIdAndDelete(eventId);
    await event.save();
    res.status(200).json({
      success: true,
      message: "Event deleted successfully",
      data: deletedEvent,
    });
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
    const event = await Event.findById(eventId);
    const updatedEvent = await Event.findByIdAndUpdate(eventId, eventData, {
      new: true,
    });
    await event.save();
    res.status(200).json({
      success: true,
      message: "Event updated successfully",
      data: updatedEvent,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      errorMessage: error.message,
    });
  }
};
