
exports.up = function(knex) {
    return knex.schema.createTable('ingresso', function (table) {
        table.increments('id_ingresso').primary();
        table.integer('id_evento');
        table.integer('quantidade').notNullable();
        table.float('valor_ingresso').notNullable();        
        table.text('setor_ingresso').notNullable();
        table.text('nome_ingresso').notNullable();
        table.date('data_iniciovendas').notNullable();
        table.date('data_fimvendas').notNullable();



        table.foreign('id_evento').references('id_evento').inTable('evento');
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable('ingresso');
};
