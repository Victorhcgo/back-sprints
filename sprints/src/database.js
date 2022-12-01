const e = require("express")
const mongoose = require("mongoose")

KEY = 'mongodb://localhost:27017/base_de_datos'


mongoose.connect (KEY)
.then(() => console.log("Conexión establecidad a MongoAtlas"))
.catch((error) => console.error(error))
module.exports.mongoose