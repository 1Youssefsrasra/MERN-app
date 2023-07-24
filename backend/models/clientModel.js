const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User= require('./userModel')

const clientSchema= new Schema({
    role: { type: String, default: 'client' }
}, {timestamps: true })

//heritage
clientSchema.add(User.schema)

module.exports= mongoose.model('Client', clientSchema)