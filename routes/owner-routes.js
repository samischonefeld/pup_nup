const express = require('express');
const ownerRouter = express.Router();

const ownerController = require('../controllers/owner-controllers.js');

ownerRouter.get('/owner', ownerController.index)
ownerRouter.post('/owner', ownerController.create);
ownerRouter.get('/owner/:id', ownerController.show);
ownerRouter.put('/owner/:id', ownerController.update);
ownerRouter.delete('/owner/:id', ownerController.destroy)

module.exports = ownerRouter;
