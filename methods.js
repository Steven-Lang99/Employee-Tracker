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
        return this.connection.promise().query('SELECT employee.id, employee.first_name, employee.last_name, roles.title, roles.salary, departments.names AS department, CONCAT (manager.first_name, " ", manager.last_name) AS manager FROM employee LEFT JOIN roles ON employee.role_id = roles.id LEFT JOIN departments ON roles.department_id = departments.id LEFT JOIN employee manager ON employee.manager_id = manager.id;')
    }

    findRoles() {
        return this.connection.promise().query('SELECT roles.id, roles.title, roles.salary, departments.names AS department FROM roles LEFT JOIN departments ON roles.department_id = departments.id')
    }

    addADepartment(data) {
        return this.connection.promise().query(`INSERT INTO departments (Names) VALUES ('${data.departmentname}')`)
    }

    addARole(data) {
        return this.connection.promise().query(`INSERT INTO roles (title, department_id, salary) VALUES (('${data.role}'), ('${data.department}'), ('${data.salary}'))`)
    }
    addAEmployee() {
        return this.connection.promise().query(`INSERT INTO employee (first_name, last_name, role_id, manager_id ) VALUES (('${data.firstname}'), ('${data.lastname}'), ('${data.role}'), ('${data.manager}'))`)
    }

}

module.exports = new FindAll(connection)