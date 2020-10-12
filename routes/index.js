const express = require('express'); 
const router = express.Router(); 


router.get('/', (req,res) => {
    res.render('index'); 
})

router.get('/randomComic', require('./getRandomComic')); 


module.exports = router; 