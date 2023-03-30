const router = require('express').Router()
const db = require('../models')

//Delete All?
router.get('/data/destroy', (req,res) => {
  db.place_schema.deleteMany()
    .then(() => {res.render('places/index', { }) })
    .catch((err) => {
      console.log(err)
      res.render('error404')
    })
})

//FORM PAGE
router.get('/new', (req,res) => {
  res.render('places/new')
})

//FORM PAGE
router.get('/:id/edit', (req, res) => {
  db.place_schema.findById(req.params.id)
    .then((place) => {res.render('places/edit', {place}) })
    .catch((err) => {
      console.log(err)
      res.render('error404')
    })
})

//COMMENT SECTION
router.get('/:id/comment', (req,res) => {
  db.place_schema.findById(req.params.id)
    .then((place) => {res.render('places/comment', {place}) })
    .catch((err) => {
      console.log(err)
      res.render('error404')
    })
})

//COMMENT SECTION
router.post('/:id/comment', (req, res) => {
  req.body.rant = req.body.rant === "on"
  console.log(req.body)

  db.Place.findById(req.params.id)
    .then(place => {
        db.Comment.create(req.body)
        .then(comment => {
            place.comments.push(comment.id)
            place.save()
              .then(() => {
                res.redirect(`/places/${req.params.id}`)
              })
        })
        .catch(err => {
            console.log(err)
            res.render('error404')
        })
    })
    .catch(err => {
      console.log(err)
      res.render('error404')
    })
})

//PARTICULAR PLACE 
router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
  .populate('comments')
  .then(place => {
    console.log(place.comments)
    res.render('places/show', {place})
  })
  .catch(err => {
    console.log('err',err)
    res.render('error404')
  })
})

//DELETE PLACE
router.delete('/:id', (req, res) => {
  db.place_schema.findByIdAndDelete(String(req.params.id))
      .then(() => { res.redirect('/places') })
      .catch((err) => {
          console.log(err)
          res.render('error404')
      })
})

//UPDATE PARTICULAR PLACE
router.put('/:id', (req, res) => {
  db.place_schema.findByIdAndUpdate(String(req.params.id), req.body)
        .then(() => { res.redirect(`/places/${req.params.id}`) })
        .catch((err) => {
            console.log(err)
            res.render('error404')
        })
})

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
    if (err && err.name == 'ValidationError') {
      let message = 'Validation Error: '
      for (var field in err.errors) {
        message += `${field} was ${err.errors[field].value}.`
        message += `${err.errors[field].message}`
      }
      console.log('Validation error message', message)
      
      res.render('places/new', {message})
    }
    else {
      res.render('error404')
    }
  })
})

module.exports = router