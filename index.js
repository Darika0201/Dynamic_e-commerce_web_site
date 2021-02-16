const express = require('express');
const bodyParser = require('body-parser');
const cookie = require('cookie-parser');
const routes = require('./routes/routes');
const path = require('path');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');

const app= express();

app.set('view engine','ejs');
app.set('views', 'views');
// let ejsOptions = {
//     // delimiter: '?', Adding this to tell you do NOT use this like I've seen in other docs, does not work for Express 4
//     async: true
//   };
app.use(bodyParser.urlencoded({entended:true}));



app.use(express.static(path.join(__dirname,'publics')));
app.use(fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
  }));
app.use(bodyParser.json());
app.use(cookie());
app.use(routes);

mongoose.connect('mongodb+srv://user123:user123@cluster0.nlyev.mongodb.net/user?retryWrites=true&w=majority').then(
    result=>{
        console.log("DB is connected")
    }
).catch(err=>{
    console.log(err)
});
app.listen(3000);