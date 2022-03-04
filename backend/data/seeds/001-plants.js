
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        { scientific_name: 'Aloe barbadensis miller',
        common_name: 'Aloe vera',
        nickname: 'Tabitha',
       },
      ]);
    });
};
