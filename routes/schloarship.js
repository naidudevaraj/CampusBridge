const express = require('express');
const router = express.Router();
const Scholarship = require('../models/Scholarship');

router.get('/', async (req, res) => {
  const scholarships = await Scholarship.find({});
  res.render('scholarships', { scholarships });
});

module.exports = router;
