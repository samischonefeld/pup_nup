const express = require('express');
const medicationRouter = express.Router();

const medicationController = require('../controllers/medication-controllers.js');

medicationRouter.get('/', medicationController.index)
medicationRouter.post('/', medicationController.create);
medicationRouter.get('/:dog_id', medicationController.show);
medicationRouter.put('/:dog_id', medicationController.update);
medicationRouter.delete('/:dog_id', medicationController.destroy)

module.exports = medicationRouter;
