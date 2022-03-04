exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { username: 'test_', password: '$2a$08$UU4MfqC8Vz87m/wGBunivumy1uK/Kqa1rYA6.5P.tv6taYTR2UTXq' },
        { username: 'beep', password: '$2a$08$/a2P1/2zrxYkPreeiOAIb.ggitoWqB2jDMbGvw2SKApJqcbBNrFoa '},
      ]);
    });
};