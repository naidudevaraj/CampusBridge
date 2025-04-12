const mongoose = require('mongoose');

const calendarEventSchema = new mongoose.Schema({
  title: String,
  start: Date,
  end: Date,
  description: String
});

module.exports = mongoose.model('CalendarEvent', calendarEventSchema);
