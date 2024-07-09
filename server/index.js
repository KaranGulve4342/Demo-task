const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', 
  password: 'karan4342', 
  database: 'demo_db',
  insecureAuth : true,
});

db.connect(err => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to database.');
});

app.post('/add', (req, res) => {
  const { name, mobile, email } = req.body;
  const sql = 'INSERT INTO users (name, mobile, email) VALUES (?, ?, ?)';
  db.query(sql, [name, mobile, email], (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(200).send('User added');
  });
});

app.get('/users', (req, res) => {
  const sql = 'SELECT * FROM users';
  db.query(sql, (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(200).json(result);
  });
});

app.listen(3001, () => {
  console.log('Server running on port 3001');
});
