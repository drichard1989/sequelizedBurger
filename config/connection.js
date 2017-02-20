//Here, we are requiring the mysql package, and then we are creating a connection to mysql by creating a connection object with the properties  to use the mysql server. 
var mysql = require("mysql");
// var myPassword = require('./keys.js');

var connectInfo = {
  host: "localhost",
  user: "root",
  password: '',
  database: "burgers_db"
};

if (process.env.JAWSDB_URL){
  connectInfo=process.env.JAWSDB_URL;
}

// Here, we are running the connect method on the connection object. 
// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
// });

var connection = mysql.createConnection(connectInfo);
connection.connect();
// Now, we are using the 'module.exports' method, saving it as a variable equal to the name of the mysql object.
module.exports = connection;
