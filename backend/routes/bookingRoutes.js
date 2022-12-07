const express = require('express');
const { bookCar, allBookings } = require('../controllers/bookingController');
const authorized = require('../middleware/authentication');
const router = express.Router();

router.route("/booking/new").post(authorized.myAuth,bookCar);
router.route("/admin/bookings").get(authorized.myAuth,authorized.authorizedRoles("admin"),allBookings);

module.exports = router;