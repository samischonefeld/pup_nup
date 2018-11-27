const Vet = require('../models/vet.js');

const vetController = {};

vetController.index = (req, res) => {
  Vet.findAll()
  .then( vets => {
    res.json({
      message: 'ok',
      data: vets
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({ err });
  });
};

vetController.show = (req, res) => {
  Vet.findById(req.params.id)
    .then( vet => {
      res.json({
        message: 'ok',
        data: vet
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
};

vetController.create = (req, res) => {
  Vet.create({
    vet_name: req.body.vet_name,
    vet_address: req.body.vet_address,
    vet_phone: req.body.vet_phone
  })
  .then(vet => {
    res.json({
      message: 'ok',
      data: vet
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({ err })
  });
};

vetController.update = (req, res) => {
  Vet.update({
    vet_name: req.body.vet_name,
    vet_address: req.body.vet_address,
    vet_phone: req.body.vet_phone
  },
    req.params.id,
  )
  .then( vet => {
    res.json({
      message: 'ok',
      data: vet
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({ err });
  });
};

vetController.destroy = (req, res) => {
  Vet.destroy(req.params.id)
  .then(vet => {
    res.json({
      message: 'ok',
      data: vet,
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({ err })
  });
};


module.exports = vetController;











