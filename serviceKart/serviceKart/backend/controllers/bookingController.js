
const db = require('../config/db');

exports.createBooking = (req, res) => {
  const { name, address, date, serviceType } = req.body;
  db.query('INSERT INTO bookings (name, address, date, serviceType, status) VALUES (?, ?, ?, ?, ?)', 
    [name, address, date, serviceType, 'Pending'], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ success: true, id: result.insertId });
  });
};

exports.getUserBookings = (req, res) => {
  db.query('SELECT * FROM bookings WHERE name = ?', [req.query.name], (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.getAgentBookings = (req, res) => {
  db.query('SELECT * FROM bookings WHERE serviceType = ?', [req.query.serviceType], (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.markCompleted = (req, res) => {
  db.query('UPDATE bookings SET status = ? WHERE id = ?', ['Completed', req.body.id], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ success: true });
  });
};

exports.getAllBookings = (req, res) => {
  db.query('SELECT * FROM bookings', (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};
