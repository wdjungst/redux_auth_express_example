'use strict';

let express = require('express');
let router = express.Router();
let User = require('../models/user');
let passport = require('passport');

router.post('/signup', (req, res) => {
  User.register(new User({ username: req.body.email }), req.body.password, (err, user) => {
    if (err)
      return res.json(500, err.message);

    user.save( (err, user) => {
      res.json({ id: user.id, sessionId: req.sessionID });
    });
  });
});

router.post('/signin', (req, res) => {
  User.findOne({ username: req.body.email }, (err, user) => {
    user.authenticate(req.body.password, (err, user, passwordErr) => {
      if (err)
        return res.json(500, 'User Not Found');
      if (passwordErr)
        return res.json(500, passwordErr.message)

      return res.json({ id: user.id, sessionId: req.sessionID });
    });
  });
});

router.get('/:token', (req, res) => {
  res.json({ match: req.sessionID === req.params.token });
})




module.exports = router;
