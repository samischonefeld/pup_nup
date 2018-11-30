const db = require('../db/config');

const Pup = {};

Pup.findAll = () => {
  return db.query(`SELECT * FROM pups ORDER by id ASC`)
};

Pup.findById = id => {
  return db.oneOrNone(
    `SELECT * FROM pups
    WHERE id = $1`,
  [id]
  );
};

Pup.create = pups => {
  return db.one(
    `INSERT INTO pups (dog_name, dog_age, dog_breed, dog_image)
    VALUES ($1, $2, $3, $4)
    RETURNING * `,
    [pups.dog_name, pups.dog_age, pups.dog_breed, pups.dog_image]
  );
};

Pup.update = (pups, id) => {
  return db.one(
    `
    UPDATE pups SET
      dog_age = $1,
      dog_breed = $2,
      dog_image = $3
      WHERE id = $4
      RETURNING *
    `,
    [pups.dog_age, pups.dog_breed, pups.dog_image, id]
  );
};

Pup.destroy = id => {
  return db.none (
    `
    DELETE FROM pups
    WHERE id = $1
    `,
    [id]
  );
};

module.exports = Pup;
