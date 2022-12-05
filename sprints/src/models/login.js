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

},

{
    collection: 'Login'
}
);

module.exports = mongoose.model('Login', LoginSchema);