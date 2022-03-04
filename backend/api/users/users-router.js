const router = require('express').Router();
const Users = require('./users-model');

// [GET] /api/users
router.get('/', (req, res, next) => {
    Users.getAll()
        .then(all => {
            res.json(all);
        })
        .catch(next);
});

// [GET] /api/users/:user_id
router.get('/:user_id', (req, res, next) => {});

module.exports = router;