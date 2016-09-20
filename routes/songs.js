var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Song = require('../models/song');

router.get('/', function(req, res) {
  Song.find( function(err, songs) {
    res.json(songs);
  });
});

router.post('/', function(req, res) {
  new Song({
    title: req.body.title,
    artist: req.body.artist,
    lyrics: req.body.lyrics
  }).save( function(err, song) {
    res.json(song);
  });
});

router.get('/:id', function(req, res) {
  Song.findById(req.params.id, function(err, song) {
    res.json(song);
  });
});

module.exports = router;
