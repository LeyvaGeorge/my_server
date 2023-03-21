const router = require('express').Router()
//HOME PAGE
router.get('/', (req,res) => {
    let places = [{
        name: 'Coco',
        city: 'Seattle',
        state: 'WA',
        breed: 'Poodle',
        pic: '/images/Poodle.jpg'
      }, {
        name: 'Gizmo',
        city: 'Phoenix',
        state: 'AZ',
        breed: 'Shih Tzu',
        pic: '/images/shih tzu.jpeg'
      }]
      
    res.render('places/index',{places})
})

//PLACE INDEX
//GET-/PLACES

//CREATE
//POST-/PLACES
router.post('/',(req,res) => {
  console.log(req.body)
  res.send('POST /places/')
})
//FORM PAGE
//GET-/PLACES/NEW
router.get('/new', (req,res) => {
  res.render('places/new')
})
//PARTICULAR PLACE 
//GET-/PLACES/:ID

//UPDATE PARTICULAR PLACE
//PUT-/PLACES/:ID

//FORM PAGE
//GET-/PLACES/:ID/EDIT

//DELETE PLACE
//DELETE-/PLACES/:ID

//CREATE A (RANT COMMENT) ABOUT A PARTICULAR PLACE
//POST-/PLACES/:ID/RANT

//DELETE A (RANT COMMENT) ABOUT A PLACE
//DELETE-/PLACES/:ID/RANT/:RANTID

//404 PAGE
//GET-*

module.exports = router