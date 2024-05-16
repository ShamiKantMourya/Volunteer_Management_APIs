const Volunteer = require("../models/volunteer.model");

//Get all volunteers
exports.GetAllVolunteers = async (req, res) => {
  try {
    const volunteers = await Volunteer.find({});
    if (volunteers) {
      res.status(200).json({
        success: true,
        data: volunteers,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "No volunteers found",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      errorMessage: error.message,
    });
  }
};

//Add new volunteer
exports.AddVolunteer = async (req, res) => {
  try {
    const data = req.body;
    const newVolunteer = new Volunteer(data);
    const savedVolunteer = await newVolunteer.save();
    if (savedVolunteer) {
      res.status(201).json({
        success: true,
        message: "Volunteer added successfully",
        data: savedVolunteer,
      });
    } else {
      res.status(400).json({
        success: false,
        message: "Failed to add volunteer",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      errorMessage: error.message,
    });
  }
};

//Update volunteer
exports.updateVolunteer = async (req, res) => {
  try {
    const volunteerId = req.params.volunteerId;
    const data = req.body;
    const updatedVolunteer = await Volunteer.findByIdAndUpdate(
      volunteerId,
      data,
      {
        new: true,
      },
    );
    if (updatedVolunteer) {
      res.status(200).json({
        success: true,
        message: "Volunteer updated successfully",
        data: updatedVolunteer,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Volunteer not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      errorMessage: error.message,
    });
  }
};

//Delete volunteer
exports.deleteVolunteer = async (req, res) => {
  try {
    const volunteerId = req.params.volunteerId;
    const deletedVolunteer = await Volunteer.findByIdAndDelete(volunteerId);
    if (deletedVolunteer) {
      res.status(200).json({
        success: true,
        message: "Volunteer deleted successfully",
        data: deletedVolunteer,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Volunteer not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      errorMessage: error.message,
    });
  }
};
