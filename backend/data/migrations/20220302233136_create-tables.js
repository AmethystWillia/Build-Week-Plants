exports.up = function(knex) {
    return knex.schema
    .createTable('users', users => {
        users.increments('user_id');
        users.string('username', 30).notNullable().unique();
        users.string('password', 50).notNullable();
    })
    .createTable('plants', plants => {
        plants.increments('plant_id');
        plants.string('scientific_name', 30).notNullable().unique();
        plants.string('common_name', 50).notNullable().unique();
        plants.string('nickname', 50);
        plants.string('common_name', 50).notNullable().unique();
        plants.integer('water_frequency').notNullable();
        plants.integer('user_id')
            .unsigned()
            .notNullable()
            .references('user_id').inTable('users')
    });
};

exports.down = function(knex) {
    return knex.schema
    .droptableIfExists('users')
    .droptableIfExists('plants');
};