var express = require('express');
var mysql = require('mysql');
var router = express.Router();
var fs = require('fs');




router.get('/', function (request, res){

var connection = mysql.createConnection({
    user: 'root',
    password: 'cletha415623',
    host: 'localhost',
    database:'sopizza'
    
    
});

connection.query('SELECT * from dados', function(err, rows, fields) {
  if (!err)
  {
      
    console.log('',rows)
}
  else
    console.log('Error while performing Query.');
});

connection.end();
            
});


module.exports = router;