const express = require('express'); 
const router = express.Router(); 
const axios = require('axios');


router.get('/', async (req,res) => {
    let comic; 
    await axios.get('http://xkcd.com/info.0.json')
    .then(data => {
        comic = data.data; 
    })
    .catch(err => console.log('could not retrieve comic')); 
    console.log(comic);
    const date = `${comic.month}/${comic.day}/${comic.year}` 
    res.render('index', {
        img: comic.img, 
        title: comic.title,
        description: comic.alt, 
        date
    }); 
})

router.get('/randomComic', require('./getRandomComic')); 

module.exports = router; 