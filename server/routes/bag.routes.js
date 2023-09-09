const { Router } = require('express');
const { BagModel } = require('../models/Bag.model');

// Create a new product
productController.post('/addtobag', async (req, res) => {
    try {
        const { id, image_url, title, subtitle, subtext, subletter, price, lprice, user_id } = req.body
        const newBag = new BagModel({
            id, 
            image_url, 
            title, 
            subtitle, 
            subtext, 
            subletter, 
            price, 
            lprice, 
            user_id
        });
        const savedBag = await newBag.save();
        res.status(201).json(savedBag);
    } catch (error) {
        res.status(400).json({ error: 'Bad Request' });
    }
});

// Update a product by ID
productController.put('/products/:id', async (req, res) => {
    try {
        const updatedProduct = await BagModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if(!updatedProduct) {
        return res.status(404).json({ error: 'Product not found' });
        }
        res.json(updatedProduct);
    } catch (error) {
        res.status(400).json({ error: 'Bad Request' });
    }   
});
    
// Delete a product by ID
productController.delete('/products/:id', async (req, res) => {
    try {
        const deletedProduct = await BagModel.findByIdAndDelete(req.params.id);
        if(!deletedProduct) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.json(deletedProduct);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


module.exports = { productController }