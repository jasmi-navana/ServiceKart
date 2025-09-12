const db = require('../config/db');

exports.getAllServices = (callback) => {
  db.query('SELECT * FROM services', callback);
};
