const express = require('express');
const vetRouter = express.Router();

const vetController = require('../controllers/vet-controllers.js');

vetRouter.get('/', vetController.index)
vetRouter.post('/', vetController.create);
vetRouter.get('/:dog_id', vetController.show);
vetRouter.put('/:dog_id', vetController.update);
vetRouter.delete('/:dog_id', vetController.destroy)

module.exports = vetRouter;
