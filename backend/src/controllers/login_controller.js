const connection = require('../database/connection');

module.exports = {
    
    async create (request, response) {
        const {id} = request.body;

        if(user = await (await connection('usuario')).find(u=> u.login_usuario === login)){
            return response.json(user);
        }

        let error  = {err:"UserNotFound", errMsg:"O usuario não foi encontrado"}; 
        return response.json(error);
    }
}