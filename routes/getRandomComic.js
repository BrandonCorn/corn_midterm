const axios = require('axios'); 

module.exports = async(req,res) => {
    let comic; 
    const rand = Math.floor(Math.random() * 501).toString(); 
    console.log('made it here'); 
    await axios.get(`http://xkcd.com/${rand}/info.0.json`)
    .then(data => {
        comic = data.data; 
    })
    .catch(err => console.log('could not retrieve comic')); 
    console.log(comic);
    const date = `${comic.month}/${comic.day}/${comic.year}` 

    res.render('randomComic',{
        img: comic.img, 
        title: comic.title,
        description: comic.alt, 
        date
    }); 
}