const db = require('../db/config');

const Vet = {};

Vet.findAll = () => {
  return db.query(
    `
    SELECT * FROM vets
    ORDER by id ASC
    `)
};

Vet.findById = id => {
  return db.oneOrNone(
    `
    SELECT * FROM vets
    WHERE dog_id = $1
    `,
  [id]
  );
};

Vet.create = (vets, id) => {
  return db.one(
    `
    INSERT INTO vets
    (vet_name, vet_address, vet_phone, dog_id)
    VALUES ($1, $2, $3, $4)
    RETURNING *
    `,
    [vets.vet_name, vets.vet_address, vets.vet_phone, id]
  );
};

Vet.update = (vets, id) => {
  return db.one(
    `
    UPDATE vets SET
      vet_name = $1,
      vet_address = $2,
      vet_phone = $3
      WHERE dog_id = $4
      RETURNING *
    `,
    [vets.vet_name, vets.vet_address, vets.vet_phone, id]
  );
};

Vet.destroy = dog_id => {
  return db.none (
    `
    DELETE FROM vets
    WHERE dog_id = $1
    `,
    [id]
  );
};

module.exports = Vet;

