const mongoose = require('mongoose');
const { Schema } = mongoose;

const RegisterSchema = new Schema({
  user: { 
    type: String, 
    required: true 
},
  password: { 
    type: String, 
    required: true },

    email: { 
        type: String, 
        required: true }
},

{
    collection: 'User'
}
);

module.exports = mongoose.model('User', RegisterSchema);