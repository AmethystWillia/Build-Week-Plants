exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('plants').del()
    .then(function () {
      // Inserts seed entries
      return knex('plants').insert([
        { scientific_name: 'Rose', common_name: 'Rose', nickname: 'Peter', water_frequency: 2, user_id: 1 },
        { scientific_name: 'Aloe barbadensis miller', common_name: 'Aloe Vera', nickname: 'Tiffany', water_frequency: 1, user_id: 2 },
        { scientific_name: 'Viola tricolor var. hortensis', common_name: 'Pansy', nickname: 'Eliza', water_frequency: 3, user_id: 1 },
        { scientific_name: 'Papaver', common_name: 'Poppy', nickname: 'Fred', water_frequency: 3, user_id: 2 },
      ]);
    });
};
