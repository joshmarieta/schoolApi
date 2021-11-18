const mongoose = require('mongoose')

const school = mongoose.Schema({
  institution: { type: String, require: true },
  location: { type: String, require: true },
  course: { type: Array, require: true }
});

module.exports = mongoose.model('School', school);

//module.exports = { School };

//this will be the model for our universities enabling us to add data to our database
