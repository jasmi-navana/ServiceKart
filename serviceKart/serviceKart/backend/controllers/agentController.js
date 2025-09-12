
const db = require('../config/db');

exports.getAllAgents = (req, res) => {
  db.query('SELECT * FROM agents', (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};
