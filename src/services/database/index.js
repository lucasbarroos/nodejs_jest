const mongoose = require('mongoose');

const DB_PORT = 27017;
const DB_HOST = 'localhost';
const DB_NAME = 'nodejs_jest';

const URL = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`;
const connectionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
};

const connect = async () => {
  mongoose.connect(URL, connectionOptions, (err) => {
    if (err) console.log('Error to connect the database');
    console.log('Mongodb connected');
  });
};

module.exports = { connect };
