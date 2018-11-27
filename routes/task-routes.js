const express = require('express');
const taskRouter = express.Router();

const taskRouter = require('../controllers/task-controllers.js');

taskRouter.get('/task', taskRouter.index)
taskRouter.post('/task', taskRouter.create);
taskRouter.get('/task/:id', taskRouter.show);
taskRouter.put('/task/:id', taskRouter.update);
taskRouter.delete('/task/:id', taskRouter.destroy)

module.exports = taskRouter;
