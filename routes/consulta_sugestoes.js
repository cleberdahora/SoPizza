var express = require('express');
var mysql = require('mysql');
var router = express.Router();
var fs = require('fs');



router.get('/', function (req, res) {
    var latitude = req.query.latitude;
    var longitude = req.query.longitude;

    var connection = mysql.createConnection({
       user: 'b442f97908503f', // user: 'b38e48d43b7b86',                             //user: 'root',
       password: '10b3b2e1',                             //password: 'cletha415623',
       host: 'us-cdbr-iron-east-02.cleardb.net',                      //host: 'localhost',
       database: 'heroku_c9eb4a3b9a8e642'                         //database: 'sopizza'

    });

    connection.query('SELECT Nome,Endereco,fotoLogo,Latitude,Longitude, ( 6371 * acos( cos( radians(' + latitude + ') ) * cos( radians( latitude ) ) * cos( radians( longitude ) - radians(' + longitude + ') ) + sin( radians(' + latitude + ') ) * sin( radians( latitude ) ) ) ) AS distance FROM dados HAVING distance < 4 ORDER BY distance LIMIT 0 , 20', function (err, rows, fields) {
        if (!err)
        {
            res.send(rows);
        }

        else
            console.log('Error while performing Query.');
    });

    connection.end();

});


module.exports = router;

