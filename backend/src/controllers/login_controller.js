require('dotenv').config();


const connection = require('../database/connection'); 

const crypto = require('crypto');

const jwt = require('jsonwebtoken')

let refreshTokens = []

module.exports ={

    async login(request,response){
        var user  = request.body
        try {
            console.log((await connection('usuario')));
            var userRecovered = await (await connection('usuario')).find(u => user.login === u.login_usuario)
                if (user.senha  ===  userRecovered.senha_usuario){
                    const accessToken = generateAccessToken(user)
                    response.json({ accessToken: accessToken}).cookie('token', accessToken, { httpOnly: true }).send();  
                }
                else{response.status(401).send()}
        } catch (e) {
            response.status(404).send();
        }
    }
}

function generateAccessToken(user) {
    return jwt.sign(user,process.env.TOKEN_SECRET, { expiresIn: '1d' });
  }
