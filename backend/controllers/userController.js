const mongoose = require('mongoose')
const User = require('../models/userModel')

const getUsers = async (req, res) => {
    const users = await User.find({}).sort({createdAt: -1})

    res.status(200).json(users)
}

const getUser = async(req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'no such user'})
    }

    const user = await User.findById(id)

    if(!user){
        return res.status(404).json({error: 'no such user'})
    }

    res.status(200).json(user)
}

const createUser = async(req, res) => {
    const {nom, prenom, adresse, email, telephone, mdp} = req.body

    //add document to database
    try {
        const user = await User.create({nom, prenom, adresse, email, telephone, mdp})
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

const deleteUser = async (req, res) =>{
    const { id } = req.params

    //Check the id
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'no such user'})
    }

    const user = await User.findOneAndDelete({_id: id})
    if(!user){
        return res.status(404).json({error: 'no such user'})
    }

    res.status(200).json(user)
}

const updateUser = async (req, res) =>{
    const { id } = req.params

    //Check the id
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'no such user'})
    }

    const user = await User.findByIdAndUpdate({_id: id}, {
        ...req.body
    })

    if(!user){
        return res.status(404).json({error: 'no such user'})
    }

    res.status(200).json(user)
}

module.exports={getUsers, getUser, createUser, deleteUser, updateUser}