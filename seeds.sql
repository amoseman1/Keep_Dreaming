DROP DATABASE IF EXISTS travel_db;
CREATE DATABASE travel_db;


USE travel_db;


-- CREATE TABLE users (
--     id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
--     username VARCHAR(30) NOT NULL,
--     email VARCHAR(50) NOT NULL
-- );
CREATE TABLE destinations (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    location VARCHAR(100),
    cost_pp INT(20),
    activity_genre VARCHAR(50),
    activity_type VARCHAR(200),
    activity_title VARCHAR(800),
    number_people INT(10),
    kid_friendly BOOLEAN
);


INSERT INTO destinations (location, cost_pp, activity_genre, activity_type, activity_title, number_people, kid_friendly) VALUES ("London", 2000, "abroad", "cultural", "museums",1, true),
 ("Bali", 4000, "abroad", "adrenaline", "scuba diving", 1, false),
  ("Austin", 500, "city", "active", "concert", 1, false), 
  ("Denver", 500, "city", "active", "sporting event", 1, true),
  ("Backyard", 5, "city", "active", "Blowing Bubbles", 1, true),
  ("Japan", 8000, "mountain", "adrenaline", "Skiing", 1, false),
  ("Hawaii", 2000, "Beach", "adrenaline", "surfing", 1, false),
  ("In Your town", 30, "city", "relaxing", "Movie Theater", 1, true),
  ("Utah", 500, "mountain", "active", "Exploring Moab", 1, true),
  ("New Orleans", 500, "city", "volunteering", "Habitat for Humanity", 1, true),
  ("San Francisco", 1000, "city", "Partying", "Food/Bar Crawl", 1, false),
  ("San Diego", 1500, "city", "cultural", "San Diego Zoo", 1, true),
  ("Antartica", 15000, "abroad", "adrenaline", "Antartic Exploration", 1, false),
  ("Iceland", 2000, "abroad", "active", "Viewing Northern Lights", 1, false),
  ("Boston", 800, "city", "partying", "Going to Fenway Park", 1, true),
  ("Las Vegas", 500, "city", "partying", "Going to the Casinos", 1, false),
  ("Giraffe Manor", 5000, "abroad", "active", "African safari, lodging at the famouse Giraffe Manor", 1, true),
  ("Galapagos", 8000, "abroad", "adrenaline", "Live aboard dive trip", 1, false),
  ("Canadian Rockies", 3500, "Mountains", "adrenaline", "heli-skiing", 1, false),
  ("In your town", 50, "city", "active", "Sky Zone - trampolines", 1, true),
  ("Florida", 1500, "city", "active", "Disney World", 1, true),
  ("Cedar Point", 100, "city", "adrenaline", "Roller Coaster Amusement Park", 1, true),
  ("Denver", 500, "city", "active", "sporting event", 1),
  ("Denver", 500, "city", "active", "sporting event", 1),
  ("Denver", 500, "city", "active", "sporting event", 1),
  ("Denver", 500, "city", "active", "sporting event", 1),
  ("Denver", 500, "city", "active", "sporting event", 1),
  ("Denver", 500, "city", "active", "sporting event", 1);
