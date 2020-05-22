const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const database = require('./src/services/database/index');
const routes = require('./src/app/routes/index');

app.use(bodyParser.urlencoded(({ extended: true })));
app.use(bodyParser.json());
app.use(routes);

database.connect();
app.listen(3333, 'localhost', ((err) => {
  if (err) console.log('Error to run the application');
}));

module.exports = app;
