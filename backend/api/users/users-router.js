const router = require('express').Router();
const Users = require('./users-model');

const { restricted } = require('../middleware/auth-middleware');

// [GET] /api/users
router.get('/', restricted, (req, res, next) => {
    Users.getAll()
        .then(all => {
            res.json(all);
        })
        .catch(next);
});

// [GET] /api/users/:user_id
router.get('/:user_id', restricted, (req, res, next) => {
    Users.getById(req.params.user_id)
        .then(user => {
            res.json(user);
        })
        .catch(next);
});

module.exports = router;