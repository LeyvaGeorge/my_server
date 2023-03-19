const router = require('express').Router()
//HOME PAGE
router.get('/', (req,res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: 'http://placekitten.com/250/250'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: 'http://placekitten.com/250/250'
      }]
      
    res.render('places/index',{places})
})

//PLACE INDEX
//GET-/PLACES

//CREATE
//POST-/PLACES

//FORM PAGE
//GET-/PLACES/NEW

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