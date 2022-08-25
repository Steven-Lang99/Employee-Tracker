DROP DATABASE IF EXISTS Employee_Tracker;

CREATE DATABASE Employee_Tracker;

USE Employee_Tracker;

CREATE TABLE departments(
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    names VARCHAR(30) NOT NULL
);

CREATE TABLE roles(
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT UNSIGNED NOT NULL,
    FOREIGN KEY (department_id) REFERENCES departments(id)
);

CREATE TABLE employee(
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT UNSIGNED NOT NULL,
    FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE CASCADE,
    manager_id INT UNSIGNED,
    FOREIGN KEY (manager_id) REFERENCES employee(id)
);



