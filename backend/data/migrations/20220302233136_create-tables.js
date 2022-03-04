exports.up = function(knex) {
    return knex.schema
    .createTable('users', users => {
        users.increments('user_id');
        users.string('username', 30).notNullable().unique();
        users.string('password', 50).notNullable();
    })
    .createTable('plants', plants => {
        plants.increments('plant_id');
        plants.string('scientific_name', 60).notNullable();
        plants.string('common_name', 50).notNullable();
        plants.string('nickname', 50);
        plants.integer('water_frequency').notNullable();
        plants.integer('user_id')
            .unsigned()
            .notNullable()
            .references('user_id').inTable('users');
    });
};

exports.down = function(knex) {
    return knex.schema
    .droptableIfExists('users')
    .droptableIfExists('plants');
};