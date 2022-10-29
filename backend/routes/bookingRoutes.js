const express = require('express');
const { bookCar, allBookings } = require('../controllers/bookingController');
const authorized = require('../middleware/authentication');
const router = express.Router();

router.route("/booking/new").post(authorized.myAuth,bookCar);
router.route("/bookings").get(authorized.authorizedRoles("admin"),authorized.myAuth,allBookings);

module.exports = router;