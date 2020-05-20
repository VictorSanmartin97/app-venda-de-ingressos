const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    
    async index (request, response) {
        const clientes = await connection('cliente').select('*');
    
        console.log(cli);
        console.log(clientes);
    
        return response.json(cli);
    },
    
    async create(request, response) {
        const {nome, cpf } = request.body;
    
        //const id = crypto.randomBytes(4).toString('HEX');
    
        const [id] = await connection('cliente').insert({        
            nome,
            cpf,
        })
        
        
        return response.json({id});
    }
};