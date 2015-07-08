
var connection = mysql.createConnection({
        'host' : 'localhost',
        'user' : 'root',
        'password' : 'cletha415623',
        'database' : 'SoPizza'
  
});


connection.connect();

connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
  if (err) throw err;

  console.log('The solution is: ', rows[0].solution);
});

connection.end();