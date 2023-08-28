const mongoose = require('mongoose')

const bagSchema = new mongoose.Schema ({
    image_url: { type: String, required: true },
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    subtext: { type: String, required: true },
    subletter: { type: String, required: true },
    price: { type: Number, required: true },
    lprice: { type: Number, required: true },
    user_id: { type: String, required: true },
})

const BagModel = mongoose.model("bag", bagSchema)

module.exports = { BagModel } 