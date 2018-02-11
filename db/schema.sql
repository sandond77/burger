DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
id INT(255) auto_increment,
burger_name VARCHAR(255) not null,
devoured BOOLEAN not null default 0
);

SELECT * FROM burgers; 