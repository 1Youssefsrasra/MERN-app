const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User= require('./userModel')

const adminSchema= new Schema({
    role: { type: String, default: 'admin' }
}, {timestamps: true })

//heritage
adminSchema.add(User.schema)

module.exports= mongoose.model('Admin', adminSchema)