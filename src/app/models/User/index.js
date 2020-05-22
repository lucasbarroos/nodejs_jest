const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  age: Number,
  document: String,
  birthdate: Date,
  address: {
    street: String,
    number: String,
    zone: String,
    city: String,
  },
});

module.exports = mongoose.model('users', userSchema);
