const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    async index (request, response) {
        const ingressos = await connection('ingressos').select('*');   
        
        console.log(ingressos);
    
        return response.json(ingressos);
    },

    async create(request, response) {
        const {id_evento, qtde_ingresso, valor_ingresso, tipo_ingresso } = request.body;
    
        //const id = crypto.randomBytes(4).toString('HEX');
    
        const [id_ingresso] = await connection('ingressos').insert({        
            id_evento,
            qtde_ingresso,
            valor_ingresso,
            tipo_ingresso
        })
        
        console.log(id_ingresso + ' ' + id_evento + ' ' + qtde_ingresso + ' ' + valor_ingresso + ' ' + tipo_ingresso);
        return response.json({id_ingresso});
    },

    async delete(request, response) {
        const {id_ingresso} = request.params;
         
        const ingresso = await connection('ingressos').where('id_ingresso', id_ingresso).first();

        if(ingresso.id != id_ingresso){
            return response.status(401).json({error: 'Operação não é permitida'});
        }

        await connection('ingressos').where('id_ingresso', id_ingresso).delete();

        return response.status(204).send();
    }



}