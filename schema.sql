DROP DATABASE IF EXISTS `travel_db`;
CREATE DATABASE `travel_db`;

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

INSERT INTO destinations VALUES (2,"London", 2000, "abroad", "museums"), (1,"Bali", 4000, "abroad", "diving"), (4, "Austin", 500, "city", "concert"), (2,"Denver", 400, "city", "sports game");

SELECT * FROM destinations;
