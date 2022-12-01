const mongoose = require('mongoose');
const { Schema } = mongoose;

const OrdenSchema = new Schema({
  Fecha: { 
    type: String, 
    required: true 
},
  AnchoPaquete: { 
    type: Number, 
    required: true },

    LargoPaquete: { 
        type: Number, 
        required: true },

    AltoPaquete: { 
        type: Number, 
        required: true },

    PesoPaquete: { 
        type: Number, 
        required: true },

    DirecccionRecigida: { 
        type: String, 
        required: true },

    CiudadRecigida: { 
        type: String, 
        required: true },

    NombreRemitente: { 
        type: String, 
        required: true },

    CedulaRemitente: { 
        type: Number, 
        required: true },
    
    DirecccionDestinatario: { 
        type: String, 
        required: true },
    
    CiudadDestinatario: { 
            type: String, 
            required: true },

    NombreDestinatario: { 
        type: String, 
        required: true },

    CedulaDestinatario: { 
            type: Number, 
            required: true },
    
    MercanciaSensible: { 
        type: Boolean, 
        required: true },
        
},

{
    collection: 'Order'
}
);

module.exports = mongoose.model('Order', OrdenSchema);