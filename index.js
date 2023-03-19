require('dotenv').config()
const express = require('express')
const server = express()
//Dif of the view engine jsx
server.set('view engine','jsx')
server.engine('jsx',require('express-react-views').createEngine())

server.use('/places', require('./controllers/places'))

//sends to home
server.get('/', (req,res) => {
    res.render('home')
})

//sends to 404 page
server.get('*', (req,res) => {
    res.render('error404')
})

server.listen(process.env.PORT,function () {
    console.log("Server running: 8080")
})