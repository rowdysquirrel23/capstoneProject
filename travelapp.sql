-- create database capstone;
use capstone;

-- Users Table
-- CREATE TABLE users (
--     userid INT AUTO_INCREMENT PRIMARY KEY,
--     email VARCHAR(255) UNIQUE NOT NULL,
--     password VARCHAR(255) NOT NULL,
--     role VARCHAR(50) NOT NULL
-- );



-- Restaurants Table
-- CREATE TABLE restaurants (
--     resid INT AUTO_INCREMENT PRIMARY KEY,
--     name VARCHAR(255) NOT NULL,
--     location VARCHAR(255),
--     rating DOUBLE
-- );

-- Dishes Table
-- CREATE TABLE dishes (
--     dishid INT AUTO_INCREMENT PRIMARY KEY,
--     name VARCHAR(255) NOT NULL,
--     price DOUBLE NOT NULL,
--     restaurant_id INT NOT NULL,
--     FOREIGN KEY (restaurant_id) REFERENCES restaurants(resid) ON DELETE CASCADE
-- );

-- Orders Table
-- CREATE TABLE orders (
--     orderid INT AUTO_INCREMENT PRIMARY KEY,
--     userId INT NOT NULL,
--     totalPrice DOUBLE NOT NULL,
--     status VARCHAR(50) NOT NULL DEFAULT 'PENDING',
--     FOREIGN KEY (userId) REFERENCES users(userid) ON DELETE CASCADE
-- );

-- Order Items Table
-- CREATE TABLE order_items (
--     itemid INT AUTO_INCREMENT PRIMARY KEY,
--     order_id INT NOT NULL,
--     dish_id INT NOT NULL,
--     quantity INT NOT NULL,
--     price DOUBLE NOT NULL,
--     subtotal DOUBLE NOT NULL,
--     FOREIGN KEY (order_id) REFERENCES orders(orderid) ON DELETE CASCADE,
--     FOREIGN KEY (dish_id) REFERENCES dishes(dishid) ON DELETE CASCADE
-- );