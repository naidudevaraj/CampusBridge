const express = require('express');
const router = express.Router();
const ITTrend = require('../models/ITTrend');

router.get('/', async (req, res) => {
  const trends = await ITTrend.find({}).sort({ date: -1 });
  res.render('ittrends', { trends });
});

module.exports = router;
