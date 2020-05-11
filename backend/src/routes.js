const express = require('express');
const cliente_controller = require('./controllers/cliente_controller');
 

const routes = express.Router();

routes.get('/cliente', cliente_controller.index);
routes.post('/cliente', cliente_controller.create);

module.exports = routes;