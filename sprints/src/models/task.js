// const { default: mongoose } = require("mongoose")
// const {Schema} = mongoose

// const TaskSchema =  new Schema({
//     title: {
//         type: String, 
//         require:true
//     },
//     descripcion: {
//         type: String,
//         required: true
//     }
// })

// module.exports = mongoose.model('Task', TaskSchema)

const mongoose = require('mongoose');
const { Schema } = mongoose;

const TaskSchema = new Schema({
  title: { 
    type: String, 
    required: true 
},
  description: { 
    type: String, 
    required: true }
});

module.exports = mongoose.model('Task', TaskSchema);