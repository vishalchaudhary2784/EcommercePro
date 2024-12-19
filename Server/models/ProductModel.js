const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  brand: { type: String, required: true },
  regularPrice: { type: Number, required: true },
  discountPrice: { type: Number },
  shippingFee: { type: Number },
  taxRate: { type: Number },
  tags: { type: [String] },
  images: { type: [String], required: true },
});

module.exports = mongoose.model('Product', ProductSchema);
