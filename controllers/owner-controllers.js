const Owner = require('../models/owner.js');

const ownerController = {};

ownerController.index = (req, res) => {
  Owner.findAll()
  .then( owners => {
    res.json({
      message: 'ok',
      data: owners
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({ err });
  });
};

ownerController.show = (req, res) => {
  Owner.findById(req.params.id)
    .then( owner => {
      res.json({
        message: 'ok',
        data: owner
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
};

ownerController.create = (req, res) => {
  Owner.create({
    owner_name: req.body.owner_name,
  })
  .then(owner => {
    res.json({
      message: 'ok',
      data: owner
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({ err })
  });
};

ownerController.update = (req, res) => {
  Owner.update({
       owner_name: req.body.owner_name,
  },
    req.params.id,
  )
  .then( owner => {
    res.json({
      message: 'ok',
      data: owner
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({ err });
  });
};

ownerController.destroy = (req, res) => {
  Owner.destroy(req.params.id)
  .then(owner => {
    res.json({
      message: 'ok',
      data: owner,
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({ err })
  });
};


module.exports = ownerController;









