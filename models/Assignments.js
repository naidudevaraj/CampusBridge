const mongoose = require('mongoose');
const AssignmentSchema = new mongoose.Schema({
  title: String,
  description: String,
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Assignment', AssignmentSchema);
