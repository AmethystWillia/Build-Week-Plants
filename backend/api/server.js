const express = require('express');

const usersRouter = require('./users/users-router');
const authRouter = require('./auth/auth-router');
const plantsRouter = require('./plants/plants-router');

const server = express();

server.use(express.json());

server.use('/api/users', usersRouter);
server.use('/api/auth', authRouter);
server.use('/api/plants', plantsRouter);

module.exports = server;