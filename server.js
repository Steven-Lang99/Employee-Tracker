const inquirer = require('inquirer')
const fs = require('fs');


startingPrompt()


function startingPrompt() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'start',
            message: 'What would you like to do?',
            choices: ['View all departments', 'View all roles', 'Add a role', 'View all employees', 'Add an employee', 'Add a department', 'Update an employee role', 'Quit']
        },
    ])
        .then((data) => {
            if (data.start === 'View all departments') {
                viewDepartments();
            } else if (data.start === 'View all roles') {
                viewRoles()
            } else if (data.start === 'Add a role') {
                addARole()
            } else if (data.start === 'View all employees') {
                viewEmployees()
            } else if (data.start === 'Add an employee') {
                addAEmployee()
            } else if (data.start === 'Add an department') {
                addADepartment()
            } else if (data.start === 'Update an employee role') {
                updateEmployee()
            } else ('')

        })
};

function viewDepartments() {

}

function viewRoles() {

}

function addARole() {

}

function viewEmployees() {

}

function addAEmployee() {

}

function addADepartment() {

}

function updateEmployee() {

}