const express = require('express')
const mongoose = require('mongoose')
const mongoURI = require('./config/keys').mongoURI
const items = require('./routes/api/items')
const PORT = process.env.PORT || 5000

const app = express()


//body-parsers
app.use(express.urlencoded({extended: true}))
app.use(express.json())

//mongodb
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false })
    .then(() => {
        console.log('connect to database')
    })
    .catch((err) => {
        console.log('Error', err)
    })

// routes

app.use('/api/items', items)

//server

app.listen(PORT, () => {
    console.log(`Server stared on port ${PORT}`)
})
