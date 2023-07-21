const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User= require('./userModel')

const adminSchema= new Schema({
    id_admin: {type: String, required: true}
}, {timestamps: true })

//heritage
adminSchema.add(User.schema)

module.exports= mongoose.model('Admin', adminSchema)