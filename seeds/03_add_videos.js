exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('videos').del(),
    // Inserts seed entries
    knex('videos').insert({
        videoSuffix: 'wzNfxbBUoto'
    }),
    knex('videos').insert({
        videoSuffix: 'MdffsSFRtI8'
    }),
    knex('videos').insert({
        videoSuffix: 'gNIwI8iE6bY'
    }),
    knex('videos').insert({
        videoSuffix: 'Fv7y_2o_3z0',
    })
  );
};
