const e = require("express")
const mongoose = require("mongoose")

KEY = "mongodb+srv://victorhcgo:EQUIPO13@cluster0.yhbgwot.mongodb.net/?retryWrites=true&w=majority"


mongoose.connect (KEY)
.then(() => console.log("Conexión establecidad a MongoAtlas"))
.catch((error) => console.error(error))
module.exports.mongoose