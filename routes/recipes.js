const express = require('express');
const router = express.Router();
const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.DB_PASSWORD,
    database: 'recipes_db'
});

// Recipe listing
router.get('/', (req, res) => {
    const query = `SELECT * FROM recipes ORDER BY category`;
    db.query(query, (err, results) => {
        if (err) throw err;
        res.render('recipes', { recipes: results });
    });
});

// Recipe details page
router.get('/:id', (req, res) => {
    const query = `SELECT * FROM recipes WHERE id = ?`;
    db.query(query, [req.params.id], (err, results) => {
        if (err) throw err;
        res.render('recipe', { recipe: results[0] });
    });
});

// Add recipe form
router.get('/add', (req, res) => {
    res.render('add-recipe');
});

// Handle form submission
router.post('/add', (req, res) => {
    const { name, category, instructions, ingredient_id } = req.body;
    const query = `INSERT INTO recipes (name, category, instructions, ingredient_id) VALUES (?, ?, ?, ?)`;
    db.query(query, [name, category, instructions, ingredient_id], (err) => {
        if (err) throw err;
        res.redirect('/recipes');
    });
});

module.exports = router;
