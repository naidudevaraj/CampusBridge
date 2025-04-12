const express = require('express');
const router = express.Router();
const CalendarEvent = require('../models/CalendarEvent');

router.get('/', (req, res) => {
  res.render('calendar');
});

router.get('/events', async (req, res) => {
  const events = await CalendarEvent.find({});
  res.json(events);
});

module.exports = router;
