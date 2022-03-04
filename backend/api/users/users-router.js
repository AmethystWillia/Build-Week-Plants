const router = require('express').Router();
const Users = require('./users-model');

// [GET] /api/users
router.get('/', (req, res, next) => {});

// [GET] /api/users/:user_id
router.get('/:user_id', (req, res, next) => {});

module.exports = router;