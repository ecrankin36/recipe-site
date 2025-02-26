Project Overview

    Home Page: Describes my favorite foods and cooking experience.
    Recipe Listing Page: Displays recipes categorized by protein type (e.g., Chicken, Beef, Tofu, Grains).
    Recipe Page: Displays individual recipe details, including ingredients and cooking instructions.
    Add Recipe Page: Allows users to add a new recipe to the database.

To set up and run this project, you need the following:

  Node.js
  MySQL
  Git

First, clone this repository to your local machine:

  git clone https://github.com/erankin36/recipe-site.git
  cd recipe-site

Next, install the required Node.js dependencies:

  npm install

Open MySQL Workbench or the MySQL Command Line.
Use the following commands to create the database and tables:


CREATE DATABASE recipes_db;

USE recipes_db;

CREATE TABLE ingredients (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  details TEXT NOT NULL
);

CREATE TABLE recipes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  category VARCHAR(255) NOT NULL,
  instructions TEXT NOT NULL,
  ingredient_id INT,
  FOREIGN KEY (ingredient_id) REFERENCES ingredients(id)
);

INSERT INTO ingredients (name, details) VALUES
('Garlic', 'Used in many cuisines, strong aroma.'),
('Olive Oil', 'Staple in Mediterranean dishes.');

INSERT INTO recipes (name, category, instructions, ingredient_id) VALUES
('Garlic Chicken', 'Chicken', 'Cook chicken with garlic and olive oil.', 1);


In your project directory, create a .env file and add your MySQL database credentials:

  DB_HOST=localhost
  DB_USER=root
  DB_PASSWORD=yourpassword
  DB_NAME=recipes_db

Now that everything is set up, start the Express server by running the following:

  npm start

Your server will be available at http://localhost:3000.
