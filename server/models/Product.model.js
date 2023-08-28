const mongoose = require('mongoose')

const productSchema = new mongoose.Schema ({
    image_url: { type: String, required: true },
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    subtext: { type: String, required: true },
    subletter: { type: String, required: true },
    price: { type: Number, required: true },
    lprice: { type: Number, required: true }
})

const ProductModel = mongoose.model("product", productSchema)

module.exports = { ProductModel } 