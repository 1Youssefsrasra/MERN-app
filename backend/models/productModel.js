const mongoose = require('mongoose')

const Schema = mongoose.Schema

const productSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    size:{
        type: String,
        required: true
    }
}, {timestamps: true }) 

//create a model
module.exports = mongoose.model('Product', productSchema) 
