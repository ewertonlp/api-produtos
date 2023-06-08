const { Schema, model } = require('mongoose');

const ProdutoSchema = new Schema({
  nome: {
    type: String,
    required: true,
  },
  valor: {
    type: String,
    required: true,
    unique: true,
  },
  fornecedor: {
    type: String,
    required: true,
  },
  imagemUrl: {
    type: String,
    required: true,
  },
  descricao: {
    type: String,
    required: true,
  },
});

module.exports = model('Produto', ProdutoSchema);
