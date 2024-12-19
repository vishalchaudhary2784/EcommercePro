const express = require('express');
const { addProduct, getProducts } = require('../controllers/ProductController');
const upload = require('../middleware/multer');

const router = express.Router();

// Route to add a product
router.post('/add', addProduct);

// Route to get all products
router.get('/', getProducts);

router.post('/products', upload.array('images', 10), addProduct); // Allow up to 10 files
router.get('/products', getProducts);

module.exports = router;
