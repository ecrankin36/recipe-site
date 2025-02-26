SELECT * FROM ingredients;
SELECT id, name FROM ingredients;

INSERT INTO ingredients (id, name, details) VALUES 
(1, 'Garlic', 'Used in many cuisines, strong aroma.'),
(2, 'Olive Oil', 'Staple in Mediterranean dishes.');

INSERT INTO recipes (name, category, instructions, ingredient_id) 
VALUES ('Garlic Chicken', 'Chicken', 'Cook chicken with garlic and olive oil.', 1);

SHOW CREATE TABLE recipes;
SHOW CREATE TABLE ingredients;

SELECT * FROM recipes;
