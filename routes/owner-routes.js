const express = require('express');
const ownerRouter = express.Router();

const ownerController = require('../controllers/owner-controllers.js');

ownerRouter.get('/', ownerController.index)
ownerRouter.post('/', ownerController.create);
ownerRouter.get('/:dog_id', ownerController.show);
ownerRouter.put('/:dog_id', ownerController.update);
ownerRouter.delete('/:dog_id', ownerController.destroy)

module.exports = ownerRouter;
