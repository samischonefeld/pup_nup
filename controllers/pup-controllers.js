const Pup = require('../models/pup.js');

const pupController = {};

pupController.index = (req, res) => {
  Pup.findAll()
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
  Pup.findById(req.params.id)
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

pupController.create = (req, res) => {
  Pup.create({
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
  Pup.update({
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
  Pup.destroy(req.params.id)
  .then(pup => {
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







