const db = require('../data/dbConfig');
const Users = require('./users/users-model');
const request = require('supertest');
const server = require('./server');

beforeAll (async () => {
    await db.migrate.rollback();
    await db.migrate.latest();
});

beforeEach (async () => {
    await db('users').truncate();
});

test ('Sanity check', () => {
    expect(true).toBe(true);
});