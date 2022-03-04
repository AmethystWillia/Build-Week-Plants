const router = require('express').Router();

const Users = require('../users/users-model');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../secrets');

// [POST] /api/auth/register
router.post('/register', (req, res, next) => {});

// [POST] /api/auth/login
router.post('/login', (req, res, next) => {});

const makeToken = (user) => {
    const payload = {
        subject: user.user_id,
        username: user.username,
    };
    const options = {
        expiresin: 'id'
    };

    return jwt.sign(payload, JWT_SECRET, options);
};

module.exports = router;