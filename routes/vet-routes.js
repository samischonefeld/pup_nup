const express = require('express');
const vetRouter = express.Router();

const vetController = require('../controllers/vet-controllers.js');

vetRouter.get('/task', vetController.index)
vetRouter.post('/task', vetController.create);
vetRouter.get('/task/:id', vetController.show);
vetRouter.put('/task/:id', vetController.update);
vetRouter.delete('/task/:id', vetController.destroy)

module.exports = vetRouter;
