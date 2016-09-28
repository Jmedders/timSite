
exports.up = function(knex, Promise) {
  return knex.schema.createTable('videos', function(table){
    table.increments('id').primary();
    table.string('videoSuffix');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('videos')
};
