const express = require('express');
const router = express.Router();


// Task Model
const Order = require('../models/orden');

router.post('/', async (req, res) => { 
    await Order.create({Fecha: "",
    AnchoPaquete:"",
    LargoPaquete: "",
    AltoPaquete: "",
    PesoPaquete: "",
    DirecccionRecigida:"",
    CiudadRecigida: "",
    NombreRemitente: "",
    CedulaRemitente: "",
    DirecccionDestinatario: "",
    CiudadDestinatario: "",
    NombreDestinatario: "",
    CedulaDestinatario: "",
    MercanciaSensible: ""   
    
    })
    res.sendStatus(200)

});

  module.exports = router