DROP DATABASE IF EXISTS burger_db;
CREATE DATABASE burger_db;
USE burger_db;
CREATE TABLE burgers
(
    id INT(10) AUTO_INCREMENT NOT NULL,
    burgers_name VARCHAR(100) NOT NULL,
    devoured BOOLEAN NOT NULL DEFAULT false,,
    date TIMESTAMP,
    PRIMARY KEY (id)
);