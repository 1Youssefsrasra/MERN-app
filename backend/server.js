require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const productsRouter = require('./routes/products')
const usersRouter = require('./routes/user')
const adminsRouter= require('./routes/admin')
const clientsRouter= require('./routes/client')
const paniersRouter= require('./routes/panier')
const commandRouter= require('./routes/command')
const menRouter= require('./routes/men')
const womenRouter= require('./routes/women')
const childrenRouter= require('./routes/children')



//express app
const app = express()

//middleware
app.use(express.json()) //so that we can access to the body of a req aka data  

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
}) 

//routes 
app.use('/api/products', productsRouter)
app.use('/api/user', usersRouter)
app.use('/api/admin', adminsRouter)
app.use('/api/client', clientsRouter)
app.use('/api/panier', paniersRouter)
app.use('/api/command', commandRouter)
app.use('/api/men', menRouter)
app.use('/api/women', womenRouter)
app.use('/api/children', childrenRouter)




//connect to DB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {

        //listen for requests
        app.listen( process.env.PORT, () => {
            console.log('connected to the database and listening on port',process.env.PORT )
        })

    })
    .catch((error) => { 
       console.log(error) 
    })


