const express = require('express');
const medicationRouter = express.Router();

const medicationController = require('../controllers/medication-controllers.js');

medicationRouter.get('/medication', medicationController.index)
medicationRouter.post('/medication', medicationController.create);
medicationRouter.get('/medication/:id', medicationController.show);
medicationRouter.put('/medication/:id', pupController.update);
medicationRouter.delete('/medication/:id', pupController.destroy)

module.exports = medicationRouter;
