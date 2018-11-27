const express = require('express');
const ownerRouter = express.Router();

const ownerController = require('../controllers/owner-controllers.js');

ownerRouter.get('/medication', ownerController.index)
ownerRouter.post('/medication', ownerController.create);
ownerRouter.get('/medication/:id', ownerController.show);
ownerRouter.put('/medication/:id', ownerController.update);
ownerRouter.delete('/medication/:id', ownerController.destroy)

module.exports = ownerRouter;
