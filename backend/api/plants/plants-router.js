const router = require('express').Router();
const Plants = require('./plants-model');

// [GET] /api/plants
router.get('/', (req, res, next) => {});

// [GET] /api/plants/:plant_id
router.get('/:plant_id', (req, res, next) => {});

// [POST] /api/plants
router.post('/', (req, res, next) => {});

// [PUT] /api/plants
router.put('/', (req, res, next) => {});

// [DELETE] /api/plants/:plant_id
router.delete('/:plant_id', (req, res, next) => {});

module.exports = router;