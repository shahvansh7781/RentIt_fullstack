const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Booking = require("../models/bookingModel");
const Car = require("../models/carModel");
const ErrorHandler = require("../utils/errorHandler");

// Book Car
exports.bookCar = catchAsyncErrors(async (req, res, next) => {
  const selectedCar = await Car.findById(req.body.carBooked);
  if (!selectedCar) {
    return next(new ErrorHandler("Invalid Car", 500));
  }
  req.body.user = req.user.id;
  // req.body.totalAmount = selectedCar.rent * req.body.totalHours;
  req.body.transactionId = "1234";
  const newBooking = await Booking.create(req.body);
  if (!newBooking) {
    return next(new ErrorHandler("Booking Failed", 500));
  }
  // (selectedCar.bookedSlot.from = req.body.bookedSlot.from),
  //   (selectedCar.bookedSlot.to = req.body.bookedSlot.to),
  var obj = {
    from:req.body.bookedSlot.from,
    to:req.body.bookedSlot.to,
    bookingId:newBooking._id
  }
  selectedCar.bookedSlot.push(obj);
    // (selectedCar.bookedSlot.bookingId = newBooking._id),
    // bookedCar.bookedSlot.bookingId = newBooking._id;
    await selectedCar.save();
  res.status(200).json({
    success: true,
    bookingDetails:newBooking,
    bookingInfo:selectedCar.bookedSlot,
  });
});

// Get All Bookings --Admin

exports.allBookings = catchAsyncErrors(async (req, res, next) => {
  const bookings = await Booking.find({});
  if (!bookings) {
    return next(new ErrorHandler("No bookings available", 500));
  }
  res.status(200).json({
    success: true,
    bookings,
  });
});
