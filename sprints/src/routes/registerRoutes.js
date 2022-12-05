const express = require('express');
const router = express.Router();


// Task Model
const Register = require('../models/register');

router.post('/', async (req, res) => { 
    // const { title, description } = req.body;
    await Register.create({email: "", user: "", passwork: ""})
    
    // res.json({status: 'Task Saved'});
    res.sendStatus(200)

});

  module.exports = router