const express = require("express");
const router = express.Router();
const {
  getAllDoctors,
  getDoctorById,
  getDoctorsBySpecialization,
} = require("../controllers/doctor");

// ✅ Route to get all doctors
router.get("/", getAllDoctors);

// ✅ Place specialization route BEFORE ID route to avoid conflict
router.get("/specialization/:specialization", getDoctorsBySpecialization);

// ✅ Route to get a doctor by ID
router.get("/:id", getDoctorById);

module.exports = router;
