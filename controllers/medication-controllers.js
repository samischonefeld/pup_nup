const Medication = require('../models/medication.js');

const medicationController = {};

medicationController.index = (req, res) => {
  Medication.findAll()
  .then( medications => {
    res.json({
      message: 'ok',
      data: medications
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({ err });
  });
};

medicationController.show = (req, res) => {
  Medication.findById(req.params.dog_id)
    .then( medication => {
      res.json({
        message: 'ok',
        data: medication
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
};

medicationController.create = (req, res) => {
  Medication.create({
    medication_name: req.body.medication_name,
    medication_dose: req.body.medication_dose
  })
  .then(medication => {
    res.json({
      message: 'ok',
      data: medication
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({ err })
  });
};

medicationController.update = (req, res) => {
  Medication.update({
    medication_name: req.body.medication_name,
    medication_dose: req.body.medication_dose
  },
    req.params.dog_id,
  )
  .then( medication => {
    res.json({
      message: 'ok',
      data: medication
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({ err });
  });
};

medicationController.destroy = (req, res) => {
  Medication.destroy(req.params.id)
  .then(medication => {
    res.json({
      message: 'ok',
      data: medication,
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({ err })
  });
};


module.exports = medicationController;








