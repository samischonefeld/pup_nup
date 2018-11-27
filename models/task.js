const db = require('../db/config');

const Task = {};

Task.findAll = () => {
  return db.query(
    `
    SELECT * FROM tasks
    ORDER by id ASC
    `)
};

Task.findById = id => {
  return db.oneOrNone(
    `
    SELECT * FROM tasks
    WHERE id = $1
    `,
  [id]
  );
};

Task.create = task => {
  return db.one(
    `
    INSERT INTO tasks
    (task_name, task_status)
    VALUES ($1, $2)
    RETURNING *
    `,
    [tasks.task_name, tasks.task_status]
  );
};

Task.update = task => {
  return db.one(
    `
    UPDATE tasks SET
      task_name = $1,
      task_status = $2,
      WHERE id = $3
      RETURNING *
    `,
    [tasks.task_name, tasks.task_status, id]
  );
};

Task.destroy = id => {
  return db.none (
    `
    DELETE FROM tasks
    WHERE id = $1
    `,
    [id]
  );
};

module.exports = Task;



