
exports.up = function(knex) {
    return knex.schema.table('ingresso', function (table) {
        
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable('ingresso');
};
