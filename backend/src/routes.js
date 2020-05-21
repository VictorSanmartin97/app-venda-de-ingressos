require('dotenv').config();
const express = require('express');
const auth = require('./midlleware/auth');
const login_controller = require('./controllers/login_controller');
const cliente_controller = require('./controllers/cliente_controller');
const ingresso_controller = require('./controllers/ingresso_controller');
const usuario_controller = require('./controllers/usuario_controller');

const routes = express.Router();


routes.get('/cliente', cliente_controller.index);
routes.post('/cliente', cliente_controller.create);
routes.delete('/cliente:id', cliente_controller.delete);

routes.get('/ingressos', ingresso_controller.index);
routes.post('/ingresso', ingresso_controller.create);
routes.delete('/ingresso:id_ingresso', ingresso_controller.delete);


routes.get('/usuarios', usuario_controller.index);
routes.post('/usuario', usuario_controller.create);


routes.get('/cliente', auth.authenticateToken , cliente_controller.index);//exemplo com midlleware
routes.post('/login', login_controller.login);

module.exports = routes;


  
