
const db = require('../config/db');

exports.login = (req, res) => {
  const { email, password, role } = req.body;
  const table = role === 'admin' ? 'admins' : role === 'agent' ? 'agents' : 'users';

  db.query('SELECT * FROM ?? WHERE email = ? AND password = ?', [table, email, password], (err, results) => {
    if (err) return res.status(500).json({ error: err });
    if (results.length === 0) return res.status(401).json({ message: 'Invalid credentials' });

    res.json({ success: true, user: results[0] });
  });
};

exports.register = (req, res) => {
  const { name, email, password, role, serviceType } = req.body;
  const table = role === 'agent' ? 'agents' : 'users';
  const fields = role === 'agent' ? '(name, email, password, serviceType)' : '(name, email, password)';
  const values = role === 'agent' ? [name, email, password, serviceType] : [name, email, password];

  db.query(`INSERT INTO ${table} ${fields} VALUES (?)`, [values], (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ success: true, id: results.insertId });
  });
};
