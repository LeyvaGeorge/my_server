require('dotenv').config()
const express = require('express')
const server = express()
//Dif of the view engine jsx
server.set('view engine','jsx')
server.engine('jsx',require('express-react-views').createEngine())

server.use('/places', require('./controllers/places'))

server.get('/', (req,res) => {
    res.render('home')
})

server.get('*', (req,res) => {
    res.status(404).send('<h1>404 Page</h1>')
})

server.listen(process.env.PORT,function () {
    console.log("Server running: 8080")
})