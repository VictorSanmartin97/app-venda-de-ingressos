exports.up = function(knex) {
    return knex.schema.createTable('evento', function (table) {
        table.increments('id_evento').primary();
        table.string('nome_evento').notNullable();
        table.string('descricao_evento').notNullable();
        table.enu('tipo_evento', ['show','aniversário']).notNullable();
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable('evento');
};
