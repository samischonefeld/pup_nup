const db = require('../db/config');

const Pup = {};

Pup.findAll = () => {
  return db.query(`SELECT * FROM pups ORDER by id ASC`)
};

Pup.findById = id => {
  return db.oneOrNone(`SELECT * FROM pups
    WHERE id = $1`,
  [id]
  );
};

Pup.create = pup => {
  return db.one(
    `INSERT INTO pups (dog_name, dog_age, dog_breed, dog_image)
    VALUES ($1, $2, $3, $4)
    RETURNING * `,
    [pups.dog_name, pups.dog_age, pups.dog_breed, pups.dog_image]
  );
};

Pup.update = pup => {
  return db.one(
    `
    UPDATE pups SET
      dog_name = $1,
      dog_age = $2,
      dog_breed = $3,
      dog_image = $4
      WHERE id = $5
      RETURNING *
    `,
    [pups.dog_name, pups.dog_age, pups.dog_breed, pups.dog_image, id]
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
