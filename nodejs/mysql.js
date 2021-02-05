var mysql = require('mysql');
var connection = mysql.createConnection({
    host    : 'localhost',
    user    : 'root',
    password: '12345678',
    database: 'opentutorials'
});
   
connection.connect();

connection.query('SELECT  * from topic', function(error, results){
    if(error) {
        console.log(error);
    }
    console.log(results);
});

connection.end();