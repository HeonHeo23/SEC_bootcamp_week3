const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Employee', employeeSchema);
//Mongoose changes the model name by adding s at the end & lowercase the first