const express = require('express');
const taskRouter = express.Router();

const taskController = require('../controllers/task-controllers.js');

taskRouter.get('/', taskController.index)
taskRouter.post('/', taskController.create);
taskRouter.get('/:id', taskController.show);
taskRouter.put('/:id', taskController.update);
taskRouter.delete('/:id', taskController.destroy)

module.exports = taskRouter;
