const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commandSchema= new Schema({
    numCom:{type: Number, required: true},
    dateCom:{type: Date, required: true}
})

module.exports=mongoose.model('Command', commandSchema)