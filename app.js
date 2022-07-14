const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const route = require('./routes/file')
const connect = require('./db/connection')
//const next = require('./middleware/error-handling')
const errorHandler = require('./middleware/error-handling')
const notFound = require('./middleware/notFound')
require('dotenv').config()

//middleware
app.use(express.json())
app.use(express.static('./public'))

//routes
app.use('/api/v1/tasks',route)
app.use(errorHandler)


const start = async () =>{
    try {
        await connect(process.env.MONGO_URI)
        app.listen(port,()=> console.log(`listening on port ${port}...`))
    } catch (error) {
     console.log(error);   
    }
}

start()

