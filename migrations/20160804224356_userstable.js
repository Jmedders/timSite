
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table){
    table.increments('id').primary();
    table.string('username').notNullable().unique();
    table.string('password').notNullable();
    table.boolean('is_admin').defaultTo(false)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};
