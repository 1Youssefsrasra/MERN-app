const mongoose = require('mongoose')
const Command= require('../models/commandModel')

const getCommands = async (req, res) => {
    const commands = await Command.find({}).sort({createdAt: -1})

    res.status(200).json(commands)
}

const getCommand = async(req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'no such Command'})
    }

    const command = await Command.findById(id)

    if(!command){
        return res.status(404).json({error: 'no such command'})
    }

    res.status(200).json(command)
}

const createCommand= async(req, res) => {
    const {numCom, products, dateCom} = req.body

    //add document to database
    try {
        const command = await Command.create({numCom, products, dateCom})
        res.status(200).json(command)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

const deleteCommand = async (req, res) =>{
    const { id } = req.params

    //Check the id
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'no such command'})
    }

    const command = await Command.findOneAndDelete({_id: id})
    if(!command){
        return res.status(404).json({error: 'no such command'})
    }

    res.status(200).json(command)
}

const updateCommand = async (req, res) =>{
    const { id } = req.params

    //Check the id
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'no such command'})
    }

    const command = await Command.findByIdAndUpdate({_id: id}, {
        ...req.body
    })

    if(!command){
        return res.status(404).json({error: 'no such command'})
    }

    res.status(200).json(command)
}

module.exports={getCommand, getCommands, createCommand, updateCommand, deleteCommand}