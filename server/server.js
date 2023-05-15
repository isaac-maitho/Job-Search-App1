require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const jobRoutes = require('./routes/jobsRoutes')

//express app
const app = express()

//middleware
app.use(express.json())
app.use((req, res, next) =>{
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/jobs',jobRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    //listen for requests
    app.listen(process.env.PORT, () =>{
    console.log('connected to the db and listening to port', process.env.PORT)
})
  })
  .catch((err) => {
    console.log(err)
})

