const db = require('../config/db');

exports.getBookingsByUser = (userId, callback) => {
  db.query('SELECT * FROM bookings WHERE user_id = ?', [userId], callback);
};
