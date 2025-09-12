const db = require('../config/db');

exports.createAgent = (agent, callback) => {
  db.query('INSERT INTO agents SET ?', agent, callback);
};

exports.findByEmail = (email, callback) => {
  db.query('SELECT * FROM agents WHERE email = ?', [email], callback);
};
