
exports.up = function(knex) {
    return knex.schema.table('evento', function (table) {
        
        table.float('valor_ingresso');

        table.foreign('valor_ingresso').references('valor_ingresso').inTable('ingresso');
      });
};

exports.down = function(knex) {
    
};
