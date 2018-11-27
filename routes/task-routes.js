const express = require('express');
const taskRouter = express.Router();

const taskController = require('../controllers/task-controllers.js');

taskRouter.get('/task', taskController.index)
taskRouter.post('/task', taskController.create);
taskRouter.get('/task/:id', taskController.show);
taskRouter.put('/task/:id', taskController.update);
taskRouter.delete('/task/:id', taskController.destroy)

module.exports = taskRouter;
