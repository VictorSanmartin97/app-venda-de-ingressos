require('dotenv').config();


const express = require('express');
const cliente_controller = require('./controllers/cliente_controller');

const login_controller = require('./controllers/login_controller');
 

const routes = express.Router();
const jwt = require('jsonwebtoken');

routes.get('/cliente', authenticateToken, cliente_controller.index);//exemplo com midlleware
routes.post('/cliente', cliente_controller.create);
routes.post('/login', login_controller.login);


module.exports = routes;

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
  