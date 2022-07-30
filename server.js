const inquirer = require('inquirer')
const connection = require('./db/connection')
const FindAll = require('./methods')


startingPrompt()


function startingPrompt() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'start',
            message: 'What would you like to do?',
            choices: ['View all departments', 'Add a department', 'View all roles', 'Add a role', 'View all employees', 'Add an employee', 'Update an employee role', 'Exit']
        },
    ])
        .then((data) => {
            if (data.start === 'View all departments') {
                viewDepartments();
            } else if (data.start === 'Add a department') {
                addADepartment()
            } else if (data.start === 'View all roles') {
                viewRoles()
            } else if (data.start === 'Add a role') {
                addARole()
            } else if (data.start === 'View all employees') {
                viewEmployees()
            } else if (data.start === 'Add an employee') {
                addAEmployee()
            } else if (data.start === 'Update an employee role') {
                updateEmployee()
            } else (console.log('Exiting'))



        })
};



function viewDepartments() {
    FindAll.findDepartment()
        .then((data) => {
            console.table(data[0])
            startingPrompt()
        })

}

function addADepartment() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'departmentname',
            message: 'What is the name of the department?'
        }
    ])
        .then((data) => {
            FindAll.addADepartment(data)
            startingPrompt()
        })
}

function viewRoles() {
    FindAll.findRoles()
        .then((data) => {
            console.table(data[0])
            startingPrompt()
        })
}

function addARole() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'role',
            message: 'What is the name of the role you want to add?'
        },
        {
            type: 'input',
            name: 'salary',
            message: 'What is the salary for this role?'
        },
        {
            input: 'input',
            name: 'department',
            message: 'What is the department for this role?'
        }
    ])
        .then((data) => {
            console.log(data)
            startingPrompt()
        })
}

function viewEmployees() {
    FindAll.findEmployee()
        .then((data) => {
            console.table(data[0])
            startingPrompt()
        })
}

function addAEmployee() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'firstname',
            message: 'What is the first name of the employee?'
        },
        {
            type: 'input',
            name: 'lastname',
            message: 'What is the last name of the employee?'
        },
        {
            input: 'input',
            name: 'role',
            message: 'What is the role of the employee?'
        },
        {
            input: 'input',
            name: 'manager',
            message: 'What is the manager of the employee?'
        }
    ])
        .then((data) => {
            console.log(data)
            startingPrompt()
        })
}

function updateEmployee() {

}