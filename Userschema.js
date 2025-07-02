const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  category: String,
  stock: Number,
  price: Number,
  color: String
});

const Product = mongoose.model('Product', productSchema);

module.exports = { Product };
