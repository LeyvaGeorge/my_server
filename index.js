//Modules and Globals
require('dotenv').config()
const express = require('express')
const server = express()

//Express Setting
server.set('views',__dirname + '/views')
server.set('view engine','jsx')
server.engine('jsx',require('express-react-views').createEngine())
server.use(express.static('public'))

//=====  Controllers & Routes  =====
server.use('/places', require('./controllers/places'))

//sends to home
server.get('/', (req,res) => {
    res.render('home')
})

//sends to 404 page
server.get('*', (req,res) => {
    res.render('error404')
})

//Listen for Connections
server.listen(process.env.PORT,function () {
    console.log("Server running: 8080")
})