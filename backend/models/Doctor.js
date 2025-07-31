const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  degree: String,
  specialization: String,
  location: String
});

module.exports = mongoose.model('Doctor', doctorSchema, 'doctor');