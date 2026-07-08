CREATE DATABASE mera_ilaka;
USE meta_ilaka;
CREATE TABLE residents(
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(100),
email VARCHAR(100),
phone VARCHAR(20),
houseNo VARCHAR(20)
);

CREATE TABLE complaints(
id INT AUTO_INCREMENT PRIMARY KEY
residentId INT,
title VARCHAR(200),
description TEXT,
status VARCHAR(50)
);

CREATE TABLE shops(
id INT AUTO_INCREMENT PRIMARY KEY,
shopName VARCHAR(100),
category VARCHAR(100),
phone VARCHAR(20)

);