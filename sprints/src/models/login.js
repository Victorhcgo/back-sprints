const mongoose = require('mongoose');
const { Schema } = mongoose;

const LoginSchema = new Schema({
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