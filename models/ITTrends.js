const mongoose = require('mongoose');

const itTrendSchema = new mongoose.Schema({
  title: String,
  summary: String,
  source: String,
  date: Date
});

module.exports = mongoose.model('ITTrend', itTrendSchema);
