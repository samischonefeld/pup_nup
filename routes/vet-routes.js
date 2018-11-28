const express = require('express');
const vetRouter = express.Router();

const vetController = require('../controllers/vet-controllers.js');

vetRouter.get('/', vetController.index)
vetRouter.post('/', vetController.create);
vetRouter.get('/:id', vetController.show);
vetRouter.put('/:id', vetController.update);
vetRouter.delete('/:id', vetController.destroy)

module.exports = vetRouter;
