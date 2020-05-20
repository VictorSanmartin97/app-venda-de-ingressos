require('dotenv').config();


const express = require('express');
const cliente_controller = require('./controllers/cliente_controller');

const login_controller = require('./controllers/login_controller');
 
const auth = require('./midlleware/auth');

const routes = express.Router();
const jwt = require('jsonwebtoken');

routes.get('/cliente', auth.authenticateToken , cliente_controller.index);//exemplo com midlleware
routes.post('/cliente', cliente_controller.create);
routes.post('/login', login_controller.login);

module.exports = routes;


  
