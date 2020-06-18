const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    async index (request, response) {
        const eventos = await connection('evento').select('*');   
        
        console.log(eventos);
    
        return response.json(eventos);
    },

    async create(request, response) {
        const {nome_evento, descricao_evento, tipo_evento, hora_inicio} = request.body;
    
        //const id = crypto.randomBytes(4).toString('HEX');
    
        const [id_evento] = await connection('evento').insert({        
            nome_evento,
            descricao_evento,
            tipo_evento,
            hora_inicio,
        })
        
        return response.json({id_evento});
    },

    async delete(request, response) {
        const {id} = request.params;
         
        const evento = await (await connection('evento').where('id_evento', id));

        if(evento.id_evento != id){
            return response.status(401).json({error: 'Operação não é permitida'});
        }

        await connection('evento').where('id_evento', id).delete();

        return response.status(204).send();
    }



}