const Doctor = require("../models/Doctor");

// GET all doctors
const getAllDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.json(doctors);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

// GET doctor by ID
const getDoctorById = async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id);
    if (!doctor) {
      return res.status(404).json({ message: "Doctor not found" });
    }
    res.json(doctor);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

// GET doctors by specialization
const getDoctorsBySpecialization = async (req, res) => {
  const { specialization } = req.params;

  try {
    const doctors = await Doctor.find({
      specialization: { $regex: new RegExp(specialization, "i") }
    });

    if (!doctors.length) {
      return res.status(404).json({ message: "No doctors found in this specialization" });
    }

    res.json(doctors);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  getAllDoctors,
  getDoctorById,
  getDoctorsBySpecialization,
};