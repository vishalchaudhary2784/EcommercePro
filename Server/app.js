const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/productRoutes');
const cors = require('cors');

const app = express();

app.use(cors({ origin: 'http://localhost:3000' }));
// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api/products', productRoutes);

// Connect to MongoDB
mongoose
  .connect('mongodb+srv://mukesh01370:GuU4tyGtvqQi3YGv@ecommerce-db.4npcu.mongodb.net/?retryWrites=true&w=majority&appName=ecommerce-db', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/products', productRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));