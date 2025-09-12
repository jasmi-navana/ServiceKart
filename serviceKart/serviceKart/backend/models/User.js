const db = require('../config/db');

exports.createUser = (user, callback) => {
  const sql = 'INSERT INTO users SET ?';
  db.query(sql, user, callback);
};

exports.findByEmail = (email, callback) => {
  db.query('SELECT * FROM users WHERE email = ?', [email], callback);
};
