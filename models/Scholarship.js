const mongoose = require('mongoose');

const scholarshipSchema = new mongoose.Schema({
  name: String,
  description: String,
  eligibility: String
});

module.exports = mongoose.model('Scholarship', scholarshipSchema);
