const db = require('../config/db');

exports.getFeedbackForBooking = (bookingId, callback) => {
  db.query('SELECT * FROM feedback WHERE booking_id = ?', [bookingId], callback);
};
