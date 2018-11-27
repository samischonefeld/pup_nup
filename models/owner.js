const db = require('../db/config');

const Owner = {};

Owner.findAll = () => {
  return db.query(`SELECT * FROM owners ORDER by id ASC`)
};

Owner.findById = id => {
  return db.oneOrNone(`SELECT * FROM owners
    WHERE id = $1`,
  [id]
  );
};

Owner.create = owner => {
  return db.one(
    `INSERT INTO owners (owner_name)
    VALUES ($1)
    RETURNING * `,
    [owners.owner_name]
  );
};

Owner.update = owner => {
  return db.one(
    `
    UPDATE pups SET
      owner_name = $1
      RETURNING *
    `,
    [owners.owner_name, id]
  );
};

Owner.destroy = id => {
  return db.none (
    `
    DELETE FROM owners
    WHERE id = $1
    `,
    [id]
  );
};

module.exports = Owner;
