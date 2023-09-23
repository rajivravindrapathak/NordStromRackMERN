const mongoose = require('mongoose')

const bagSchema = new mongoose.Schema ({
    id: { type: Number, required: true },
    image_url: { type: String, required: true },
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    subtext: { type: String, required: true },
    subletter: { type: String, required: true },
    price: { type: String, required: true },
    lprice: { type: String, required: true },   
    userId: { type: String, required: true },
})

const BagModel = mongoose.model("bag", bagSchema)

module.exports = { BagModel } 