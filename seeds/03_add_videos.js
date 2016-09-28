exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('videos').del(),
    // Inserts seed entries
    knex('videos').insert({
        videoSuffix: 'wzNfxbBUoto'
    }),
    knex('videos').insert({
        videoSuffix: '1BRWF0iuFnQ'
    }),
    knex('videos').insert({
        videoSuffix: 'Fv7y_2o_3z0',
    }),
    knex('videos').insert({
        videoSuffix: 'MdffsSFRtI8'
    })
  );
};
