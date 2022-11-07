const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  roles: {
    User: {
      type: Number,
      default: 2001
    },
    Editor: Number,
    Admin: Number,
  },
  password: {
    type: String,
    required: true
  },
  refreshToken: String
});

module.exports = mongoose.model('Employee', userSchema);
//Mongoose changes the model name by adding s at the end & lowercase the first