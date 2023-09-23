const { Router } = require('express');
const { BagModel } = require('../models/Bag.model');

const bagController = Router()

// Create a new product
bagController.post('/addtobag', async (req, res) => {
    try {
        const { id, image_url, title, subtitle, subtext, subletter, price, lprice, userId } = req.body
        const newBag = new BagModel({
            id, 
            image_url, 
            title,        
            subtitle, 
            subtext,     
            subletter,    
            price, 
            lprice, 
            userId
        });
        // console.log("newbag", newBag)
        const savedBag = await newBag.save();
        console.log("savedBag", savedBag)
        res.status(201).json({ msg: "item added in bag", savedBag });
    } catch (error) {
        res.status(400).json({ error: 'res from server item not added' });
    }
});

// Update a product by ID
bagController.put('/products/:id', async (req, res) => {
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
bagController.delete('/products/:id', async (req, res) => {
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


module.exports = { bagController }