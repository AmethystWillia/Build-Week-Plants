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

const delPlant = async (plant_id) => {
    const result = await getById(plant_id)

    await db('plants')
        .where({plant_id})
        .del();
    
    return {result};
};

module.exports = {
    getAll,
    getById,
    makePlant,
    update,
    delPlant,
};