const db = require('../../data/dbConfig');

const getAll = () => {
    return db('users')
        .select('user_id', 'username');
};

const getBy = (filter) => {
    return db('users')
        .where(filter);
};

const getById = (user_id) => {
    return db('users')
        .where({ user_id })
        .first();
};

const add = async (user) => {
    const [id] = await db('users')
        .insert(user);
    
        return getById(id);
};

module.exports = {
    getAll,
    getBy,
    getById,
    add,
};