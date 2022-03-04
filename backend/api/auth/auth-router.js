const router = require('express').Router();

const Users = require('../users/users-model');

const { validateInput, checkUsernameFree, checkUsernameExists } = require('../middleware/auth-middleware');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../secrets');

// [POST] /api/auth/register
router.post('/register', validateInput, checkUsernameFree, (req, res, next) => {
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
router.post('/login', checkUsernameExists, (req, res, next) => {
    const { username, password } = req.body;

    Users.getBy({ username })
        .then(([user]) => {
            if (user && bcrypt.compareSync(password, user.password)) {
                const token = makeToken(user);

                res.status(200).json({ message: `Welcome back, ${username}!`, token });
            } else {
                res.status(401).json({ message: 'Earning: Invalid credentials!' });
            }
        })
        .catch(next);
});

const makeToken = (user) => {
    const payload = {
        subject: user.user_id,
        username: user.username,
    };
    const options = {
        expiresIn: '1d'
    };

    return jwt.sign(payload, JWT_SECRET, options);
};

module.exports = router;