const express = require('express');
const ownerRouter = express.Router();

const ownerController = require('../controllers/owner-controllers.js');

ownerRouter.get('/', ownerController.index)
ownerRouter.post('/', ownerController.create);
ownerRouter.get('/:id', ownerController.show);
ownerRouter.put('/:id', ownerController.update);
ownerRouter.delete('/:id', ownerController.destroy)

module.exports = ownerRouter;
