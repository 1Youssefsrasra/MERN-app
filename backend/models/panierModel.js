const mongoose = require('mongoose')
const Schema = mongoose.Schema

const panierSchema= new Schema({
    num_panier:{type: Number, required: true},
    quantite:{type: Number, required: true},
    total_price:{type: Number, required: true}

})


module.exports = mongoose.model('Panier', panierSchema)