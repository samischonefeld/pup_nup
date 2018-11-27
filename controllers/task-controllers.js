const Task = require('../models/task.js');

const taskController = {};

taskController.index = (req, res) => {
  Task.findAll()
  .then( tasks => {
    res.json({
      message: 'ok',
      data: tasks
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({ err });
  });
};

taskController.show = (req, res) => {
  Task.findById(req.params.id)
    .then( task => {
      res.json({
        message: 'ok',
        data: task
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
};

taskController.create = (req, res) => {
  Task.create({
    task_name: req.body.task_name,
    task_status: req.body.task_status
  })
  .then(task => {
    res.json({
      message: 'ok',
      data: task
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({ err })
  });
};

taskController.update = (req, res) => {
  Task.update({
       task_name: req.body.task_name,
       task_status: req.body.task_status
  },
    req.params.id,
  )
  .then( task => {
    res.json({
      message: 'ok',
      data: task
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({ err });
  });
};

taskController.destroy = (req, res) => {
  Task.destroy(req.params.id)
  .then(task => {
    res.json({
      message: 'ok',
      data: task,
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({ err })
  });
};


module.exports = taskController;










