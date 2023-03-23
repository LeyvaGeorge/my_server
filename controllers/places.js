const router = require('express').Router()
const db = require('../models')


//HOME PAGE / PLACE INDEX
router.get('/', (req,res) => {
    db.Place.find()
    .then((places) => {
      res.render('places/index', {places})
    })
    .catch(err => {
      console.log(err)
      res.render('error404')
    })
})

//CREATE
router.post('/',(req,res) => {
  db.Place.create(req.body)
  .then(() => {
    res.redirect('/places')
  })
  .catch(err => {
    console.log('err',err)
    res.render('error404')
  })
})

//FORM PAGE
router.get('/new', (req,res) => {
  res.render('places/new')
})

//PARTICULAR PLACE 
router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
  .then(place => {
    res.render('places/show', {place})
  })
  .catch(err => {
    console.log('err',err)
    res.render('error404')
  })
})



//UPDATE PARTICULAR PLACE
router.put('/:id', (req, res) => {
  res.send('PUT /places/:id stub')
})




//FORM PAGE
router.get('/:id/edit', (req, res) => {
  res.send('GET edit form stub')
})


//DELETE PLACE
router.delete('/:id', (req, res) => {
  res.send('DELETE /places/:id stub')
})

//CREATE A (RANT COMMENT) ABOUT A PARTICULAR PLACE
router.post('/:id/rant', (req,res) => {
  res.send('GET /places/:id/rant stub')
})

//DELETE A (RANT COMMENT) ABOUT A PLACE
router.delete('/:id/rant/:rantId', (req,res) => {
  res.send('GET /places/:ed/rant/:rantId stub')
})


module.exports = router