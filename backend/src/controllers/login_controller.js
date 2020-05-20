require('dotenv').config();


const connection = require('../database/connection');
const crypto = require('crypto');

const jwt = require('jsonwebtoken')

let refreshTokens = []

module.exports ={

    async login(request,response){
    
        //aqui vai validação do usuario
        const username = request.body.username
        const user = { name: username }

        const accessToken = generateAccessToken(user)
        //const refreshToken = jwt.sign(user, "segredo")
       // refreshTokens.push(refreshToken)
        response.json({ accessToken: accessToken})
    }

}

function generateAccessToken(user) {
    return jwt.sign(user,process.env.TOKEN_SECRET, { expiresIn: '30s' });
  }