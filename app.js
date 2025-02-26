require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.DB_PASSWORD,
    database: 'recipes_db'
});

db.connect(err => {
    if (err) throw err;
    console.log('Connected to MySQL');
});

// Middleware
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
    res.render('index', { title: "Home" });
});

app.use('/recipes', require('./routes/recipes'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
