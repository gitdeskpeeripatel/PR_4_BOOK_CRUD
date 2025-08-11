const express = require('express');
const app = express();
const port = 6079;
const db = require('./config/db');
const bodyParser = require('body-parser');
db();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

app.use('/',require('./routers'))


app.listen(port,(err)=>{
    if(!err){
        console.log('Server start at http://localhost:'+port); 
    }else{
        console.error('Error starting server:', err);
    }
})