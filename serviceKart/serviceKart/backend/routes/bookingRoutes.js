
const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

router.post('/book', bookingController.createBooking);
router.get('/user-bookings', bookingController.getUserBookings);
router.get('/agent-bookings', bookingController.getAgentBookings);
router.post('/complete', bookingController.markCompleted);
router.get('/all', bookingController.getAllBookings);

module.exports = router;
