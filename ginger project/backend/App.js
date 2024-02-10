const mysql = require('mysql2');

// Create connection configuration
const connection = mysql.createConnection({
  host: 'localhost', // Change this to your database host
  user: 'root', // Change this to your database username
  password: 'Sourabh@123', // Change this to your database password
  database: 'sourabh' // Change this to your database name
});

// Connect to MySQL
connection.connect(function(err) {
  if (err) {
    console.error('Error connecting to MySQL: ' + err.stack);
    return;
  }

  console.log('Connected to MySQL as id ' + connection.threadId);
});

// Check the connection status
connection.query('SELECT 1', function(err, results) {
  if (err) {
    console.error('Error connecting to MySQL: ' + err.stack);
    return;
  }

  console.log('MySQL connection is active');
});

// Close the connection
connection.end();
