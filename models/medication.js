const db = require('../db/config');

const Medication = {};

Medication.findAll = () => {
  return db.query(
    `
    SELECT * FROM medications
    ORDER by id ASC
    `)
};

Medication.findById = id => {
  return db.oneOrNone(
    `
    SELECT * FROM medications
    WHERE id = $1
    `,
  [id]
  );
};

Medication.create = medication => {
  return db.one(
    `
    INSERT INTO medications
    (medication_name, medication_dose)
    VALUES ($1, $2)
    RETURNING *
    `,
    [medications.medication_name, medications.medication_dose]
  );
};

Medication.update = medication => {
  return db.one(
    `
    UPDATE medications SET
      medication_name = $1,
      medication_dose = $2,
      WHERE id = $3
      RETURNING *
    `,
    [medications.medication_name, medications.medication_dose, id]
  );
};

Medication.destroy = id => {
  return db.none (
    `
    DELETE FROM medications
    WHERE id = $1
    `,
    [id]
  );
};

module.exports = Medication;


