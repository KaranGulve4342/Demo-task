
const db = require('../db');

const addUser = (name, mobile, email, callback) => {
  const sql = 'INSERT INTO users (name, mobile, email) VALUES (?, ?, ?)';
  db.query(sql, [name, mobile, email], callback);
};

const getUsers = (callback) => {
  const sql = 'SELECT * FROM users';
  db.query(sql, callback);
};

const updateUser = (id, name, mobile, email, callback) => {
  const sql = 'UPDATE users SET name = ?, mobile = ?, email = ? WHERE id = ?';
  db.query(sql, [name, mobile, email, id], callback);
};

const deleteUser = (id, callback) => {
  const sql = 'DELETE FROM users WHERE id = ?';
  db.query(sql, [id], callback);
};

module.exports = {
  addUser,
  getUsers,
  updateUser,
  deleteUser,
};
