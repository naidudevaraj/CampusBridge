const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
  title: String,
  facultyId: String,
  resources: [String], // URLs or file references
  assignments: [String], // assignment IDs
});

module.exports = mongoose.model("Course", CourseSchema);
