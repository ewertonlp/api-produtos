const { Schema, model } = require('mongoose');

const UsuarioSchema = new Schema({
    nome: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    senha: {
      type: String,
      required: true
    }
  });
  
  const Usuario = mongoose.model('Usuario', UsuarioSchema);
  
  module.exports = Usuario;