//Modules and Globals
require('dotenv').config()
const express = require('express')
const server = express()
const methodOverride = require('method-override')

//Express Setting (MIDDLEWARE)
server.use(express.static('public'))
server.use(express.urlencoded({ extended:true}))
server.set('views',__dirname + '/views')
server.set('view engine','jsx')
server.engine('jsx',require('express-react-views').createEngine())
server.use(methodOverride('_method'))

//sends to home
server.get('/', (req,res) => {
    res.render('home')
})

//=====  Controllers & Routes  =====
const placesController = require('./controllers/places')
server.use('/places', placesController)

//sends to 404 page
server.get('*', (req,res) => {
    res.render('error404')
})

//Listen for Connections
server.listen(process.env.PORT,function () {
    console.log("Server running: 8080")
})