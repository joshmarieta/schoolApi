const mongoose = require('mongoose')

const student = mongoose.Schema({
  name: { type: String, require: true },
  institution: { type: String, require: true },
  course: { type: Array, require: true }
});

module.exports = mongoose.model('Student', student);
