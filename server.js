const express = require('express')
const mongoose = require('mongoose')
const config = require('config')
const mongoURI = config.get('mongoURI')
const items = require('./routes/api/items')
const users = require('./routes/api/users')
const auth = require('./routes/api/auth')
const path = require('path')
const { dirname } = require('path')
const PORT = process.env.PORT || 5000

const app = express()


//body-parsers
app.use(express.urlencoded({ extended: true }))
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
app.use('/api/users', users)
app.use('/api/auth', auth)

// Serve static assets if in production
app.use(express.static(path.join(__dirname, '/build/')))

app.use("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "build", "index.html"))
})

//server

app.listen(PORT, () => {
    console.log(`Server stared on port ${PORT}`)
})
