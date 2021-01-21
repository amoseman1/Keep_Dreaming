DROP DATABASE IF EXISTS travel_db;
CREATE DATABASE travel_db;
USE travel_db;

CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    username VARCHAR(30) NOT NULL,
    email VARCHAR(50) NOT NULL
);

CREATE TABLE destinations (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    location VARCHAR(100),
    cost_pp INT(20),
    activity_genre VARCHAR(50),
    activity_type VARCHAR(200),
    activity_title VARCHAR(200),
    number_people INT(10),
     kid_friendly BOOLEAN

);

SELECT * FROM destinations;
SELECT * FROM users;
