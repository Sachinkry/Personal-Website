const mongoose = require('mongoose');

const threadSchema = new mongoose.Schema({
  
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

const Thread = mongoose.model('Thread', threadSchema);

module.exports = Thread;
