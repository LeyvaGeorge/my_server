const router = require('express').Router()
//HOME PAGE
router.get('/', (req,res) => {
    res.send('GET /places')
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

module.exprt = router