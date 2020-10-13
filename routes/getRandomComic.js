const axios = require('axios'); 

module.exports = async(req,res) => {
    let comic; 
    const rand = Math.floor(Math.random() * 501).toString(); 

    await axios.get(`http://xkcd.com/${rand}/info.0.json`)
    .then(data => {
        comic = data.data; 
    })
    .catch(err => console.log('could not retrieve comic')); 

    const date = `${comic.month}/${comic.day}/${comic.year}` 

    res.render('randomComic',{
        img: comic.img, 
        title: comic.title,
        description: comic.alt, 
        date
    }); 
}