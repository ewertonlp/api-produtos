const { Schema, model } = require('mongoose');

const ProdutoSchema = new Schema({
  description: String,
});

module.exports = model('Produto', ProdutoSchema);
