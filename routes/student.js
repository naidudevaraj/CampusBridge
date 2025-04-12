const express = require('express');
const router = express.Router();
const axios = require('axios');
const CodeSubmission = require('../models/CodeSubmission');
const { getCodeFeedback } = require('../services/aiFeedback');

// JDoodle credentials (store in .env)
const JD_CLIENT_ID = process.env.JD_CLIENT_ID;
const JD_CLIENT_SECRET = process.env.JD_CLIENT_SECRET;

router.post('/submit-code', async (req, res) => {
  const { studentId, assignmentId, code, language } = req.body;

  try {
    // Save submission
    const submission = new CodeSubmission({ studentId, assignmentId, code, language });
    await submission.save();

    // Evaluate code via JDoodle
    const jdResponse = await axios.post("https://api.jdoodle.com/v1/execute", {
      clientId: JD_CLIENT_ID,
      clientSecret: JD_CLIENT_SECRET,
      script: code,
      language: language,
      versionIndex: "0"
    });

    submission.evaluationResult = jdResponse.data.output;
    await submission.save();

    // Smart AI feedback
    const feedback = await getCodeFeedback(code, language);
    res.send(`✅ Code submitted and executed!\n\nOutput:\n${jdResponse.data.output}\n\nAI Feedback:\n${feedback}`);
  } catch (err) {
    console.error(err);
    res.status(500).send("❌ Submission failed");
  }
});

module.exports = router;
