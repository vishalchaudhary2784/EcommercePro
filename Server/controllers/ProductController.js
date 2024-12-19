const Product = require('../models/ProductModel');
const fs = require('fs');
const path = require('path');
const multer = require('multer');

// Setup Multer for file uploads

// Add a new product
const addProduct = async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: 'Error in file upload',
        error: err.message,
      });
    }

    try {
      const {
        title,
        description,
        category,
        brand,
        regularPrice,
        discountPrice,
        shippingFee,
        taxRate,
        tags,
      } = req.body;

      // Validate required fields
      if (!title || !description || !regularPrice || !category) {
        return res.status(400).json({
          success: false,
          message: 'Title, description, category, and regular price are required.',
        });
      }

      // Process uploaded images (if any)
      let imageUrls = [];
      if (req.files && req.files.length > 0) {
        imageUrls = req.files.map((file) => `/uploads/${file.filename}`); // Save relative URL to database
      }

      // Create new product
      const product = new Product({
        title,
        description,
        category,
        brand,
        regularPrice,
        discountPrice,
        shippingFee,
        taxRate,
        tags: tags ? tags.split(',') : [], // Convert comma-separated tags to array
        images: imageUrls, // Save image URLs in product schema
      });

      // Save the product to the database
      const savedProduct = await product.save();

      return res.status(201).json({ success: true, product: savedProduct });
    } catch (error) {
      console.error('Error adding product:', error);
      return res.status(500).json({ success: false, message: 'Failed to add product', error });
    }
  });
};

// Get all products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    return res.status(200).json({ success: true, products });
  } catch (error) {
    console.error('Error fetching products:', error);
    return res.status(500).json({ success: false, message: 'Failed to fetch products', error });
  }
};

module.exports = {
  addProduct,
  getProducts,
};
