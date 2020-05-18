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
       
    },

    async create(request, response) {
      const {id_cliente, login_usuario, senha_usuario, data_cadastro, is_admin } = request.body;
      
      const dataAtual = new Date();      
  
      const [id_usuario] = await connection('usuario').insert({        
        id_cliente,
        login_usuario,
        senha_usuario,
        data_cadastro,
        is_admin,
      })
      
      
      return response.json({id_usuario});
  },

}