
exports.up = function(knex, Promise) {
  return knex.schema.createTable('blogs', function(table){
    table.increments('id').primary();
    table.string('postdate');
    table.text('post', 'longtext').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('blogs')
};
