const express = require('express');

const authController = require('../controllers/auth.controller');

const router = express.Router();

// creating router object

// this objects has different methods for registering different routes that 
// we need in our website , rtr.get() to accept get requests,post requests
// we specify part of path after domain for which this router handler should get active 
// takes middleware functions after path from left to right

router.get('/signup', authController.getSignup);

router.post('/signup', authController.signup);

router.get('/login', authController.getLogin);

router.post('/login', authController.login);

router.post('/logout', authController.logout);
// this tells node js which functions,objects deifned 
// in this file  should be exposed to other files
module.exports = router;