exports.up = function(knex) {
    return knex.schema.createTable('pedido', function (table) {
        table.increments('id_pedido').primary();
        table.integer('id_compra').notNullable();
        table.integer('id_cliente').notNullable();
        table.float('valor_compra').notNullable();
        

        
        table.foreign('id_cliente').references('id').inTable('cliente');
        table.foreign('id_compra').references('id_compra').inTable('carrinho_compra');
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable('pedido');
};
