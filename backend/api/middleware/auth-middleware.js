const Users = require('../users/users-model');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../secrets');

const restricted = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        res.status(401).json({ message: 'Warning: Token required! '});
    } else {
        jwt.verify(token, JWT_SECRET, (err, decodedToken) => {
            if (err) {
                res.status(401).json({ message: 'Warning: Invalid token!' });
            } else {
                req.decodedJwt = decodedToken;
                next();
            }
        });
    }
};

const checkUsernameFree = async (req, res, next) => {
    try {
        const [user] = await Users.getBy({ username: req.body.username });

        if (user) {
            res.status(422).json({ message: 'Warning: Username already taken!' });
        } else {
            req.user = user;
            next();
        }

    } catch (err) {
        next(err);
    }
};

const checkUsernameExists = async (req, res, next) => {
    try {
        const [user] = await Users.getBy({ username: req.body.username });

        if (!user) {
            res.status(422).json({ message: 'Warning: Invalid credentials!' });
        } else {
            req.user = user;
            next();
        }
        
    } catch (err) {
        next(err);
    }
};

const checkPasswordLength = (req, res, next) => {};

module.exports = {
    restricted,
    checkUsernameFree,
    checkUsernameExists,
    checkPasswordLength,
};