const express = require('express'); 
const router = express.Router(); 
const axios = require('axios');


router.get('/', require('./getComic')); 

router.get('/randomComic', require('./getRandomComic')); 

router.post('/changeImage', require('./changeImage')); 

module.exports = router; 