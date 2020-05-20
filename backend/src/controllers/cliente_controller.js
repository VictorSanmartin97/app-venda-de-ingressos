const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    
    async index (request, response) {
        const clientes = await connection('cliente').select('*');   
        
        console.log(clientes);
    
        return response.json(clientes);
    },
    
    async create(request, response) {
        const {nome, cpf } = request.body;
    
        //const id = crypto.randomBytes(4).toString('HEX');
    
        const [id] = await connection('cliente').insert({        
            nome,
            cpf,
        })
        
        
        return response.json({id});
    },

    async delete(request, response) {
        const {id} = request.params;
         
        const cliente = await connection('clientes').where('id', id).first();

        if(cliente.id != id){
            return response.status(401).json({error: 'Operação não é permitida'});
        }

        await connection('cliente').where('id', id).delete();

        return response.status(204).send();
    }
};