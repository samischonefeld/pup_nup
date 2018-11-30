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

Vet.create = vets => {
  return db.one(
    `
    INSERT INTO vets
    (vet_name, vet_address, vet_phone)
    VALUES ($1, $2, $3)
    RETURNING *
    `,
    [vets.vet_name, vets.vet_address, vets.vet_phone]
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

Vet.destroy = id => {
  return db.none (
    `
    DELETE FROM vets
    WHERE id = $1
    `,
    [id]
  );
};

module.exports = Vet;

