const mysql = require('mysql2');


//Setting the connection
const connection = mysql.createPool({
    host: 'localhost',
    database: 'Employee_Tracker',
    user: 'root',
    password: 'StezLang1995!'
});


module.exports = connection;