const mongoose = require('mongoose');

// config schema and model
const productSchema = new mongoose.Schema({
  name: String,
  price: String,
  category: String,
  description: String,
  featured: {type: Boolean, default: false},
  main_image: String,
  alternate_image_1: String,
  alternate_image_2: String,
  alternate_image_3: String,
  created: {type: Date, default: Date.now}   // date will be automatic
});

module.exports = mongoose.model('Product', productSchema);
