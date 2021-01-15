
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
(“San Diego”, 600, “beach”, “active”, “surfing”, 2),
(“Taos”, 300, “mountains”, “active”, “skiing”, 4),
(“Thailand”, 1500, “abroad”, “volunteering”, “charity work”, 1),
(“Chicago”, 400, “city”, “cultural”, “museums”, 2),
(“Glacier National Park”, 200, “mountains”, “active”, “hiking”, 3),
(“Sicily”, 5000, “beach”, “cultural”, “cooking classes”, 1),
(“Morocco”, 3000, “city”, “active”, “hiking”, 2),
(“Scotland”, 2500, “mountains”, “active”, “biking”, 6),
(“Ibiza”, 3000, “beach", "partying", "full moon party", 2),
("Grand Canyon", 1500, "mountains", "active", "rafting", 10),


("Parent's House", 0, "domestic", "relxing", "pinochle", 1, false),
("Under the Bridge", 0, "local", "relaxing", "sleeping", 1, false),
("Swap houses with a friend", 53.99, "local", "relaxing", "take-out/Netflix", 4, true),
("Swap houses with a stranger", 100, "local", "relaxing", "delivery/movie theater", 2, false),
("Anywhere in Kansas", 400, "domestic", "domestic", "relaxing", "the bars", 2, false),
("Florida Keys", 2500, "domestic", "active", "fishing", 4, true),
("Nepal", 6000, "abroad", "adreneline", "climb Mt. Everest", 2, false),
("Alaska", 2000, "domestic", "active", "ice-fishing", 4, true),
("New York", 5000, "domestic", "active", "sight-seeing", 4, true),
("Dubai", 9000, "abroad", "adreneline", "eco tours", 8, true),
("Garden of the Gods in Colorado Springs", 1000, "city", "active", "rock climbing", 6, false),
("Bora Bora", 5000, "abroad", "adreneline", "jet boating", 2, false),
("Fiji", 4000, "abroad", "relaxing", "island tour", 5, true);
