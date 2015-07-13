var express = require('express');
var app = express();
var mysql = require('mysql');
var connection  = require('express-myconnection');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

app.use(
   connection(mysql,{
     host: 'localhost',
     user: 'root',
     password : 'cletha415623',
     port : 3306, //port mysql
     database:'api'
   },'request')
);

// views is directory for all template files
app.set('public_html', __dirname + '/public_html');
app.set('public_html engine', 'html');

app.get('/', function(request, response) {
  response.render('index')
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
