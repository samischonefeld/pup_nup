const express = require('express');
const medicationRouter = express.Router();

const medicationController = require('../controllers/medication-controllers.js');

medicationRouter.get('/', medicationController.index)
medicationRouter.post('/', medicationController.create);
medicationRouter.get('/:id', medicationController.show);
medicationRouter.put('/:id', medicationController.update);
medicationRouter.delete('/:id', medicationController.destroy)

module.exports = medicationRouter;
