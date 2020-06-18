const connection = require('../database/connection');
const crypto = require('crypto');
const { getByLogin } = require('./usuario_controller');
const { report } = require('../routes');

module.exports = {
    async index (request, response) {
        const compras = await connection('carrinho_compras').select('*');   
        return response.json(compras);
    },

    async create(request, response) {
        const { id_cliente, id_ingresso, valor_total} = request.body;
        if(await ((await connection('ingresso').select('*')).find(i=> i.id_ingresso== request.body.id_ingresso))){
            const [id] = await connection('carrinho_compras').insert({        
                id_cliente,
                id_ingresso,
                valor_total,
            })
            return response.json({id});
        }
        
        return response.json("ERRO");
    },

    async delete(request, response) {
        if (await (await connection('carrinho_compras').select('*')).find(compra=>compra.id_compra == request.params.id)){
            console.log("here")
            return response.status(200).json("deleted");
        }
        return response.json(404).body("compra não encontrada");
    },
    async getByid(request, response) {
       const comp = await (await connection("carrinho_compras").select("*")).find(compra=>compra.id_compra == request.params.id);
       if(comp!= undefined){
           return response.json(comp);
       }
       return response.status(400);
    }
}