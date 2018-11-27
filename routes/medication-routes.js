const express = require('express');
const medicationRouter = express.Router();

const medicationController = require('../controllers/medication-controllers.js');

medicationRouter.get('/medication', medicationController.index)
medicationRouter.post('/medication', medicationController.create);
medicationRouter.get('/medication/:id', medicationController.show);
medicationRouter.put('/medication/:id', medicationController.update);
medicationRouter.delete('/medication/:id', medicationController.destroy)

module.exports = medicationRouter;
