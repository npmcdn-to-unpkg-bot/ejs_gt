'use strict';

const express = require('express');
const router = express.Router();
const db = require('../db');


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Guitar Thinker' });
});

router.get('/nashville-number-system', function(req, res, next) {
  res.render('nns', { title: 'Nashville Number System' });
});

router.get('/blog', function(req, res, next) {
  res.render('blog', { title: 'Blog' });
});

router.get('/music-theory-game', function(req, res, next) {
  res.render('music-theory-game', { title: 'Music Theory Game' });
});

router.get('/guitar-chord-game', function(req, res, next) {
  res.render('guitar-chord-game', { title: 'Guitar Chord Game' });
});

router.get('/leaderboard', function(req, res, next) {

  db.User.find({}, 'username gcgScore').sort({gcgScore: -1}).limit(10).exec((err, users) => {
    if (err) return console.error(err, 'brosef');

    res.render('leaderboard', { title: 'Guitar Chord Game', users: users });
  });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login' });
});

router.get('/signup', function(req, res, next) {
  res.render('sign-up', { title: 'Sign Up' });
});

module.exports = router;
