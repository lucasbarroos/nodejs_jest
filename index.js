const express = require('express');

const app = express();
const database = require('./src/services/database/index');
const routes = require('./src/app/routes/index');

app.use(routes);

app.listen(3333, ((err) => {
  if (err) console.log('Error to run the application');
  console.log('Application running on port 3333');
  database.connect();
}));
