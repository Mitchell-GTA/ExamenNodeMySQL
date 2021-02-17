create table employees (
    id int UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    gender_id int,
    job_id int,
    name VARCHAR(255),
    last_name VARCHAR(255),
    birthdate DATE
);