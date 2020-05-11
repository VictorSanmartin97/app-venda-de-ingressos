
exports.up = function(knex) {
    return knex.schema.createTable('cartao_credito', function (table) {
        table.increments('id_cartao').primary();
        table.string ('id_cliente').notNullable();
        table.string('nome_completo').notNullable();
        table.string('numero_cartao').notNullable();
        table.string('num_seguranca').notNullable();
        table.date('data_vencimento').notNullable();

        table.foreign('id_cliente').references('id').inTable('cliente');
      });
};

exports.down = function(knex) {
  return knex.schema.dropTable('cartao_credito');
};
