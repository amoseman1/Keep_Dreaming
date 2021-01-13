DROP DATABASE IF EXISTS `travelDB`;
CREATE DATABASE `travelDB`;

CREATE TABLE destinations (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    location VARCHAR(100),
    cost INT(20)

);

INSERT INTO destinations VALUES ("London", 2000), ("Bali", 4000), ("Austin", 500), ("Denver", 400);

SELECT * FROM destinations;
