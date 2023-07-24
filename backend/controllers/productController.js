const Product = require('../models/productModel')
const mongoose = require('mongoose')

//get all products
const getProducts = async (req, res) => {
    const products = await Product.find({}).sort({createdAt: -1})

    res.status(200).json(products)
}

//get a single product
const getProduct = async(req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'no such product'})
    }

    const product = await Product.findById(id)

    if(!product){
        return res.status(404).json({error: 'no such product'})
    }

    res.status(200).json(product)
}

//create a new product
const createProduct = async(req, res) => {
    const {title, price, size} = req.body

    //add document to database
    try {
        const product = await Product.create({title,price,size})
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}


//delete a single product
const deleteProduct = async (req, res) =>{
    const { id } = req.params

    //Check the id
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'no such product'})
    }

    const product = await Product.findOneAndDelete({_id: id})
    if(!product){
        return res.status(404).json({error: 'no such product'})
    }

    res.status(200).json(product)
}

//update a product 
const updateProduct = async (req, res) =>{
    const { id } = req.params

    //Check the id
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'no such product'})
    }

    const product = await Product.findByIdAndUpdate({_id: id}, {
        ...req.body
    })

    if(!product){
        return res.status(404).json({error: 'no such product'})
    }

    res.status(200).json(product)
}


module.exports = {
    createProduct,
    getProduct,
    getProducts,
    deleteProduct,
    updateProduct
}