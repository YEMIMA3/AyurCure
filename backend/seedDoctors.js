// seedDoctorsInsert.js
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const fs = require("fs");
const Doctor = require("./models/Doctor");

dotenv.config();

const seedDoctors = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Read JSON file (flat structure)
    const doctorsData = JSON.parse(fs.readFileSync("./data/doctors.json", "utf-8"));

    if (!Array.isArray(doctorsData) || doctorsData.length === 0) {
      console.log("⚠️ No doctors found in JSON to seed.");
      process.exit(0);
    }

    // Remove existing entries to avoid duplicates
    await Doctor.deleteMany();

    // Insert all doctors
    const inserted = await Doctor.insertMany(doctorsData);

    console.log(`✅ Inserted ${inserted.length} doctors successfully!`);
    process.exit(0);
  } catch (error) {
    console.error("❌ Failed to seed doctors:", error);
    process.exit(1);
  }
};

seedDoctors();
