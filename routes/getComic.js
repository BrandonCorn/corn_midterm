const axios = require('axios'); 

module.exports = async(req,res) => {
    let comic; 
    await axios.get('http://xkcd.com/info.0.json')
    .then(data => {
        comic = data.data; 
    })
    .catch(err => console.log('could not retrieve comic')); 
   
    const date = `${comic.month}/${comic.day}/${comic.year}` 
    res.render('index', {
        img: comic.img, 
        title: comic.title,
        description: comic.alt, 
        date
    });
}