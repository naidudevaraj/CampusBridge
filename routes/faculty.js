const express = require('express');
const router = express.Router();
const Assignment = require('../models/Assignment');

router.post('/upload', async (req, res) => {
  const { title, description } = req.body;
  try {
    const assignment = new Assignment({ title, description });
    await assignment.save();
    res.send('✅ Assignment uploaded!');
  } catch (err) {
    res.status(500).send('❌ Error uploading assignment');
  }
});

module.exports = router;
