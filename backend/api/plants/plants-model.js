const db = require('../../data/dbConfig');

const getAll = () => {
    return db('plants');
};

const getById = (plant_id) => {
    return db('plants')
        .where({ plant_id })
        .first();
};

const makePlant = async (plant) => {
    const [id] = await db('plants')
        .insert(plant);

    return getById(id);
};

const update = (plant_id, changes) => {
    return db('plants')
        .where({ plant_id })
        .update(changes);
};

const delPlant = (plant_id) => {
    return db('pants')
        .wwhere({ plant_id })
        .del();
};

module.exports = {
    getAll,
    getById,
    makePlant,
    update,
    delPlant,
};