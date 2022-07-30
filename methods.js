const connection = require('./db/connection')

//Class to hold all the functions needed for the tables.
class FindAll {
    constructor(connection) {
        this.connection = connection
    }
    findDepartment() {
        return this.connection.promise().query('SELECT * FROM departments')
    }

    findEmployee() {
        return this.connection.promise().query('SELECT employee.id, employee.first_name, employee.last_name, roles.title, departments.names AS department, roles.salary FROM employee LEFT JOIN roles ON employee.role_id = roles.id LEFT JOIN departments ON roles.department_id = departments.id;')
    }

    findRoles() {
        return this.connection.promise().query('SELECT roles.id, roles.title, roles.salary, departments.names AS department FROM roles LEFT JOIN departments ON roles.department_id = departments.id')
    }

    addADepartment() {
        return this.connection.promise().query(`INSERT INTO departments (names) VALUES (?) `)
    }

}

module.exports = new FindAll(connection)