const express = require('express'); 
const app = express(); 
const mongoose = require('mongoose'); 
const bodyParser = require('body-parser'); 
const config = require('./config/keys'); 


app.set('view engine', 'ejs'); 
app.use(bodyParser.urlencoded({extended: true})); 

mongoose.connect(config.DB, {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useFindAndModify: false, 
    useCreateIndex: true, 
})
.then(() => console.log('connected to db'))
.catch(() => console.log('could not connect to db')); 

app.use(require('./routes/index')); 

app.listen(config.PORT, () => console.log(`server started on port: ${config.PORT}`))

