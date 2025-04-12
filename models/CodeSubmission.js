const mongoose = require('mongoose');

const CodeSubmissionSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: true
  },
  assignmentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Assignment',
    required: true
  },
  code: {
    type: String,
    required: true
  },
  language: {
    type: String,
    enum: ['C', 'C++', 'Python', 'Java'],
    required: true
  },
  submittedAt: {
    type: Date,
    default: Date.now
  },
  evaluationResult: {
    type: String, // You can change this to a detailed schema if needed
    default: 'Pending'
  }
});

module.exports = mongoose.model('CodeSubmission', CodeSubmissionSchema);
