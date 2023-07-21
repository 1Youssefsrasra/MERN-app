const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User= require('./userModel')

const clientSchema= new Schema({
    id_client: {type: String, required: true}
}, {timestamps: true })

//heritage
clientSchema.add(User.schema)

module.exports= mongoose.model('Client', clientSchema)