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

const update = async (plant_id, changes) => {
    await db('plants')
        .where({ plant_id })
        .update(changes);

    return getById(plant_id);
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