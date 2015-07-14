var express = require('express');
var app = express();
var routes = require('routes');
var mysql = require('mysql');

var database = "sopizza";
var table = "dados";

var client = mysql.createClient({
    user: 'root',
    password: 'cletha415623',
    host: 'localhost',
    port: 3306
});

client.query('USE' + database);


app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('public_html', __dirname + '/public_html');
app.set('public_html engine', 'html');

app.get('/', function (request, response) {
    response.render('index')
});

app.get('/dados', function (request, res){


    client.query(
           'SELECT * FROM'+ table,
    function(err, results, fields){
        if(err){
            throw err;
    }
        res.send(results);   
    });
            
});

app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'));
});
