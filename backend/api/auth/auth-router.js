const router = require('express').Router();

const Users = require('../users/users-model');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../secrets');

// [POST] /api/auth/register
router.post('/register', (req, res, next) => {
    const { username, password } = req.body;
    const hash = bcrypt.hashSync(password, 8);

    Users.add({ username, password: hash })
        .then(user => {
            res.status(201).json({
                id: user.user_id,
                username: user.username,
                password: user.password,
            });
        })
        .catch(next);
});

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