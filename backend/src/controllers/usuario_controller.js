const connection = require('../database/connection');
const crypto = require('crypto');


module.exports ={
  async index (request, response) {
    const usuarios = await connection('usuario').select('*');

    console.log(usuarios);

    return response.json(usuarios);
  },
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
      const {login_usuario, senha_usuario, data_cadastro, is_admin } = request.body;   
      const x = request.body.login_usuario;

      console.log(x);
      const id_usuario = crypto.randomBytes(4).toString('HEX');


      await connection('usuario').insert({        
        id_usuario,
        login_usuario,
        senha_usuario,
        data_cadastro,
        is_admin,
      });
      
      
      return response.json({id_usuario});
  },

}