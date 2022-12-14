const mongoose = require("mongoose")

const Schema = mongoose.Schema

const attribute = new Schema({
    name:{
        type: String,
        required: true
    },
    value:{
        type: String,
        required: true
    }
})


const product = new Schema({
    title:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    attributes:[attribute]
})

module.exports = mongoose.model('Product',product)