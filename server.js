require('getmodule');
var express = require('express');
var app = express();
var cloudinary = require('cloudinary');
var consult = require('./routes/consulta');

var mysql = require('mysql');

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





app.listen(app.get('port'), function () {
    
    console.log('Node app is running on port', app.get('port'));
});
