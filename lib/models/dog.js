const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dog = new Schema({
  name: {
    type: String,
    required: true
  },
  breed: {
    type: String
  },
  age: {
    type: Number,
    max: 25
  }
});

module.exports = mongoose.model('Dog', dog);
