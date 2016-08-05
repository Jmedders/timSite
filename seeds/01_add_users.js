var bcrypt = require('bcrypt');

exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('users').del(),
    // Inserts seed entries
    knex('users').insert({
        username: 'admin',
        password: bcrypt.hashSync('test', 8),
        is_admin: true
    })
  );
};
