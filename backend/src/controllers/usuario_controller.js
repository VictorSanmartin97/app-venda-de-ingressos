const connection = require('../database/connection');
const crypto = require('crypto');


module.exports ={

    async getByLogin(request, response){
      const {login} = request.body;
      let user;

      if(user = await (await connection('usuario')).find(u=> u.login_usuario === login)){
             return response.json(user);
            }
        
       let error  = {err:"UserNotFound", errMsg:"O usuario não foi encontrado"}; 
       return response.json(error);
       
    }

}