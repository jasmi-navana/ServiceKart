
const db = require('../config/db');

exports.submitFeedback = (req, res) => {
  const { bookingId, rating, comments } = req.body;
  db.query('INSERT INTO feedback (bookingId, rating, comments) VALUES (?, ?, ?)', 
    [bookingId, rating, comments], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ success: true });
  });
};
