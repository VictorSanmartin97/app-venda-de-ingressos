
exports.up = function(knex) {
    return knex.schema.createTable('ingresso', function (table) {
        table.increments('id_ingresso').primary();
        table.integer('id_evento');
        table.integer('qtde_ingressos').notNullable();
        table.float('valor_ingresso').notNullable();
        table.enu('tipo_ingresso', ['VIP','Camarote']).notNullable(); 

        table.foreign('id_evento').references('id_evento').inTable('evento');
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable('ingresso');
};
