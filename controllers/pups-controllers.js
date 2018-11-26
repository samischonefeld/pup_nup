const Pups = require('../models/pup.js');

const pupController = {};

pupController.index = (req, res) => {
  Pups.findAll()
  .then( pups => {
    res.json({
      message: 'ok',
      data: pups
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({ err });
  });
};

pupController.show = (req, res) => {
  Pups.findById(req.params.id)
    .then( pup => {
      res.json({
        message: 'ok'
        data: pup
      });
    });
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
};

pupController.create = (req, res) => {
  Pups.create({
    dog_name: req.body.dog_name,
    dog_age: req.body.dog_age,
    dog_breed: req.body.dog_breed,
    dog_image: req.body.dog_image
  })
  .then(pup => {
    res.json({
      message: 'ok',
      data: pup
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({ err })
  });
};

pupController.update = (req, res) => {
  Pups.update({
    dog_name: req.body.dog_name,
    dog_age: req.body.dog_age,
    dog_breed: req.body.dog_breed,
    dog_image: req.body.dog_image
  },
    req.params.id,
  )
  .then( pup => {
    res.json({
      message: 'ok',
      data: pup
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({ err });
  });
};

pupController.destroy = (req, res) => {
  Pups.destroy(req.params.id)
  .then(icecream => {
    res.json({
      message: 'ok',
      data: pup,
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({ err })
  });
};


module.exports = pupController;







