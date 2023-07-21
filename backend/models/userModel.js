const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema ({
    nom:{ type: String, required: true},
    prenom: { type: String, required: true},
    adresse: String,
    email: { type: String, required: true},
    telephone: { type: String, required: true},
    mdp: { type: String, required: true},

}, {timestamps: true })

module.exports= mongoose.model('User', userSchema)
