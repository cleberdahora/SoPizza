var express = require('express');
var app = express();
var routes = require('./routes/data');
var mysql = require('mysql');




app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('public_html', __dirname + '/public_html');
app.set('public_html engine', 'html');

app.get('/', function (request, response) {
    response.render('index')
});

app.use('/dados', data);

app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'));
});
