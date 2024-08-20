
const mongoose = require('mongoose');

const responseSchema = new mongoose.Schema({
  answers: {
    type: Map,
    of: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Response', responseSchema);
