exports.up = function(knex) {
    return knex.schema.createTable('carrinho_compras', function (table) {
        table.increments('id_compra').primary();
        table.integer('id_cliente').notNullable();
        table.integer('id_ingresso').notNullable();
        table.float('valor_total').notNullable();
        
        table.foreign('id_cliente').references('id').inTable('cliente');
        table.foreign('id_ingresso').references('id_ingresso').inTable('ingresso');
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable('carrinho_compras');
};
