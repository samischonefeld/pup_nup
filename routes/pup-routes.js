const express = require('express');
const pupRouter = express.Router();

const pupController = require('../controllers/pup-controllers.js');

pupRouter.get('/', pupController.index)
pupRouter.post('/', pupController.create);
pupRouter.get('/:id', pupController.show);
pupRouter.put('/:id', pupController.update);
pupRouter.delete('/:id', pupController.destroy)

module.export = pupRouter

