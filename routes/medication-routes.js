const express = require('express');
const medicationRouter = express.Router();

const medicationController = require('../controllers/medication-controllers.js');

medicationRouter.get('/medication', medicationController.index)
medicationRouter.post('/medication', medicationController.create);
medicationRouter.get('/:id/medication', medicationController.show);
medicationRouter.put('/:id/medication', pupController.update);
medicationRouter.delete('/:id/medication', pupController.destroy)

module.export = medicationRouter;
