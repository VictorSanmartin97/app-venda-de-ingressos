
exports.up = function(knex) {
    return knex.schema.createTable('usuario', function (table) {
        table.increments('id_usuario').primary();
        table.string ('id_cliente').notNullable();
        table.string('login_usuario').notNullable();
        table.string('senha_usuario').notNullable();
        table.date('data_cadastro').notNullable();
        table.boolean('is_admin').notNullable();

        table.foreign('id_cliente').references('id').inTable('cliente');
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable('usuario');
};
