CREATE DATABASE IF NOT exists demo_db;

USE demo_db;

CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  mobile VARCHAR(255),
  email VARCHAR(255)
);
