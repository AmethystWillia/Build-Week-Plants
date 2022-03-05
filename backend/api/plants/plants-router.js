const router = require('express').Router();
const Plants = require('./plants-model');

// [GET] /api/plants
router.get('/', (req, res, next) => {
    Plants.getAll()
        .then(all => {
            res.json(all);
        })
        .catch(next);
});

// [GET] /api/plants/:plant_id
router.get('/:plant_id', (req, res, next) => {
    Plants.getById(req.params.plant_id)
        .then(plant => {
            res.json(plant);
        })
        .catch(next);
});

// [POST] /api/plants
router.post('/', (req, res, next) => {
    Plants.makePlant(req.body)
        .then(newPlant => {
            res.status(201).json(newPlant);
        })
        .catch(next);
});

// [PUT] /api/plants/:plant_id
router.put('/:plant_id', (req, res, next) => {
    const {plant_id} = req.params;

    Plants.update(plant_id, req.body)
        .then(plant => {
            res.json(plant);
        })
        .catch(next);
});

// [DELETE] /api/plants/:plant_id
router.delete('/:plant_id', (req, res, next) => {});

module.exports = router;