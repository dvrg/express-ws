var express = require('express');
const Users = require('../models/users');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  Users.findAll()
    .then(function (userData) {
      res.send({ success: true, data: userData });
    })
    .catch(error => {
      res.send({ success: false, error: error });
    });
});

router.post('/', function (req, res, next) {
  Users.create({
    email: req.body.email,
    name: req.body.name,
    password: req.body.password
  })
    .then(function (userData) {
      res.send({ success: true, data: userData });
    })
    .catch(error => {
      res.send({ success: false, error: error });
    });
});

router.post('/:userId', function (req, res, next) {
  Users.findByPk(req.params.userId)
    .then(function (userData) {
      res.send({ success: true, data: userData });
    })
    .catch(error => {
      res.send({ success: false, error: error });
    });
});

router.put('/:userId', function (req, res, next) {
  Users.update({
    email: req.body.email,
    name: req.body.name,
    password: req.body.password
  }, {
    where: { id: req.params.userId }
  })
    .then(() => {
      res.status(200).send({ success: true, data: "update successfully a user with id = " + req.params.userId });
    });
})

router.delete('/:userId', function (req, res, next) {
  Users.destroy(
    {
      where: { id: req.params.userId }
    })
    .then(() => {
      res.status(200).send({ success: true, data: "delete successfully a user with id = " + req.params.userId });
    });
})

module.exports = router;
