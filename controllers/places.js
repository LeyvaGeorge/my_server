const router = require('express').Router()
const places = require('../models/dogs.js')

//HOME PAGE
router.get('/', (req,res) => {
    res.render('places/index',{places})
})

//PLACE INDEX
//GET-/PLACES

//CREATE

router.post('/',(req,res) => {
  
  if (!req.body.pic) {
    //Default image if on is not provided
    req.body.pic = 'https://place-puppy.com/400x400'
  }
  if (!req.body.city) {
    req.body.city = 'Anytown'
  }

  if (!req.body.state) {
    req.body.state = 'USA'
  }
  places.push(req.body)
  res.redirect('/places')
})

//FORM PAGE
router.get('/new', (req,res) => {
  res.render('places/new')
})

//PARTICULAR PLACE 
router.get('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    res.render('places/show', { place: places[id], id })
  }
})



//UPDATE PARTICULAR PLACE
router.put('/:id', (req, res) => {
  let id = Number(req.params.id)
  console.log(id)
  if (isNaN(id)) {
    console.log("error 1")
      res.render('error404')
  }
  else if (!places[id]) {
    console.log("error 2")
      res.render('error404')
  }
  else {
      // Dig into req.body and make sure data is valid
      if (!req.body.pic) {
          // Default image if one is not provided
          req.body.pic = 'http://place-puppy.com/400/400'
      }
      if (!req.body.city) {
          req.body.city = 'Anytown'
      }
      if (!req.body.state) {
          req.body.state = 'USA'
      }

      // Save the new data into places[id]
      places[id] = req.body
      res.redirect(`/places/${id}`)
  }
})




//FORM PAGE
router.get('/:id/edit', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
      res.render('error404')
  }
  else if (!places[id]) {
      res.render('error404')
  }
  else {
    res.render('places/edit', { place: places[id], id: id })
  }
})


//DELETE PLACE
router.delete('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    places.splice(id,1)
    //console.log('id: ' places[id])
    res.redirect('/places')
  }
})

//CREATE A (RANT COMMENT) ABOUT A PARTICULAR PLACE
//POST-/PLACES/:ID/RANT

//DELETE A (RANT COMMENT) ABOUT A PLACE
//DELETE-/PLACES/:ID/RANT/:RANTID

//404 PAGE
//GET-*

module.exports = router