const express = require('express'); 
const router = express.Router(); 
const axios = require('axios');


router.get('/', require('./getComic')); 

router.get('/randomComic', require('./getRandomComic')); 

router.get('/check', (req,res) => {
    res.render('randomComic'); 
})
module.exports = router; 