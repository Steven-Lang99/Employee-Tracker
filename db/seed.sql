USE Employee_Tracker;

INSERT INTO departments (Names) VALUES
('Engineering'),
('Finance'),
('Legal'),
('Sales');


INSERT INTO roles (title, department_id, salary) VALUES
('Sales Lead', 4, 100000),
('Salesperson', 4, 80000),
('Lead Engineer', 1, 150000),
('Software Engineer', 1, 120000),
('Account Manager', 2, 160000),
('Accountant', 2, 125000),
('Legal Team Lead', 3, 250000),
('Lawyer', 3, 190000);

INSERT INTO employee (first_name, last_name, role_id, manager_id ) VALUES 
('John', 'Doe', 3, null),
('Mike', 'Chan', 4, 3),
('Ashley', 'Rodriguez', 5, null),
('Kevin', 'Tupik', 1, null),
('Kunal', 'Singh', 7, null),
('Malia', 'Brown', 2, 1),
('Sarah', 'Lourd', 6, 5),
('Tom', 'Allen', 8, 7);

SELECT * FROM departments;
SELECT * FROM roles;
SELECT * FROM employee;