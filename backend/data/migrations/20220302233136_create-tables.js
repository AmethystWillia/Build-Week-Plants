exports.up = function(knex) {
    return knex.schema
    .createTable('users', users => {
        users.increments();
        users.string('username', 30).notNullable().unique();
        users.string('password', 50).notNullable();
    })
    .createTable('plants', plants => {
        plants.increments();
        plants.string('scientific_name', 30).notNullable().unique();
        plants.string('common_name', 50).notNullable().unique();
    });
};

exports.down = function(knex) {
    return knex.schema
    .droptableIfExists('users')
    .droptableIfExists('plants');
};