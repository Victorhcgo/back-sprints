const express = require('express');
const router = express.Router();


// Task Model
const Login = require('../models/login');

router.post('/', async (req, res) => { 
    await Login.create({username: "",  password: ""})
    res.sendStatus(200)

});

  module.exports = router