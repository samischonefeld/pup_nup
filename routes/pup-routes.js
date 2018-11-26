const express = require('express');
const pupsRouter = express.Router();

const pupsController = require('../controllers/pups-controllers.js');

pupsRouter.get('/', pupsController.index)
pupsRouter.post('/', pupsController.create);
pupsRouter.get('/:id', pupsController.show);
pupsRouter.put('/:id', pupsController.update);
pupsRouter.delete('/:id', pupsController.destroy)

module.export = pupsRourter

