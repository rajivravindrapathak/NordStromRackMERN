const { Router } = require('express')

const { ProductModel } = require('../models/Product.model')

const productController = Router()

// Get all products
productController.get('/products', async (req, res) => {
    try {
      const products = await ProductModel.find();
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Get a single product by ID
productController.get('/products/:id', async (req, res) => {
    try {
      const product = await ProductModel.findById(req.params.id);
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
      res.json(product);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = { productController };