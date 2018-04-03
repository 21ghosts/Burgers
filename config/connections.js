const mysql = require('mysql')
const connection = mysql.createConnection(
    {
        port:3308,
        host: "localhost",
        user: "root",
        password: "root",
        database: "burger_db"
    }
);

connection.connect((err) => 
{
    if(err)
    {
        console.error("error connecting" + err.stack);
    }
    else
    {
        console.log("connected as id" + connection.threadId);
    }
});

module.exports = connection;