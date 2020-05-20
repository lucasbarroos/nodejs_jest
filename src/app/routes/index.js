const { Router } = require('express');

const routes = Router();
const UserRoutes = require('./User/index');

routes.use(UserRoutes);

module.exports = routes;
