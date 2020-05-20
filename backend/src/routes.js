require('dotenv').config();


const express = require('express');
<<<<<<< HEAD
const cliente_controller = require('./controllers/cliente_controller');

const login_controller = require('./controllers/login_controller');
 
=======
>>>>>>> 0c1397e3780b201e3c90fc20982205544078655a

const cliente_controller = require('./controllers/cliente_controller');
const usuario_controller = require('./controllers/usuario_controller');
const routes = express.Router();
const jwt = require('jsonwebtoken');

routes.get('/cliente', authenticateToken, cliente_controller.index);
routes.post('/cliente', cliente_controller.create);
<<<<<<< HEAD
routes.post('/login', login_controller.login);


module.exports = routes;
=======
routes.get('/usuario', usuario_controller.getByLogin);
>>>>>>> 0c1397e3780b201e3c90fc20982205544078655a

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401)
  
    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
      console.log(err)
      if (err) return res.sendStatus(403)
      req.user = user
      next()
    })
  }