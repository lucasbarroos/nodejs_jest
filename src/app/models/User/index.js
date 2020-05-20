const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  name: String,
  age: Number,
  document: String,
  birthdate: Date,
  address: {
    street: String,
    number: Number,
    zone: String,
    City: String,
  },
});

module.exports = model('users', userSchema);
