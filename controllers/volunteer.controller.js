const Volunteer = require("../models/volunteer.model");

//Get all volunteers
exports.GetAllVolunteers = async (req, res) => {
  try {
    const volunteers = await Volunteer.find({});
    res.status(200).json({
      success: true,
      data: volunteers,
    });
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
    res.status(201).json({
      success: true,
      message: "Volunteer added successfully",
      data: savedVolunteer,
    });
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
    res.status(200).json({
      success: true,
      message: "Volunteer updated successfully",
      data: updatedVolunteer,
    });
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
    res.status(200).json({
      success: true,
      message: "Volunteer deleted successfully",
      data: deletedVolunteer,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      errorMessage: error.message,
    });
  }
};
