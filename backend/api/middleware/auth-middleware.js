const Users = require('../users/users-model');
const jwt = require('jsonwebtoken');

const restricted = (req, res, next) => {};

const checkUsernameFree = async (req, res, next) => {};

const checkUsernameExists = async (req, res, next) => {};

const checkPasswordLength = (req, res, next) => {};

module.exports = {
    restricted,
    checkUsernameFree,
    checkUsernameExists,
    checkPasswordLength,
};