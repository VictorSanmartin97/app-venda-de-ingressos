const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    async index (request, response) {
        const ingressos = await connection('ingresso').select('*');   
        
        console.log(ingressos);
    
        return response.json(ingressos);
    },

    async create(request, response) {
        const {id_evento, nome_ingresso, valor_ingresso, setor_ingresso, quantidade, data_iniciovendas,data_fimvendas } = request.body;
    
        //const id = crypto.randomBytes(4).toString('HEX');
    
        const [id_ingresso] = await connection('ingresso').insert({        
            id_evento,
            nome_ingresso,
            valor_ingresso,
            setor_ingresso,
            quantidade,
            data_iniciovendas,
            data_fimvendas,
        })
        
        return response.json({id_ingresso});
    },

    async delete(request, response) {
        const {id} = request.params;
         
        const ingresso = await (await connection('ingresso').where('id_ingresso', id));

        if(ingresso.id_ingresso != id){
            return response.status(401).json({error: 'Operação não é permitida'});
        }

        const responses = await connection('ingresso').where('id_ingresso', id).delete();
        console.log(responses);

        return response.status(204).send();
    }



}