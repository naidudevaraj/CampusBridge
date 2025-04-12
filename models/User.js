const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: { type: String, enum: ["student", "faculty", "admin"] },
  codingProgress: Object,
  coursesEnrolled: [String],
  jobMatches: [String],
});

module.exports = mongoose.model("User", UserSchema);
