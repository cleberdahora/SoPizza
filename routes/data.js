var express = require('express');
var mysql = require('mysql');
var router = express.Router();

var database = "sopizza";
var table = "dados";



router.get('/', function (request, res){

var client = mysql.createClient({
    user: 'root',
    password: 'cletha415623',
    host: 'localhost',
    port: 3306
});

client.query('USE' + database);
    client.query(
           'SELECT * FROM'+ table,
    function(err, results, fields){
        if(err){
            throw err;
    }
        res.send(results);   
    });
            
});


module.exports = router;