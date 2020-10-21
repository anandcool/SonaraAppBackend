const mysql = require('mysql'); // import the package

//Database Connection
const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database:'sonaraapp'
  });

db.connect((err)=>{
    if(err) throw err;
    console.log("Mysql connected");
});

module.exports = db;