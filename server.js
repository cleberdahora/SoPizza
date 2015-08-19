require('getmodule');
var express = require('express');
//var mongoose = require('mongoose');
  
var app = express();
var cloudinary = require('cloudinary');
var consult = require('./routes/consulta');
var consultcard = require('./routes/consulta_card');

var mysql = require('mysql');

//mongoose.connect('mongodb://localhost/SoPizza');

//var db = mongoose.connect;
cloudinary.config({ 
  cloud_name: 'hhktgqpms', 
  api_key: '994378998746214', 
  api_secret: 'QQMIu8W308hXqxZiXtPO9gPYVXM' 
});


app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('public_html', __dirname + '/public_html');
app.set('public_html engine', 'html');

app.get('/', function (request, response) {
    response.render('index');
    
});



app.use('/consult', consult);
app.use('/cardap', consultcard);





app.listen(app.get('port'), function () {
    
    console.log('Node app is running on port', app.get('port'));
});
