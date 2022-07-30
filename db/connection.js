const mysql = require('mysql2');



const connection = mysql.createPool({
    host: 'localhost',
    database: 'Employee_Tracker',
    user: 'root',
    password: 'StezLang1995!'
});

// connection.query('SELECT * FROM department', (err, data) => {
//     if (err) return console.log(err);
// })

module.exports = connection;